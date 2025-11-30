import { NextResponse } from "next/server";
import { getServiceRoleClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(req) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      );
    }

    const supabase = getServiceRoleClient();

    const { data, error } = await supabase
      .from("usage_logs")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.log(error);
      return NextResponse.json(
        { error: `Erro ao buscar histórico: ${error.message}` },
        { status: 400 }
      );
    }

    return NextResponse.json(data || [], { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erro ao processar requisição" },
      { status: 500 }
    );
  }
}
