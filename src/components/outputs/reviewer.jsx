import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Microscope,
  Target,
  CheckCircle2,
  AlertOctagon,
  LayoutTemplate,
  GitPullRequest,
  CalendarClock,
  TrendingUp,
  Search,
  ArrowRight,
  Bug,
  Eraser,
  FileText,
} from "lucide-react";

export default function ReviewerOutput({ data = mockReviewerData }) {
  if (!data) return null;

  // Helpers para cores e ícones dinâmicos
  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-500 bg-green-500";
    if (score >= 60) return "text-yellow-500 bg-yellow-500";
    return "text-red-400 bg-red-500";
  };

  const getMatrixStyle = (status) => {
    switch (status) {
      case "critical":
        return {
          badge: "text-red-400 bg-red-500/10 border-red-400",
          border: "border-l-red-500",
          text: "text-red-400",
        };
      case "alert":
        return {
          badge: "text-orange-600 bg-orange-500/10 border-orange-400",
          border: "border-l-orange-500",
          text: "text-orange-600",
        };
      case "warning":
        return {
          badge: "text-blue-600 bg-blue-500/10 border-blue-400",
          border: "border-l-blue-500",
          text: "text-blue-600",
        };
      default:
        return {
          badge: "text-green-400 bg-green-500/10 border-green-400",
          border: "border-l-green-500",
          text: "text-green-400",
        };
    }
  };

  const getFixIcon = (type) => {
    if (type === "critical") return <Bug className="w-4 h-4" />;
    if (type === "warning") return <Eraser className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
  };

  const getFixColor = (type) => {
    if (type === "critical") return "border-l-red-500 bg-red-500/10";
    if (type === "warning") return "border-l-orange-500 bg-orange-500/10";
    return "border-l-blue-500 bg-blue-500/10";
  };

  const scoreColor = getScoreColor(data.header.atsScore);

  return (
    <Card className="w-full max-w-7xl mx-auto bg-card/50 border-dashed p-6 md:p-10">
      {/* HEADER */}
      <header className="mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase bg-primary/10 w-fit px-2 py-1 rounded">
              <Microscope className="w-4 h-4" /> Revisão do Currículo
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Relatório de Conformidade & Impacto
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl">
              Análise baseada em 5 dimensões críticas. Identificamos{" "}
              <span className="text-red-400 font-bold">
                {data.header.criticalCount} Bloqueios Críticos
              </span>{" "}
              e{" "}
              <span className="text-green-400 font-bold">
                {data.header.goldCount} Diferenciais de Ouro
              </span>
              .
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 bg-background border p-4 rounded-xl shadow-sm">
            <span className="text-xs font-bold uppercase text-muted-foreground">
              Nota Geral (ATS Score)
            </span>
            <div className="flex items-baseline gap-1">
              <span
                className={`text-4xl font-black ${scoreColor.split(" ")[0]}`}
              >
                {data.header.atsScore}
              </span>
              <span className="text-lg text-muted-foreground/60 font-medium">
                /100
              </span>
            </div>
            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden mt-1">
              <div
                className={`h-full ${scoreColor.split(" ")[1]} transition-all`}
                style={{ width: `${data.header.atsScore}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* COLUNA ESQUERDA (8) */}
        <div className="lg:col-span-8 space-y-10">
          {/* 1. DIAGNÓSTICO ESTRATÉGICO */}
          <section className="space-y-4">
            <h3 className="flex items-center gap-2 font-bold text-xl text-foreground">
              <Target className="w-5 h-5 text-primary" /> Diagnóstico
              Estratégico
            </h3>
            <div className="bg-background border rounded-xl p-6 space-y-4 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" /> Pontos
                    Fortes
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {data.strategic.strengths}
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                    <AlertOctagon className="w-3 h-3 text-red-400" /> Ponto de
                    Atenção
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {data.strategic.weaknesses}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. MATRIZ 5D */}
          <section className="space-y-4">
            <h3 className="flex items-center gap-2 font-bold text-xl text-foreground">
              <LayoutTemplate className="w-5 h-5 text-primary" /> Matriz de
              Avaliação
            </h3>
            <div className="grid gap-4">
              {data.matrix5D.map((item, i) => {
                const styles = getMatrixStyle(item.status);
                return (
                  <div
                    key={i}
                    className="bg-background border rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start"
                  >
                    <div className="md:w-1/4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm">
                          {item.dimension}
                        </span>
                        <Badge variant="outline" className={styles.badge}>
                          {item.score}/5
                        </Badge>
                      </div>
                    </div>
                    <div
                      className={`md:w-3/4 border-l pl-4 border-dashed ${styles.text}`}
                    >
                      <p className="text-sm font-medium">{item.insight}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 3. OARR LAB */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-bold text-xl text-foreground">
                <GitPullRequest className="w-5 h-5 text-primary" /> Laboratório
                de Refatoração (OARR)
              </h3>
              <Badge variant="secondary" className="text-xs">
                Exemplo Real
              </Badge>
            </div>

            <div className="bg-muted/20 border rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-b">
                {/* ANTES */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-red-400 bg-red-400/10 px-2 py-1 rounded">
                      ORIGINAL
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "{data.oarr.original}"
                  </p>
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertOctagon className="w-3 h-3" /> {data.oarr.issue}
                  </p>
                </div>

                {/* DEPOIS */}
                <div className="p-6 space-y-4 bg-green-300/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      REFATORADO
                    </span>
                  </div>
                  <p className="text-sm text-foreground font-medium leading-relaxed">
                    "{data.oarr.refactored}"
                  </p>
                  <ul className="text-xs text-green-400 space-y-1">
                    {data.oarr.improvements.map((imp, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* COLUNA DIREITA (4) */}
        <div className="lg:col-span-4 space-y-8">
          {/* QUICK FIXES */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-yellow-500" /> Correções
              Imediatas
            </h3>
            <div className="space-y-3">
              {data.actionPlan.quickFixes.map((fix, i) => (
                <Card
                  key={i}
                  className={`p-4 border-l-4 shadow-sm rounded-l-none gap-2 ${getFixColor(
                    fix.type
                  )}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {getFixIcon(fix.type)}
                    <h4 className="font-bold text-sm text-foreground">
                      {fix.title}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {fix.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* EVOLUTION */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" /> Plano de Evolução
            </h3>
            <div className="border rounded-xl p-5 space-y-6 bg-background">
              {data.actionPlan.evolution.map((plan, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>{plan.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {plan.priority}
                    </span>
                  </div>
                  <Progress value={plan.progress} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* NICHE */}
          <div className="bg-gradient-to-br from-transparent to-purple-500/10 border border-primary/20 rounded-xl p-5">
            <h4 className="font-bold text-sm text-foreground flex items-center gap-2 mb-2">
              <Search className="w-4 h-4" /> Posicionamento Ideal
            </h4>
            <ul className="mt-3 space-y-2">
              {data.niche.map((item, i) => (
                <li
                  key={i}
                  className="text-xs font-medium flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3 text-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}

const mockReviewerData = {
  header: {
    atsScore: 75,
    criticalCount: 2,
    goldCount: 3,
  },
  strategic: {
    strengths:
      "Stack tecnológica (Python, Next.js, IA) extremamente atual e alinhada com tendências de mercado. A experiência prática com produtos reais (script XML-RPC) demonstra entrega de valor.",
    weaknesses:
      "Apresentação da linha do tempo confusa (datas futuras) gera desconfiança imediata. Falta de quantificação clara de resultados em números absolutos ou percentuais.",
  },
  matrix5D: [
    {
      dimension: "Trajetória",
      score: 3,
      insight: "Cronologia ambígua (2025?). Precisa de ajuste urgente.",
      status: "alert",
    },
    {
      dimension: "Resultados",
      score: 2,
      insight: "Muitos adjetivos, poucos números. Cadê o ROI?",
      status: "critical",
    },
    {
      dimension: "Competências",
      score: 3,
      insight: "Mistura Soft/Hard skills. Organize por categorias.",
      status: "warning",
    },
    {
      dimension: "Diferenciais",
      score: 5,
      insight: "Mentoria e criação de produtos são ouro puro.",
      status: "good",
    },
    {
      dimension: "Dados Estratégicos",
      score: 4,
      insight: "Links ok, mas GitHub precisa de curadoria.",
      status: "good",
    },
  ],
  oarr: {
    original:
      "Criei um script de exportação de contatos via XML-RPC em Python altamente otimizado, permitindo o upload de arquivos .csv.",
    issue:
      "Foca apenas na tarefa executada e usa termo subjetivo 'altamente otimizado'.",
    refactored:
      "Desenvolvi automação Python/XML-RPC que reduziu em 70% o tempo de exportação de dados, eliminando erros manuais e sendo adotada como produto oficial.",
    improvements: [
      "Métrica de impacto (70%)",
      "Prova social (adotada oficial)",
    ],
  },
  actionPlan: {
    quickFixes: [
      {
        type: "critical",
        title: "Corrigir Datas",
        desc: "Mude 'Julho/2025' para 'Atual' ou explique contrato.",
      },
      {
        type: "warning",
        title: "Limpar Skills",
        desc: "Remova narrativa da seção de competências.",
      },
      {
        type: "info",
        title: "Resumo Objetivo",
        desc: "Adicione 'Buscando vaga de X' na primeira linha.",
      },
    ],
    evolution: [
      { title: "GitHub Portfolio", priority: "Alta", progress: 30 },
      { title: "Inglês Técnico", priority: "Média", progress: 60 },
      { title: "Certificação Cloud", priority: "Baixa", progress: 10 },
    ],
  },
  niche: [
    "Startups de SaaS B2B",
    "Consultorias de ERP (Odoo)",
    "Product Engineering",
  ],
};
