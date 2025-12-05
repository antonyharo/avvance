import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { getServiceRoleClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";

// --- 1. SCHEMAS ZOD (Estrutura da Persona Ideal) ---

const trajectorySchema = z.object({
  role: z.string().describe("Cargo (ex: Analista de Vendas Sênior)."),
  duration: z.string().describe("Tempo médio estimado (ex: 2-3 Anos)."),
  context: z
    .string()
    .describe("Tipo de empresa/setor (ex: SaaS / Tech Médio Porte)."),
  responsibilities: z
    .array(z.string())
    .describe(
      "Lista de 2 a 3 responsabilidades chave para essa fase da carreira."
    ),
});

const softSkillSchema = z.object({
  title: z.string().describe("Nome da skill (ex: Detalhista)."),
  desc: z.string().describe("Explicação curta de por que ela é necessária."),
});

const benchmarkProfileSchema = z.object({
  role: z.object({
    title: z.string().describe("Título ideal padronizado para a vaga."),
    mindset: z
      .string()
      .describe("Frase que define a personalidade/mindset do candidato ideal."),
    level: z.string().describe("Senioridade estimada (ex: Pleno/Sênior)."),
    industry: z.string().describe("Setor de atuação mais provável."),
  }),
  education: z.object({
    degree: z
      .string()
      .describe("Formação acadêmica ideal (ex: Bacharelado em Marketing)."),
    certification: z.string().describe("Pós ou certificação desejável."),
  }),
  techStack: z.object({
    crm: z
      .array(z.string())
      .max(5)
      .describe("Lista de ferramentas principais exigidas (ex: CRMs)."),
    data: z
      .array(z.string())
      .max(5)
      .describe(
        "Lista de ferramentas secundárias/apoio (ex: Analytics, Excel)."
      ),
  }),
  logistics: z.object({
    english: z.string().describe("Nível de inglês ideal."),
    model: z
      .string()
      .describe("Modelo de trabalho sugerido (Híbrido/Presencial/Remoto)."),
  }),
  trajectory: z
    .array(trajectorySchema)
    .max(2)
    .describe(
      "Gere 2 etapas de carreira anteriores que formariam esse profissional."
    ),
  softSkills: z
    .array(softSkillSchema)
    .length(4)
    .describe("Exatamente 4 soft skills cruciais."),
  differentials: z
    .array(z.string())
    .max(4)
    .describe("Até 4 diferenciais que seriam um 'Uau' para o recrutador."),
});

// --- 2. HANDLER DA API ---

export async function POST(req) {
  try {
    const { userId } = await auth(req);
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();

    const { job } = body;

    if (!job || !job.title || !job.description) {
      return NextResponse.json(
        { message: "Dados incompletos da vaga." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey)
      return NextResponse.json({ error: "Missing API Key" }, { status: 500 });

    const ai = new GoogleGenAI({ apiKey });

    // Prompt Especializado em Criação de Persona
    const prompt = `
      Atue como um Headhunter Visionário e Especialista em Engenharia de Cargos.
      
      Analise a descrição da vaga abaixo.
      Sua missão é criar o "Avatar Perfeito" (Benchmark Profile) para essa posição.
      Não descreva a vaga, descreva a PESSOA que preenche essa vaga com excelência.
      
      VAGA:
      """
      ${job.title}
      ${job.description}
      """
      
      Retorne APENAS o JSON preenchendo o schema.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ text: prompt }],
      config: {
        responseMimeType: "application/json",
        responseSchema: zodToJsonSchema(benchmarkProfileSchema),
        temperature: 0.3, // Baixa temperatura para ser realista e consistente
      },
    });

    const responseText = response.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!responseText) throw new Error("No text returned from AI");

    const jsonOutput = JSON.parse(responseText);
    const validatedData = benchmarkProfileSchema.parse(jsonOutput);

    // Log
    const supabase = getServiceRoleClient();
    await supabase.from("usage_logs").insert([
      {
        user_id: userId,
        module: "profile-generator",
        output: JSON.stringify(validatedData),
      },
    ]);

    return NextResponse.json({ output: validatedData }, { status: 200 });
  } catch (error) {
    console.error("Benchmark API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate benchmark profile" },
      { status: 500 }
    );
  }
}
