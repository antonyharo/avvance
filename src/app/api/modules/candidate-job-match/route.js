import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { getServiceRoleClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";

// --- 1. SCHEM-

const kpiSchema = z.object({
  status: z
    .string()
    .describe("Status curto (ex: Baixa Compatibilidade, Alta Aderência)."),
  description: z.string().describe("Explicação resumida do porquê."),
  scoreColor: z
    .enum(["red", "yellow", "green"])
    .describe("Cor visual para o card."),
});

const comparisonItemSchema = z.object({
  label: z
    .string()
    .describe("Categoria comparada (ex: Metodologia, Ferramentas)."),
  value: z.string().describe("Valor ou lista de itens."),
});

const candidateComparisonItemSchema = comparisonItemSchema.extend({
  status: z
    .enum(["match", "partial", "mismatch", "missing"])
    .describe("Status da comparação neste item."),
});

const diagnosisSchema = z.object({
  type: z
    .enum(["critical", "warning", "positive"])
    .describe("Tipo do diagnóstico."),
  title: z.string().describe("Título do ponto levantado."),
  description: z.string().describe("Explicação detalhada."),
});

const matchReportSchema = z.object({
  header: z.object({
    candidateName: z.string().default("Candidato"),
    jobTitle: z.string().default("Vaga"),
    matchScore: z
      .number()
      .min(0)
      .max(100)
      .describe("Nota de 0 a 100 de aderência."),
  }),
  kpis: z.object({
    hardSkills: kpiSchema,
    experience: kpiSchema,
    softSkills: kpiSchema,
  }),
  synthesis: z.object({
    analysis: z.string().describe("Análise qualitativa geral do match."),
    risk: z.string().describe("Avaliação de risco de contratação."),
  }),
  comparison: z.object({
    jobRequirements: z
      .array(comparisonItemSchema)
      .length(3)
      .describe("Exatamente 3 categori."),
    candidateProfile: z
      .array(candidateComparisonItemSchema)
      .length(3)
      .describe(" ótica do candidato."),
  }),
  diagnosis: z
    .array(diagnosisSchema)
    .max(4)
    .describe("Até 4 pontos principais de diagnóstico (gaps ou matches)."),
  recommendation: z.object({
    badge: z
      .string()
      .describe(
        "Veredito curto (ex: Contratação de Risco, Altamente Recomendado)."
      ),
    text: z.string().describe("Sugestão final ou dica de carreira para o candidato."),
  }),
});

// --- 2. HANDLER DA API ---

export async function POST(req) {
  try {
    // 1. Auth
    const { userId } = await auth(req);
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // 2. Parse FormData
    const formData = await req.formData();
    const file = formData.get("file");
    const jobDataString = formData.get("job");

    if (!file || !jobDataString) {
      return NextResponse.json(
        { error: "Missing file or job data" },
        { status: 400 }
      );
    }

    // 3. Setup Gemini
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey)
      return NextResponse.json({ error: "No API Key" }, { status: 500 });

    const arrayBuffer = await file.arrayBuffer();
    const base64File = Buffer.from(arrayBuffer).toString("base64");

    // Parse job data para injetar no prompt
    const jobData = JSON.parse(jobDataString);
    const jobContext = `
      TÍTULO DA VAGA: ${jobData.title}
      DESCRIÇÃO DA VAGA: ${jobData.description}
    `;

    const ai = new GoogleGenAI({ apiKey });

    // 4. Prompt
    const prompt = `
      Atue como uma IA de Hiring Intelligence. 
      Compare o currículo em anexo (PDF) com a descrição da vaga fornecida abaixo.
      Gere um Relatório de Match detalhado, identificando gaps técnicos, culturais e de senioridade.
      Seja imparcial e rigoroso na pontuação (Match Score).
      
      DADOS DA VAGA:
      """
      ${jobContext}
      """
    `;

    // 5. Generate Content
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { text: prompt },
        { inlineData: { mimeType: "application/pdf", data: base64File } },
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: zodToJsonSchema(matchReportSchema),
      },
    });

    // 6. Parse Safe Response
    const responseText = response.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!responseText) throw new Error("No text returned from AI");

    const jsonOutput = JSON.parse(responseText);
    const validatedData = matchReportSchema.parse(jsonOutput);

    // 7. Log to Supabase
    const supabase = getServiceRoleClient();
    await supabase.from("usage_logs").insert([
      {
        user_id: userId,
        module: "candidate_job_match",
        output: JSON.stringify(validatedData),
      },
    ]);

    return NextResponse.json({ output: validatedData }, { status: 200 });
  } catch (error) {
    console.error("Match API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate match report" },
      { status: 500 }
    );
  }
}
