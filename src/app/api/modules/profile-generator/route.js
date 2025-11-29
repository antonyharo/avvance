import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { profileGeneratorPrompt } from "@/config/prompts";
import { getServiceRoleClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(req) {
  try {
    const { userId } = await auth(req);

    if (!userId) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { job } = body;

    if (!job || !job.title || !job.description) {
      return NextResponse.json(
        { message: "Dados incompletos da vaga." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { message: "Chave da API Gemini não configurada." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({});
    const output = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: profileGeneratorPrompt(job),
    });

    const supabase = getServiceRoleClient();

    const { error } = await supabase.from("usage_logs").insert([
      {
        user_id: userId,
        module: "profile-generator",
        output: output.text,
      },
    ]);

    if (error) {
      throw new Error(
        `Erro ao buscar dados das análises: ${error.message || error}`
      );
    }

    return NextResponse.json({ response: output.text }, { status: 200 });
  } catch (error) {
    console.error("Erro na geração de perfil:", error);
    return NextResponse.json(
      { message: "Erro ao gerar perfil." },
      { status: 500 }
    );
  }
}
