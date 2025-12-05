const mockMatchData = {
  header: {
    candidateName: "Juliana Paiva",
    jobTitle: "GP Sênior (Bancário)",
    matchScore: 45,
  },
  kpis: {
    hardSkills: {
      status: "Baixa Compatibilidade",
      description:
        "Conflito de Metodologia: Vaga exige Waterfall/PMBOK rigoroso. Candidata é especialista em Agile/Scrum.",
      scoreColor: "red",
    },
    experience: {
      status: "Aderência Parcial",
      description:
        "Tempo de atuação ok (6 anos), mas em setor divergente (Startups vs. Setor Bancário Regulado).",
      scoreColor: "yellow",
    },
    softSkills: {
      status: "Alta Aderência",
      description:
        "Excelente liderança, comunicação e gestão de conflitos. Perfil 'hands-on' muito forte.",
      scoreColor: "green",
    },
  },
  synthesis: {
    analysis:
      "A candidata é uma profissional de alta performance, mas seu perfil é diametralmente oposto ao que a vaga solicita. Enquanto a vaga busca controle, documentação extensiva e previsibilidade, a candidata oferece adaptabilidade, inovação e velocidade.",
    risk: "Alto. Há grande chance de frustração mútua: a empresa achará a candidata 'indisciplinada' com processos burocráticos, e a candidata achará a empresa 'lenta'.",
  },
  comparison: {
    jobRequirements: [
      { label: "Metodologia", value: "Waterfall, PMBOK, Caminho Crítico" },
      { label: "Ferramentas", value: "MS Project (Avançado), Excel, SAP" },
      { label: "Certificações", value: "PMP (Obrigatório)" },
    ],
    candidateProfile: [
      {
        label: "Metodologia",
        value: "Agile, Scrum, Lean Inception",
        status: "mismatch",
      },
      {
        label: "Ferramentas",
        value: "Jira, Confluence, Miro, Trello",
        status: "partial",
      },
      { label: "Certificações", value: "CSM, PSPO", status: "missing" },
    ],
  },
  diagnosis: [
    {
      type: "critical",
      title: "Gap Crítico: Gestão Financeira vs. Produto",
      description:
        "A vaga exige controle de CAPEX/OPEX. O currículo foca em Discovery e entrega de valor. Faltam evidências de gestão orçamentária rígida.",
    },
    {
      type: "warning",
      title: "Ponto de Atenção: Senioridade",
      description:
        "Passagens médias de 1.5 anos por empresa (Startups). A vaga pede estabilidade de longo prazo.",
    },
    {
      type: "positive",
      title: "Match: Formação Acadêmica",
      description:
        "Ambos alinham em formação (TI + Gestão) e o Inglês fluente é um diferencial positivo.",
    },
  ],
  recommendation: {
    badge: "Contratação de Risco (Desvio de Função)",
    text: "Sugestão: Redirecionar para vagas de Inovação Digital. Para a vaga atual de GP Legado, o perfil está superqualificado em agilidade e subqualificado em processos tradicionais.",
  },
};

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Scale,
  Target,
  Briefcase,
  BrainCircuit,
  ScrollText,
  GitPullRequest,
  XCircle,
  AlertTriangle,
  CheckCircle2,
  FileBadge,
  MessageCircleWarning,
} from "lucide-react";

