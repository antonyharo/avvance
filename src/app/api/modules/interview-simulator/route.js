import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getServiceRoleClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";
import { interviewSimulatorPrompt } from "@/config/prompts";

export async function POST(req) {
  try {
    const { userId } = await auth(req);

    if (!userId) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file");
    const jobData = formData.get("job");

    if (!file) {
      console.error("Erro: Nenhum arquivo foi enviado.");
      return NextResponse.json(
        { error: "Arquivo não encontrado" },
        { status: 400 }
      );
    }

    if (!jobData) {
      return NextResponse.json(
        { error: "Dados da vaga ausentes." },
        { status: 400 }
      );
    }

    const job = JSON.parse(jobData);
    if (!job.title || !job.description) {
      return NextResponse.json(
        { error: "Informações da vaga incompletas." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const base64File = Buffer.from(arrayBuffer).toString("base64");

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Erro: API Key do Gemini não configurada.");
      return NextResponse.json(
        { error: "API Key do Gemini não configurada" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { text: interviewSimulatorPrompt(job) },
            {
              inlineData: {
                mimeType: "application/pdf",
                data: base64File,
              },
            },
          ],
        },
      ],
    });

    const output = await result.response.text();

    const supabase = getServiceRoleClient();

    const { error } = await supabase.from("usage_logs").insert([
      {
        user_id: userId,
        module: "interview-simulator",
        output: output,
      },
    ]);

    if (error) {
      throw new Error(
        `Erro ao buscar dados das análises: ${error.message || error}`
      );
    }

    return NextResponse.json({ output }, { status: 200 });
  } catch (error) {
    console.error("Erro ao processar o arquivo:", error);
    return NextResponse.json(
      { error: "Erro ao processar o arquivo" },
      { status: 500 }
    );
  }
}
