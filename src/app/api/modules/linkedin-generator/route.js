import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { getServiceRoleClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";

// --- 1. SCHEMAS ZOD (Estrutura do LinkedIn) ---

const headlineSchema = z.object({
  type: z.enum(["Corporativo", "Autoral"]).describe("Tipo da headline."),
  label: z
    .string()
    .describe("Rótulo descritivo (ex: Opção Conservadora, Opção Destaque)."),
  text: z
    .string()
    .describe("O texto da headline otimizado com palavras-chave e/ou emojis."),
});

const experienceSchema = z.object({
  role: z.string().describe("Cargo."),
  company: z.string().describe("Empresa."),
  period: z.string().describe("Período (ex: 2021 - Atual)."),
  bullets: z
    .array(z.string())
    .describe(
      "Lista de 2 a 3 bullet points focados em RESULTADOS e MÉTRICAS. Use tags <strong> para destacar números."
    ),
});

const linkedinProfileSchema = z.object({
  header: z.object({
    fullName: z.string().describe("Nome do candidato extraído do CV."),
    title: z.string().default("Sugestão de Perfil Otimizado"),
  }),
  headlines: z
    .array(headlineSchema)
    .length(2)
    .describe("Gere exatamente 2 opções de headline."),
  about: z.object({
    content: z
      .string()
      .describe(
        "Texto para a seção 'Sobre' (About). Use tags HTML <p>, <strong> e <br> para formatar. Use storytelling, primeira pessoa e foco em valor."
      ),
  }),
  experience: z
    .array(experienceSchema)
    .max(3)
    .describe("Reescreva as 3 experiências mais recentes focando em impacto."),
  skills: z
    .array(z.string())
    .max(10)
    .describe("Lista de até 10 competências principais para SEO do LinkedIn."),
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

    // Prompt Especializado em Copywriting de Carreira
    const prompt = `
      Atue como um Especialista em Personal Branding e Copywriter de Carreira (LinkedIn Top Voice).
      Analise o currículo anexo (PDF).
      
      Seu objetivo: Criar um perfil de LinkedIn magnético para este candidato.
      
      Diretrizes:
      1. Headlines: Crie uma opção segura (cargos + skills) e uma autoral (proposta de valor + impacto).
      2. Sobre (About): Escreva em 1ª pessoa. Comece com um gancho forte ("hook"). Não seja robótico. Use storytelling.
      3. Experiência: Transforme as descrições de tarefas em CONQUISTAS. Use verbos de ação e destaque números com <strong>.
      4. Skills: Selecione as palavras-chave mais buscadas por recrutadores para esse perfil.
      
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
        responseSchema: zodToJsonSchema(linkedinProfileSchema),
        temperature: 0.4, // Um pouco de criatividade para o texto, mas controlado
      },
    });

    // Parse Seguro
    const responseText = response.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!responseText) throw new Error("No text returned from AI");

    const jsonOutput = JSON.parse(responseText);
    const validatedData = linkedinProfileSchema.parse(jsonOutput);

    // Salvar Log
    const supabase = getServiceRoleClient();
    await supabase.from("usage_logs").insert([
      {
        user_id: userId,
        module: "linkedin_generator",
        output: JSON.stringify(validatedData),
      },
    ]);

    return NextResponse.json({ output: validatedData }, { status: 200 });
  } catch (error) {
    console.error("LinkedIn Generator Error:", error);
    return NextResponse.json(
      { error: "Failed to generate LinkedIn profile" },
      { status: 500 }
    );
  }
}
