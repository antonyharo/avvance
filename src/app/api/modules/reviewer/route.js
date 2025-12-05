import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { getServiceRoleClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";

// --- 1. SCHEMAS ZOD (A Estrutura da Auditoria) ---

const matrixItemSchema = z.object({
  dimension: z
    .string()
    .describe("Nome da dimensão (ex: Trajetória, Resultados)."),
  score: z.number().min(1).max(5).describe("Nota de 1 a 5."),
  insight: z.string().describe("Feedback curto e direto sobre essa dimensão."),
  status: z
    .enum(["good", "warning", "alert", "critical"])
    .describe("Gravidade do feedback."),
});

const quickFixSchema = z.object({
  type: z
    .enum(["critical", "warning", "info"])
    .describe("Nível de urgência da correção."),
  title: z.string().describe("Título curto da ação (ex: Corrigir Datas)."),
  desc: z.string().describe("Instrução clara do que fazer."),
});

const evolutionItemSchema = z.object({
  title: z.string().describe("Meta de médio/longo prazo (ex: Inglês Fluente)."),
  priority: z.string().describe("Prioridade (Alta/Média/Baixa)."),
  progress: z
    .number()
    .describe("Estimativa de onde o candidato está hoje (0-100)."),
});

const resumeAuditSchema = z.object({
  header: z.object({
    atsScore: z
      .number()
      .min(0)
      .max(100)
      .describe("Nota geral do currículo para ATS."),
    criticalCount: z.number().describe("Número de erros críticos encontrados."),
    goldCount: z.number().describe("Número de diferenciais encontrados."),
  }),
  strategic: z.object({
    strengths: z.string().describe("Parágrafo resumindo os pontos fortes."),
    weaknesses: z
      .string()
      .describe("Parágrafo resumindo os pontos de atenção."),
  }),
  matrix5D: z
    .array(matrixItemSchema)
    .length(5)
    .describe(
      "Avaliação das 5 dimensões: Trajetória, Resultados, Competências, Diferenciais, Dados Estratégicos."
    ),
  oarr: z.object({
    original: z
      .string()
      .describe("Uma frase real do currículo que está ruim/passiva."),
    issue: z.string().describe("Por que essa frase é ruim."),
    refactored: z
      .string()
      .describe(
        "A mesma frase reescrita usando técnica OARR (Ação + Resultado + Números)."
      ),
    improvements: z
      .array(z.string())
      .describe("Lista de 2 melhorias feitas (ex: Adicionou métrica)."),
  }),
  actionPlan: z.object({
    quickFixes: z
      .array(quickFixSchema)
      .max(3)
      .describe("3 correções rápidas para fazer agora."),
    evolution: z
      .array(evolutionItemSchema)
      .max(3)
      .describe("3 metas de evolução profissional."),
  }),
  niche: z
    .array(z.string())
    .max(3)
    .describe("3 sugestões de nichos de mercado ideais para o perfil."),
});

// --- 2. HANDLER DA API ---

export async function POST(req) {
  try {
    const { userId } = await auth(req);
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file)
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey)
      return NextResponse.json({ error: "Missing API Key" }, { status: 500 });

    const arrayBuffer = await file.arrayBuffer();
    const base64File = Buffer.from(arrayBuffer).toString("base64");

    const ai = new GoogleGenAI({ apiKey });

    // Prompt Especializado em Auditoria ATS
    const prompt = `
      Atue como um Especialista em Recrutamento e Sistemas ATS (Applicant Tracking Systems).
      Analise o currículo anexo (PDF) de forma crítica e rigorosa.
      
      Seu objetivo: Identificar erros que eliminam o candidato e oportunidades para aumentar a conversão de entrevistas.
      
      Seja direto, use linguagem técnica de recrutamento, mas acessível ao candidato.
      No campo 'oarr', encontre uma frase fraca no CV e transforme-a em um case de sucesso.
      
      Retorne APENAS o JSON preenchendo o schema.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { text: prompt },
        { inlineData: { mimeType: "application/pdf", data: base64File } },
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: zodToJsonSchema(resumeAuditSchema),
      },
    });

    // Parse Seguro
    const responseText = response.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!responseText) throw new Error("No text returned from AI");

    const jsonOutput = JSON.parse(responseText);
    const validatedData = resumeAuditSchema.parse(jsonOutput);

    // Log no Supabase
    const supabase = getServiceRoleClient();
    await supabase.from("usage_logs").insert([
      {
        user_id: userId,
        module: "resume_audit",
        output: JSON.stringify(validatedData),
      },
    ]);

    return NextResponse.json({ output: validatedData }, { status: 200 });
  } catch (error) {
    console.error("Resume Audit API Error:", error);
    return NextResponse.json(
      { error: "Failed to audit resume" },
      { status: 500 }
    );
  }
}
