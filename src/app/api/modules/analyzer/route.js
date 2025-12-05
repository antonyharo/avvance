import { NextResponse } from "next/server";
// Importações do Google Gen AI e Zod
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Importações de Infra (Supabase/Clerk)
import { getServiceRoleClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";

// --- 1. Definição dos Schemas Zod (A Estrutura do Raio-X) ---

const softSkillSchema = z.object({
  name: z
    .string()
    .describe(
      "Nome da competência comportamental (ex: Liderança, Resiliência)."
    ),
  pct: z.number().min(0).max(100).describe("Nível da habilidade de 0 a 100."),
});

const trackRecordSchema = z.object({
  title: z
    .string()
    .describe("Título curto da conquista (ex: Aumento de Eficiência)."),
  desc: z.string().describe("Descrição focada em impacto e números."),
  icon: z
    .enum(["trending", "lightbulb"])
    .describe(
      "Escolha 'trending' para métricas/crescimento ou 'lightbulb' para inovação/liderança."
    ),
});

const candidateXRaySchema = z.object({
  header: z.object({
    title: z.string().default("Raio-X do Candidato"),
    subtitle: z
      .string()
      .default("Visão 360º: Competências, Potencial e Valor de Mercado."),
    scoreText: z
      .string()
      .describe(
        "Texto curto de ranking (ex: 'Top 5% do Mercado', 'Alto Potencial')."
      ),
    scoreColor: z.string().default("primary"),
  }),
  identity: z.object({
    summary: z
      .string()
      .describe(
        "Resumo executivo em 3ª pessoa, destacando o perfil estratégico e híbrido do candidato."
      ),
    valuation: z.object({
      range: z
        .string()
        .describe("Faixa salarial estimada de mercado (ex: 'R$ 12k - 18k')."),
      type: z
        .string()
        .describe(
          "Tipo de contratação e nível (ex: 'Faixa estimada (CLT/PJ)')."
        ),
      level: z
        .string()
        .describe("Senioridade percebida (ex: Sênior, Pleno, Especialista)."),
      tags: z
        .array(z.string())
        .describe(
          "2 ou 3 tags curtas sobre demanda (ex: 'Alta Demanda', 'Negociação Alta')."
        ),
    }),
    softSkills: z
      .array(softSkillSchema)
      .length(3)
      .describe("Exatamente 3 soft skills principais."),
  }),
  technical: z.object({
    main: z
      .array(z.string())
      .max(6)
      .describe("Até 6 hard skills principais (Domínio Principal)."),
    differentials: z
      .array(z.string())
      .max(4)
      .describe("Até 4 diferenciais competitivos (ex: Inglês, Certificações)."),
  }),
  trackRecord: z
    .array(trackRecordSchema)
    .max(2)
    .describe("2 grandes conquistas ou projetos de destaque."),
  insights: z.object({
    cultureFit: z
      .string()
      .describe(
        "Tipo de empresa ideal para este perfil (ex: Startups, Bancos, Consultorias)."
      ),
    attentionPoint: z
      .string()
      .describe("Um ponto de atenção construtivo para o recrutador."),
  }),
});

// --- 2. Handler da API (POST) ---

export async function POST(req) {
  try {
    // 1. Autenticação (Clerk)
    const { userId } = await auth(req);
    if (!userId) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      );
    }

    // 2. Processamento do Arquivo
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { error: "Arquivo não encontrado" },
        { status: 400 }
      );
    }

    // 3. Validação da API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key do Gemini não configurada" },
        { status: 500 }
      );
    }

    // 4. Conversão do Arquivo para Base64 (Para o Gemini ler)
    const arrayBuffer = await file.arrayBuffer();
    const base64File = Buffer.from(arrayBuffer).toString("base64");

    // 5. Inicialização do Cliente Gemini
    const ai = new GoogleGenAI({ apiKey });

    // 6. Definição do Prompt de Sistema
    const prompt = `
      Atue como um Headhunter Executivo de elite.
      Analise profundamente o currículo (arquivo PDF fornecido) e gere um "Dossiê de Inteligência" (Raio-X).
      Seja estratégico, direto e saiba ler nas entrelinhas para estimar senioridade e salário.
    `;

    // 7. Chamada à IA com Schema Estruturado
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { text: prompt },
        {
          inlineData: {
            mimeType: "application/pdf",
            data: base64File,
          },
        },
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: zodToJsonSchema(candidateXRaySchema),
      },
    });

    // 8. Parseamento e Validação (CORRIGIDO AQUI)
    // Em vez de response.text(), acessamos o texto diretamente na estrutura do objeto:
    // candidates[0] -> content -> parts[0] -> text
    const responseText = response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      throw new Error("A IA não retornou nenhum texto.");
    }

    const jsonOutput = JSON.parse(responseText);
    const validatedData = candidateXRaySchema.parse(jsonOutput);

    // 9. Salvar Log no Supabase
    const supabase = getServiceRoleClient();
    const { error: dbError } = await supabase.from("usage_logs").insert([
      {
        user_id: userId,
        module: "analyzer",
        output: JSON.stringify(validatedData),
      },
    ]);

    if (dbError) {
      console.error("Erro no Supabase:", dbError);
    }

    // 10. Retorno para o Frontend
    return NextResponse.json({ output: validatedData }, { status: 200 });
  } catch (error) {
    console.error("Erro ao processar o arquivo:", error);
    return NextResponse.json(
      { error: "Erro ao processar o arquivo ou gerar análise." },
      { status: 500 }
    );
  }
}
