import { Card } from "../ui/card";
import Loader from "../ui/loader";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Scale,
  Target,
  BrainCircuit,
  Briefcase,
  GitPullRequest,
  GraduationCap,
  ScrollText,
  FileBadge,
} from "lucide-react";

export default function MatchAnalysisDemo({ loading }) {
  if (loading) {
    return (
      <Card className="container mx-auto p-8 border-dashed w-full max-w-5xl bg-card/50 gap-1">
        {/* HEADER LOADING */}
        <header className="space-y-5">
          <div className="space-y-3 animate-pulse">
            <div className="flex items-center gap-3">
              <Loader />
              <h1 className="text-3xl font-bold text-muted-foreground/60">
                Cruzando Dados...{" "}
                <span className="text-muted-foreground/30 font-normal">
                  - Análise de Compatibilidade
                </span>
              </h1>
            </div>
            <p className="text-sm text-muted-foreground/50">
              Verificando requisitos, stack tecnológica e fit cultural...
            </p>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
            <Skeleton className="h-28 w-full rounded-lg" />
            <Skeleton className="h-28 w-full rounded-lg" />
            <Skeleton className="h-28 w-full rounded-lg" />
          </div>
        </header>

        <main className="space-y-8 mt-8">
          <Skeleton className="h-48 w-full rounded-lg" />
          <div className="grid md:grid-cols-2 gap-6">
            <Skeleton className="h-80 w-full rounded-lg" />
            <Skeleton className="h-80 w-full rounded-lg" />
          </div>
        </main>
      </Card>
    );
  }

  return (
    <Card className="container mx-auto p-8 border-dashed w-full max-w-5xl bg-card/50 gap-1">
      {/* HEADER DO RELATÓRIO */}
      <header className="space-y-5">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h2 className="text-primary font-medium text-sm tracking-wider uppercase">
              Relatório de Match (IA Analysis)
            </h2>
            <div className="flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground/80">
                Juliana Paiva
                <span className="text-muted-foreground/40 font-normal text-lg ml-2">
                  vs. Vaga: GP Sênior (Bancário)
                </span>
              </h1>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold uppercase text-muted-foreground">
              Score de Aderência
            </span>
            <div className="text-5xl font-black text-yellow-500">
              45<span className="text-lg text-muted-foreground/40">/100</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* KPI CARDS (Resumo Visual) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Requisitos Técnicos */}
          <div className="border rounded-lg p-5 bg-card flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">
                  Hard Skills
                </p>
                <p className="text-lg font-bold text-red-500">
                  Baixa Compatibilidade
                </p>
              </div>
              <div className="p-2 bg-red-100 text-red-600 rounded-full">
                <Target className="w-5 h-5" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-tight">
              Conflito de Metodologia: Vaga exige{" "}
              <strong>Waterfall/PMBOK</strong> rigoroso. Candidata é
              especialista em <strong>Agile/Scrum</strong>.
            </p>
          </div>

          {/* Card 2: Experiência */}
          <div className="border rounded-lg p-5 bg-card flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">
                  Experiência
                </p>
                <p className="text-lg font-bold text-yellow-500">
                  Aderência Parcial
                </p>
              </div>
              <div className="p-2 bg-yellow-100 text-yellow-600 rounded-full">
                <Briefcase className="w-5 h-5" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-tight">
              Tempo de atuação ok (6 anos), mas em setor divergente (Startups
              vs. Setor Bancário Regulado).
            </p>
          </div>

          {/* Card 3: Comportamental */}
          <div className="border rounded-lg p-5 bg-card flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">
                  Soft Skills
                </p>
                <p className="text-lg font-bold text-green-500">
                  Alta Aderência
                </p>
              </div>
              <div className="p-2 bg-green-100 text-green-600 rounded-full">
                <BrainCircuit className="w-5 h-5" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-tight">
              Excelente liderança, comunicação e gestão de conflitos. Perfil
              "hands-on" muito forte.
            </p>
          </div>
        </div>
      </header>

      <main className="space-y-10 mt-8">
        {/* SEÇÃO 1: RESUMO DA IA (Análise Qualitativa) */}
        <section className="bg-muted/10 border rounded-lg p-6 space-y-3">
          <h2 className="text-xl font-bold flex items-center gap-2">
            🧠 Análise Sintética
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            A candidata <strong>Juliana Paiva</strong> é uma profissional de
            alta performance, mas seu perfil é diametralmente oposto ao que a
            vaga de <strong>Gerente de Projetos Sênior (Legado)</strong>{" "}
            solicita. Enquanto a vaga busca controle, documentação extensiva e
            previsibilidade (PMBOK/MS Project), a Juliana oferece
            adaptabilidade, inovação e velocidade (Jira/Miro).
          </p>
          <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">
            <strong>Risco de Contratação:</strong> Alto. Há grande chance de
            frustração mútua: a empresa achará a candidata "indisciplinada" com
            processos burocráticos, e a candidata achará a empresa "lenta e
            engessada".
          </p>
        </section>

        {/* SEÇÃO 2: DETALHAMENTO TÉCNICO LADO A LADO */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* COLUNA VAGA */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-primary/20">
              <ScrollText className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">
                Requisitos da Vaga 🏦
              </h3>
            </div>

            {/* Bloco 1 */}
            <div className="bg-card border p-4 rounded-lg space-y-2">
              <span className="text-xs font-bold text-muted-foreground uppercase">
                Metodologia
              </span>
              <p className="text-sm font-medium">
                Waterfall, PMBOK, Gestão de Caminho Crítico.
              </p>
            </div>
            {/* Bloco 2 */}
            <div className="bg-card border p-4 rounded-lg space-y-2">
              <span className="text-xs font-bold text-muted-foreground uppercase">
                Ferramentas Obrigatórias
              </span>
              <p className="text-sm font-medium">
                MS Project (Avançado), Excel (Macros), SAP.
              </p>
            </div>
            {/* Bloco 3 */}
            <div className="bg-card border p-4 rounded-lg space-y-2">
              <span className="text-xs font-bold text-muted-foreground uppercase">
                Certificações
              </span>
              <p className="text-sm font-medium">
                PMP (Project Management Professional) - Obrigatório.
              </p>
            </div>
          </div>

          {/* COLUNA CANDIDATO */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-blue-500/20">
              <GitPullRequest className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold text-foreground">
                Perfil da Candidata 🚀
              </h3>
            </div>

            {/* Bloco 1 - Comparativo */}
            <div className="bg-card border p-4 rounded-lg space-y-2 relative overflow-hidden">
              <div className="absolute right-0 top-0 bg-red-500 text-white text-[10px] px-2 py-1 rounded-bl">
                Mismatch
              </div>
              <span className="text-xs font-bold text-muted-foreground uppercase">
                Metodologia
              </span>
              <p className="text-sm font-medium">
                Agile, Scrum, Lean Inception, Design Thinking.
              </p>
            </div>
            {/* Bloco 2 - Comparativo */}
            <div className="bg-card border p-4 rounded-lg space-y-2 relative overflow-hidden">
              <div className="absolute right-0 top-0 bg-yellow-500 text-white text-[10px] px-2 py-1 rounded-bl">
                Parcial
              </div>
              <span className="text-xs font-bold text-muted-foreground uppercase">
                Ferramentas Dominadas
              </span>
              <p className="text-sm font-medium">
                Jira, Confluence, Miro, Trello, Slack.
              </p>
            </div>
            {/* Bloco 3 - Comparativo */}
            <div className="bg-card border p-4 rounded-lg space-y-2 relative overflow-hidden">
              <div className="absolute right-0 top-0 bg-red-500 text-white text-[10px] px-2 py-1 rounded-bl">
                Faltante
              </div>
              <span className="text-xs font-bold text-muted-foreground uppercase">
                Certificações
              </span>
              <p className="text-sm font-medium">
                CSM (Certified ScrumMaster), PSPO (Product Owner).
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: ANÁLISE DE GAPS E PONTOS FORTES */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            📋 Diagnóstico Detalhado
          </h2>

          <div className="space-y-3">
            {/* Ponto Crítico */}
            <div className="border-l-4 border-red-500 bg-red-50/5 p-4 rounded-r-lg flex gap-4">
              <XCircle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-foreground/90">
                  Gap Crítico: Gestão Financeira vs. Gestão de Produto
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  A vaga exige forte controle de CAPEX/OPEX e cronogramas
                  físicos-financeiros de longo prazo. O currículo da Juliana
                  foca em <em>Discovery</em>, priorização de Backlog e entrega
                  de valor incremental. Ela sabe criar produtos, mas o currículo
                  não evidencia experiência com controle orçamentário rígido de
                  grandes projetos.
                </p>
              </div>
            </div>

            {/* Ponto de Atenção */}
            <div className="border-l-4 border-yellow-500 bg-yellow-50/5 p-4 rounded-r-lg flex gap-4">
              <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-foreground/90">
                  Ponto de Atenção: Senioridade e Tempo de Casa
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  A candidata tem 6 anos de experiência total, com passagens
                  médias de 1.5 anos por empresa (comum em startups). A vaga
                  pede 8+ anos e valoriza estabilidade. Pode haver receio sobre
                  a retenção da candidata em um ambiente corporativo lento.
                </p>
              </div>
            </div>

            {/* Ponto Positivo */}
            <div className="border-l-4 border-green-500 bg-green-50/5 p-4 rounded-r-lg flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-foreground/90">
                  Match: Formação Acadêmica & Idiomas
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Ambos alinham em formação (Graduação em TI + Pós em Gestão). O
                  inglês fluente da candidata é um diferencial positivo,
                  superando o requisito básico da vaga.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: SUGESTÃO FINAL */}
        <div className="flex justify-end pt-4">
          <div className="text-right space-y-2 max-w-md">
            <div className="flex items-center justify-end gap-2 text-primary font-bold text-sm uppercase tracking-wider">
              <FileBadge className="w-4 h-4" /> Recomendação do Sistema
            </div>
            <div className="inline-block bg-yellow-100 text-yellow-700 px-6 py-3 rounded-lg font-bold text-sm border border-yellow-200 shadow-sm">
              ⚠️ Contratação de Risco (Desvio de Função)
            </div>
            <p className="text-xs text-muted-foreground italic">
              "Sugestão: Redirecionar candidata para a vaga de 'Coordenador de
              Inovação Digital' ou 'Product Manager' da Squad de Mobile. Para a
              vaga atual de GP Legado, ela está superqualificada em agilidade e
              subqualificada em processos tradicionais."
            </p>
          </div>
        </div>
      </main>
    </Card>
  );
}
