import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { getServiceRoleClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";
// import { interviewSimulatorPrompt } from "@/config/prompts";

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

    const ai = new GoogleGenAI({});

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { text: interviewSimulatorPrompt(job) },
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
        module: "interview-simulator",
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
    console.error("Erro ao processar o arquivo:", error);
    return NextResponse.json(
      { error: "Erro ao processar o arquivo" },
      { status: 500 }
    );
  }
}

export const interviewSimulatorPrompt = (job) => `
    Você é um especialista sênior em Recrutamento e Seleção (Tech Recruiter) com vasta experiência em desenvolvimento de software. Sua tarefa é analisar um currículo e uma descrição de vaga para criar um quiz de entrevista simulada.

    **Contexto:**
    - **Vaga:** ${job.title} (${job.jobLevel})
    - **Descrição da Vaga:** ${job.description}

    **Sua Tarefa:**
    Crie um quiz de 10 a 12 perguntas que avaliem a aderência do candidato (baseado no currículo) à vaga (baseada na descrição).

    **Regras para as Perguntas:**
    1.  **Cross-Reference:** As perguntas DEVEM cruzar informações. Elas devem ser sobre como a "Experiência do Currículo" se aplica aos "Requisitos da Vaga".
        -   *Exemplo Ruim (Genérico):* "O que é React?"
        -   *Exemplo Bom (Específico):* "Vimos no seu currículo que você usou Redux no Projeto X. Para esta vaga, lidamos com gerenciamento de estado complexo em tempo real. Qual alternativa melhor descreve como você usaria Redux (ou outra ferramenta) para otimizar a performance nesse cenário?"
    2.  **Tipos de Pergunta:** Gere um mix de:
        -   **Técnicas (Hard Skills):** Sobre tecnologias, arquiteturas ou metodologias listadas em ambos os documentos.
        -   **Comportamentais (Soft Skills):** Cenários baseados nos desafios da vaga (ex: "A vaga exige colaboração com PMs. Como você lidaria com...").
        -   **Situacionais:** "No seu currículo, você menciona [Projeto Y]. Qual foi o maior desafio técnico que você enfrentou e como o resolveu?"
    3.  **Alternativas:** Crie de 3 a 4 alternativas para cada pergunta.
        -   As alternativas devem ser plausíveis, mas apenas uma deve ser a "ideal" ou "mais correta" no contexto da vaga.
    4.  **Índice Correto:** Você DEVE fornecer o índice da resposta correta (começando em 0). Isso é crucial para a avaliação.

    **Formato de Saída OBRIGATÓRIO:**
    A sua resposta deve ser APENAS um objeto JSON válido, sem nenhum texto antes ou depois (sem markdown, sem "aqui está o json:").

    **Estrutura JSON Esperada:**
    [
    {
        "questionText": "Texto completo da pergunta 1...",
        "alternatives": [
        { "text": "Texto da alternativa A" },
        { "text": "Texto da alternativa B" },
        { "text": "Texto da alternativa C" }
        ],
        "correctAnswerIndex": 1 // O índice (0, 1 ou 2) da alternativa correta
    },
    {
        "questionText": "Texto completo da pergunta 2...",
        "alternatives": [
        { "text": "Texto da alternativa A" },
        { "text": "Texto da alternativa B" },
        { "text": "Texto da alternativa C" },
        { "text": "Texto da alternativa D" }
        ],
        "correctAnswerIndex": 0
    }
    ]`;

export const linkedinGeneratorPrompt = `Você é um consultor de carreira sênior, com vasta experiência em construção de perfis profissionais para o LinkedIn. Sua tarefa é transformar o conteúdo de um currículo em um **perfil de LinkedIn extremamente atrativo, completo, detalhado e alinhado com as exigências do mercado de trabalho atual**.

Se alguma informação não estiver no currículo, simplesmente ignore a seção e não inclua nenhuma informação extra.

Com base no currículo em anexo, crie um perfil de LinkedIn estruturado com todas as seções relevantes, focado em apresentar o candidato da melhor forma para oportunidades de alto nível.

O conteúdo deve ser bem escrito, **agradável de ler**, com tom profissional, atraente, moderno e orientado a resultados. Use linguagem clara, voz (
em **primeira pessoa**, destaque conquistas, valorize experiências e torne o perfil atrativo para recrutadores.

🧩 FORMATO DE SAÍDA ESPERADO:

🔹 ## 👤 Nome do Candidato

🔹 ## Sobre (Resumo do Perfil)  
[Resumo com 5 a 10 linhas. Destaque trajetória, áreas de especialização, competências centrais, estilo de trabalho, diferenciais e ambições profissionais.]

🔹 ## Experiência  
(Para cada experiência profissional, use o seguinte modelo)

**[Cargo]**  
[Nome da Empresa] – [Cidade/Estado ou Remoto]  
[MM/AAAA] – [MM/AAAA ou Atualmente]  
Descrição:  
- [Responsabilidade ou conquista 1]  
- [Responsabilidade ou conquista 2]  
- [Projetos relevantes, tecnologias utilizadas ou equipes lideradas, se aplicável]

🔹 ## Formação Acadêmica

**[Curso]**  
[Instituição] – [Cidade/Estado]  
[MM/AAAA] – [MM/AAAA ou Concluído]

🔹 ## Certificações  
- [Nome da Certificação] – [Instituição] – [Ano]  
- [Outras certificações relevantes]

🔹 ## Competências e Habilidades  
[Liste habilidades técnicas e comportamentais: ferramentas, idiomas, metodologias, soft skills com foco no mercado de trabalho atual]

🔹 ## Idiomas  
- [Idioma 1] – [Nível de fluência]  
- [Idioma 2, se houver]

🔹 ## Cursos Complementares / Especializações  
- [Curso 1] – [Instituição] – [Carga horária ou ano]  
- [Curso 2, se houver]

⚠️ Importante: gere conteúdo atrativo, estratégico e com forte apelo profissional. Não apenas converta dados — transforme o currículo em um perfil poderoso, alinhado com o estilo do LinkedIn e com alta aderência a boas oportunidades.

⚠️ Importante: entregue o perfil pronto para copiar e colar no LinkedIn, sem instruções ou colchetes no texto final.`;
