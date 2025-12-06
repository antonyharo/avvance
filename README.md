# Avvance

> **Hiring Intelligence para Candidatos.**
> A tecnologia que as empresas usam para filtrar talentos, agora usada para hackear o processo seletivo.

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![Gemini](https://img.shields.io/badge/AI-Gemini%202.5%20Flash-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-yellow)

## Sobre o Projeto

O **Avvance** é uma plataforma B2C focada em empoderar candidatos no mercado de trabalho. Enquanto empresas utilizam ATS (Applicant Tracking Systems) para filtrar currículos automaticamente, o Avvance utiliza IA Generativa para engenharia reversa desses processos.

Não é apenas um "gerador de texto". A plataforma utiliza uma arquitetura de **Structured Outputs** (via Zod Schemas) para garantir que a IA retorne dados precisos para análises métricas, matrizes de competência e diagnósticos de compatibilidade.

## 🛠️ Stack Tecnológica

### Core & Frontend
*   **Framework:** Next.js 15 (App Router + Turbopack)
*   **Estilização:** Tailwind CSS + Shadcn/UI
*   **Animações:** Framer Motion
*   **Ícones:** Lucide React

### AI & Backend
*   **LLM Model:** Google Gemini 2.5 Flash (via `@google/genai` SDK)
*   **Validation:** Zod + `zod-to-json-schema` (Para saídas estruturadas/JSON Mode)
*   **Database & Logs:** Supabase
*   **Auth:** Clerk

---

## ⚡ Módulos de Inteligência

A plataforma é dividida em agentes especializados, cada um com um system prompt e schema de validação únicos:

### 1. Revisor de Currículos
Um "Code Review" da carreira do usuário.
*   **Matriz 5D:** Analisa Trajetória, Resultados, Competências, Diferenciais e Dados.
*   **Método OARR:** Refatora descrições passivas em (Oportunidade, Ação, Resultado, Relevância).
*   **Output:** Score ATS (0-100) e plano de ação imediato.

### 2. Match de Vagas (Candidate x Job)
Compara o perfil do candidato contra uma JD (Job Description) específica.
*   Identifica gaps críticos (ex: metodologias conflitantes).
*   Calcula risco de contratação (ex: Overqualified, Desvio de Função).
*   Gera KPIs de aderência técnica e cultural.

### 3. Gerador de Linkedin
Atua como um copywriter especializado.
*   Gera headlines (Corporativas vs. Autorais).
*   Reescreve a seção "Sobre" com storytelling.
*   Transforma bullets de experiência em conquistas quantificáveis.

### 4. Gerador de Perfis (Benchmark)
Cria o "Avatar Perfeito" para uma vaga.
*   Analisa a vaga e projeta quem seria o candidato ideal.
*   Define a senioridade real, stack tecnológica obrigatória e soft skills esperadas.
*   Serve como gabarito para o usuário comparar seu próprio perfil.

---

## 🏗️ Arquitetura de IA

Para evitar alucinações e quebras de UI, o projeto não renderiza texto puro da IA. Utilizamos um fluxo de **Data-Driven UI**:

1.  **Schema Definition:** Definimos a estrutura exata esperada usando Zod.
2.  **Generation:** O Gemini 2.5 Flash é forçado a responder em `application/json` seguindo o schema.
3.  **Parsing & Sanitization:** O backend limpa a resposta (removendo markdown artifacts) e valida com Zod.
4.  **Rendering:** O React recebe um objeto JSON tipado e hidrata componentes visuais complexos (Gráficos, Barras de Progresso, Cards).

---

## 🚀 Como Rodar Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/avvance/avvance.git
   cd avvance
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz:
   ```env
    NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxxxxxxxxxxxxxx.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    SUPABASE_SERVICE_ROLE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    CLERK_WEBHOOK_SECRET=whsec_xxxx/xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    GEMINI_API_KEY=xxxxxxxxxxxxxxxxxxxxxxx
   ```

4. **Execute o projeto:**
   ```bash
   npm run dev
   ```

---

## 🤝 Contribuição

Pull requests são bem-vindos. Para mudanças maiores, por favor abra uma issue primeiro para discutir o que você gostaria de mudar.