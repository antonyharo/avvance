import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { linkedinGeneratorPrompt } from "@/config/prompts/linkedinGeneratorPrompt";
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

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { error: "Arquivo não encontrado" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const base64File = Buffer.from(arrayBuffer).toString("base64");

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key do Gemini não configurada" },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({});

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { text: linkedinGeneratorPrompt },
        {
          inlineData: {
            mimeType: "application/pdf",
            data: base64File,
          },
        },
      ],
    });

    const supabase = getServiceRoleClient();

    const { error } = await supabase.from("usage_logs").insert([
      {
        user_id: userId,
        module: "linkedin-generator",
        output: response.text,
      },
    ]);

    if (error) {
      throw new Error(
        `Erro ao buscar dados das análises: ${error.message || error}`
      );
    }

    return NextResponse.json({ output: response.text }, { status: 200 });
  } catch (error) {
    console.error("Erro ao processar o currículo:", error);
    return NextResponse.json(
      { error: "Erro ao gerar perfil do LinkedIn" },
      { status: 500 }
    );
  }
}
