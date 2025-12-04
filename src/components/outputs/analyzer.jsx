import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"; // Se não tiver, use <hr />
import {
  Fingerprint,
  User,
  Search,
  DollarSign,
  Zap,
  Layers,
  Target,
  Award,
  BarChart3,
  TrendingUp,
  Lightbulb,
  Briefcase,
} from "lucide-react";

const mockProfileData = {
  header: {
    title: "Raio-X do Candidato",
    subtitle: "Visão 360º: Competências, Potencial e Valor de Mercado.",
    scoreText: "Top 5% do Mercado",
    scoreColor: "primary",
  },
  identity: {
    summary:
      "Profissional híbrido e estratégico. Combina visão analítica de dados com forte capacidade de liderança. Histórico consistente de entregas acima da meta e rápida adaptação a novos cenários. Não apenas executa, mas otimiza processos.",
    valuation: {
      range: "R$ 12k - 18k",
      type: "Faixa estimada (CLT/PJ)",
      level: "Sênior",
      tags: ["Negociação Alta", "Alta Demanda"],
    },
    softSkills: [
      { name: "Liderança & Influência", pct: 92 },
      { name: "Pensamento Analítico", pct: 88 },
      { name: "Resiliência", pct: 95 },
    ],
  },
  technical: {
    main: [
      "Gestão de Projetos",
      "Análise de Dados",
      "Planejamento Estratégico",
      "CRM",
      "Liderança de Equipes",
    ],
    differentials: [
      "Inglês Fluente",
      "Certificação PMP/Scrum",
      "Power BI",
      "Negociação B2B",
    ],
  },
  trackRecord: [
    {
      title: "Aumento de Eficiência Operacional",
      desc: "Implementou novos processos que reduziram o tempo de entrega em 30%, resultando em uma economia anual estimada em 6 dígitos.",
      icon: "trending",
    },
    {
      title: "Liderança em Projetos Críticos",
      desc: "Gerenciou stakeholders multidisciplinares em ambiente de alta pressão, entregando o projeto principal dentro do prazo e com satisfação do cliente em NPS 95.",
      icon: "lightbulb",
    },
  ],
  insights: {
    cultureFit:
      "Empresas em fase de Escala (Scale-ups) ou Grandes Corporações buscando Transformação Digital.",
    attentionPoint:
      "Perfil tende a buscar autonomia. Evitar ambientes com microgerenciamento excessivo.",
  },
};

export default function AnalyzerOutput({ data = mockProfileData }) {
  // Proteção contra dados nulos (carregamento ou erro)
  if (!data) return null;

  return (
    <Card className="w-full max-w-6xl mx-auto bg-card/50 border-dashed p-6 md:p-8">
      {/* HEADER ESTRATÉGICO */}
      <header className="mb-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-wider uppercase">
              <Fingerprint className="w-4 h-4" /> Análise de Carreira
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {data.header.title}
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              {data.header.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </div>
            <span className="text-sm font-medium text-primary">
              Score: <span className="font-bold">{data.header.scoreText}</span>
            </span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* COLUNA 1: IDENTIDADE & SOFT SKILLS */}
        <div className="space-y-6">
          {/* Card: Resumo Executivo */}
          <div className="bg-background border rounded-xl p-5 shadow-sm space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-5">
              <User className="w-24 h-24" />
            </div>
            <div className="flex items-center gap-3 pb-3 border-b">
              <div className="bg-blue-500/10 text-blue-600 p-2 rounded-lg">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm uppercase text-muted-foreground">
                Raio-X do Perfil
              </h3>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed z-10 relative">
              {data.identity.summary}
            </p>
          </div>

          {/* Card: Valor de Mercado */}
          <div className="bg-gradient-to-br from-green-600/5 to-emerald-500/30 border border-green-500/50 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-green-400/50">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/10 text-green-600 p-2 rounded-lg">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm uppercase text-green-600">
                  Valuation
                </h3>
              </div>
              <span className="text-[10px] font-bold bg-green-500 text-white px-2 py-0.5 rounded-full">
                {data.identity.valuation.level}
              </span>
            </div>
            <div className="text-center py-1">
              <span className="text-2xl md:text-3xl font-black text-green-600 tracking-tight">
                {data.identity.valuation.range}
              </span>
              <p className="text-xs text-green-600/80 mt-1 font-medium">
                {data.identity.valuation.type}
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              {data.identity.valuation.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] bg-white/5 px-2 py-1 rounded text-green-600 border border-green-400/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card: DNA Comportamental */}
          <div className="bg-background border rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b">
              <div className="bg-purple-500/10 text-purple-600 p-2 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm uppercase text-muted-foreground">
                Soft Skills (DNA)
              </h3>
            </div>
            <ul className="space-y-4">
              {data.identity.softSkills.map((skill, i) => (
                <li key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span>{skill.name}</span>
                    <span className="text-purple-500">{skill.pct}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-purple-600"
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COLUNA 2: COMPETÊNCIAS & RESULTADOS */}
        <div className="lg:col-span-2 space-y-6">
          {/* Seção: Hard Skills */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 font-bold text-lg text-foreground">
              <Layers className="w-5 h-5 text-primary" /> Caixa de Ferramentas
            </h3>
            <div className="bg-background border border-dashed rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-bold text-muted-foreground uppercase mb-3 flex items-center gap-1">
                    <Target className="w-3 h-3" /> Domínio Principal
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {data.technical.main.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-muted-foreground uppercase mb-3 flex items-center gap-1">
                    <Award className="w-3 h-3" /> Diferenciais
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {data.technical.differentials.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm border hover:border-gray-400 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção: Histórico de Impacto */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 font-bold text-lg text-foreground">
              <BarChart3 className="w-5 h-5 text-primary" /> Rastro de Sucesso
            </h3>
            <div className="bg-background border rounded-xl overflow-hidden shadow-sm">
              <div className="p-5 space-y-5">
                {data.trackRecord.map((item, i) => (
                  <div key={i}>
                    <div className="flex gap-4 items-start group">
                      <div
                        className={`mt-1 p-2 rounded-lg group-hover:scale-110 transition-transform ${
                          i === 0
                            ? "bg-blue-500/10 text-blue-600"
                            : "bg-orange-500/10 text-orange-600"
                        }`}
                      >
                        {item.icon === "trending" ? (
                          <TrendingUp size={18} />
                        ) : (
                          <Lightbulb size={18} />
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm md:text-base text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    {i < data.trackRecord.length - 1 && (
                      <Separator className="my-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Seção: Insights */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-400/10 border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">
                  Melhor Fit Cultural
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-snug">
                {data.insights.cultureFit}
              </p>
            </div>

            <div className="bg-slate-400/10 border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">
                  Ponto de Atenção
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-snug">
                {data.insights.attentionPoint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