export default function CandidateJobMatchOutput({ data = mockMatchData }) {
  if (!data) return null;

  // Helper para cores baseadas no score/status
  const getColorClasses = (colorName) => {
    switch (colorName) {
      case "red":
        return {
          text: "text-red-500",
          bg: "bg-red-500/20",
          border: "border-red-500",
        };
      case "yellow":
        return {
          text: "text-yellow-500",
          bg: "bg-yellow-500/20",
          border: "border-yellow-500",
        };
      case "green":
        return {
          text: "text-green-500",
          bg: "bg-green-500/20",
          border: "border-green-500",
        };
      default:
        return {
          text: "text-primary",
          bg: "bg-primary/20",
          border: "border-primary",
        };
    }
  };

  const getStatusBadge = (status) => {
    if (status === "mismatch")
      return (
        <div className="absolute right-0 top-0 bg-red-500 text-white text-[10px] px-2 py-1 rounded-bl">
          Mismatch
        </div>
      );
    if (status === "partial")
      return (
        <div className="absolute right-0 top-0 bg-yellow-500 text-white text-[10px] px-2 py-1 rounded-bl">
          Parcial
        </div>
      );
    if (status === "missing")
      return (
        <div className="absolute right-0 top-0 bg-red-500 text-white text-[10px] px-2 py-1 rounded-bl">
          Faltante
        </div>
      );
    if (status === "match")
      return (
        <div className="absolute right-0 top-0 bg-green-500 text-white text-[10px] px-2 py-1 rounded-bl">
          Match
        </div>
      );
    return null;
  };

  return (
    <Card className="container mx-auto p-8 border-dashed w-full max-w-5xl bg-card/50 gap-1">
      {/* HEADER */}
      <header className="space-y-5">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h2 className="text-primary font-medium text-sm tracking-wider uppercase">
              Relatório de Match (IA Analysis)
            </h2>
            <div className="flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground/80">
                {data.header.candidateName}
                <span className="text-muted-foreground/40 font-normal text-lg ml-2">
                  vs. {data.header.jobTitle}
                </span>
              </h1>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold uppercase text-muted-foreground">
              Score de Aderência
            </span>
            <div
              className={`text-5xl font-black ${
                data.header.matchScore < 50
                  ? "text-red-500"
                  : data.header.matchScore < 75
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {data.header.matchScore}
              <span className="text-lg text-muted-foreground/40">/100</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { key: "hardSkills", title: "Hard Skills", icon: Target },
            { key: "experience", title: "Experiência", icon: Briefcase },
            { key: "softSkills", title: "Soft Skills", icon: BrainCircuit },
          ].map((kpi, i) => {
            const item = data.kpis[kpi.key];
            const colors = getColorClasses(item.scoreColor);
            const Icon = kpi.icon;

            return (
              <div
                key={i}
                className="border rounded-lg p-5 bg-card flex flex-col justify-between shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">
                      {kpi.title}
                    </p>
                    <p className={`text-lg font-bold ${colors.text}`}>
                      {item.status}
                    </p>
                  </div>
                  <div
                    className={`p-2 rounded-full ${colors.bg} ${colors.text}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-tight">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </header>

      <main className="space-y-10 mt-8">
        {/* SÍNTESE */}
        <section className="bg-muted/10 border rounded-lg p-6 space-y-3">
          <h2 className="text-xl font-bold flex items-center gap-2">
            🧠 Análise Sintética
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {data.synthesis.analysis}
          </p>
          <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">
            <strong>Risco de Contratação:</strong> {data.synthesis.risk}
          </p>
        </section>

        {/* COMPARATIVO LADO A LADO */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* VAGA */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-primary/20">
              <ScrollText className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">Requisitos da Vaga</h3>
            </div>
            {data.comparison.jobRequirements.map((req, i) => (
              <div key={i} className="bg-card border p-4 rounded-lg space-y-2">
                <span className="text-xs font-bold text-muted-foreground uppercase">
                  {req.label}
                </span>
                <p className="text-sm font-medium">{req.value}</p>
              </div>
            ))}
          </div>

          {/* CANDIDATO */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-primary/20">
              <GitPullRequest className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold text-foreground">Perfil do Candidato</h3>
            </div>
            {data.comparison.candidateProfile.map((prof, i) => (
              <div
                key={i}
                className="bg-card border p-4 rounded-lg space-y-2 relative overflow-hidden"
              >
                {getStatusBadge(prof.status)}
                <span className="text-xs font-bold text-muted-foreground uppercase">
                  {prof.label}
                </span>
                <p className="text-sm font-medium">{prof.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIAGNÓSTICO DETALHADO */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            📋 Diagnóstico Detalhado
          </h2>
          <div className="space-y-3">
            {data.diagnosis.map((diag, i) => {
              let Icon = AlertTriangle;
              let styleClass =
                "border-yellow-500 bg-yellow-50/5 text-yellow-500";

              if (diag.type === "critical") {
                Icon = XCircle;
                styleClass = "border-red-500 bg-red-50/5 text-red-500";
              } else if (diag.type === "positive") {
                Icon = CheckCircle2;
                styleClass = "border-green-500 bg-green-50/5 text-green-500";
              }

              return (
                <div
                  key={i}
                  className={`border-l-4 p-4 rounded-r-lg flex gap-4 ${styleClass}`}
                >
                  <Icon className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground/90">
                      {diag.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {diag.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* RECOMENDAÇÃO FINAL */}
        <div className="flex justify-end pt-4">
          <div className="text-right space-y-2 max-w-md w-full">
            <div className="flex items-center justify-end gap-2 text-primary font-bold text-sm uppercase tracking-wider">
              <FileBadge className="w-4 h-4" /> Recomendação do Sistema
            </div>
            <div className="flex flex-wrap gap-2 items-center bg-yellow-500/20 text-yellow-500 px-4 py-3 rounded-lg font-bold text-sm border border-yellow-500 shadow-sm ml-auto w-fit justify-end text-right">
              <MessageCircleWarning className="w-4 h-4" />{" "}
              {data.recommendation.badge}
            </div>
            <p className="text-xs text-muted-foreground italic text-right">
              {data.recommendation.text}
            </p>
          </div>
        </div>
      </main>
    </Card>
  );
}
