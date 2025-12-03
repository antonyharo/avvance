import { Card } from "@/components/ui/card"; // Ajuste o caminho conforme seu projeto
import Loader from "../ui/loader"; // Se não tiver, substitua por um spinner simples
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  User,
  Briefcase,
  Zap,
  DollarSign,
  Search,
  Layers,
  Lightbulb,
  TrendingUp,
  Award,
  Target,
  BarChart3,
  Fingerprint,
} from "lucide-react";

export default function AnalyzerSkeleton({ loading }) {
  if (loading) {
    return (
      <Card className="container mx-auto p-8 border-dashed w-full max-w-5xl bg-card/50 gap-1">
        <header className="space-y-5">
          <div className="space-y-3 animate-pulse">
            <div className="flex items-center gap-3">
              <Loader />
              <h1 className="text-3xl font-bold text-muted-foreground/60">
                Processando Dossiê...
              </h1>
            </div>
            <p className="text-sm text-muted-foreground/50">
              Cruzando dados de mercado, soft skills e histórico de
              performance...
            </p>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Skeleton className="h-64 w-full rounded-xl" />
            <div className="col-span-2 space-y-4">
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          </div>
        </header>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-6xl mx-auto bg-card/50 border-dashed p-6 md:p-8">
      {/* HEADER ESTRATÉGICO */}
      <header className="mb-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-wider uppercase">
              <Fingerprint className="w-4 h-4" /> Análise de Carreira v2.0
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Dossiê Profissional
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Visão 360º: Competências, Potencial e Valor de Mercado.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </div>
            <span className="text-sm font-medium text-primary">
              Score: <span className="font-bold">Top 5% do Mercado</span>
            </span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* COLUNA 1: IDENTIDADE & SOFT SKILLS (O Lado Humano) */}
        <div className="space-y-6">
          {/* Card: Resumo Executivo */}
          <div className="bg-background border rounded-xl p-5 shadow-sm space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <User className="w-24 h-24" />
            </div>
            <div className="flex items-center gap-3 pb-3 border-b">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm uppercase text-muted-foreground">
                Raio-X do Perfil
              </h3>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed z-10 relative">
              Profissional{" "}
              <span className="font-semibold text-primary">
                híbrido e estratégico
              </span>
              . Combina visão analítica de dados com forte capacidade de
              liderança. Histórico consistente de entregas acima da meta e
              rápida adaptação a novos cenários. Não apenas executa, mas otimiza
              processos.
            </p>
          </div>

          {/* Card: Valor de Mercado (Estimativa) */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50/30 border border-green-200/60 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-green-200/30">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 text-green-700 p-2 rounded-lg">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm uppercase text-green-800">
                  Valuation
                </h3>
              </div>
              <span className="text-[10px] font-bold bg-green-200 text-green-800 px-2 py-0.5 rounded-full">
                Sênior
              </span>
            </div>
            <div className="text-center py-1">
              <span className="text-2xl md:text-3xl font-black text-green-800 tracking-tight">
                R$ 12k - 18k
              </span>
              <p className="text-xs text-green-700/80 mt-1 font-medium">
                Faixa estimada (CLT/PJ)
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              <span className="text-[10px] bg-white/50 px-2 py-1 rounded text-green-800 border border-green-200">
                Negociação Alta
              </span>
              <span className="text-[10px] bg-white/50 px-2 py-1 rounded text-green-800 border border-green-200">
                Alta Demanda
              </span>
            </div>
          </div>

          {/* Card: DNA Comportamental */}
          <div className="bg-background border rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b">
              <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm uppercase text-muted-foreground">
                Soft Skills (DNA)
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span>Liderança & Influência</span>
                  <span className="text-purple-600">92%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[92%]" />
                </div>
              </li>
              <li className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span>Pensamento Analítico</span>
                  <span className="text-purple-600">88%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[88%]" />
                </div>
              </li>
              <li className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span>Resiliência</span>
                  <span className="text-purple-600">95%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-[95%]" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* COLUNA 2: COMPETÊNCIAS & RESULTADOS (O Lado Técnico) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Seção: Hard Skills / Stack */}
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
                    {[
                      "Gestão de Projetos",
                      "Análise de Dados",
                      "Planejamento Estratégico",
                      "CRM",
                      "Liderança de Equipes",
                    ].map((skill) => (
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
                    {[
                      "Inglês Fluente",
                      "Certificação PMP/Scrum",
                      "Power BI",
                      "Negociação B2B",
                    ].map((skill) => (
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

          {/* Seção: Histórico de Impacto (Genérico mas Poderoso) */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 font-bold text-lg text-foreground">
              <BarChart3 className="w-5 h-5 text-primary" /> Rastro de Sucesso
            </h3>
            <div className="bg-background border rounded-xl overflow-hidden shadow-sm">
              <div className="p-5 space-y-5">
                {/* Conquista 1 */}
                <div className="flex gap-4 items-start group">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-foreground">
                      Aumento de Eficiência Operacional
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Implementou novos processos que reduziram o tempo de
                      entrega em{" "}
                      <span className="font-bold text-foreground">30%</span>,
                      resultando em uma economia anual estimada em 6 dígitos.
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Conquista 2 */}
                <div className="flex gap-4 items-start group">
                  <div className="mt-1 bg-orange-100 p-2 rounded-lg text-orange-600 group-hover:scale-110 transition-transform">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-foreground">
                      Liderança em Projetos Críticos
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Gerenciou stakeholders multidisciplinares em ambiente de
                      alta pressão, entregando o projeto principal dentro do
                      prazo e com satisfação do cliente em{" "}
                      <span className="font-bold text-foreground">NPS 95</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção: Insights do Recrutador (A "Opinião" da IA) */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2 text-slate-600">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">
                  Melhor Fit Cultural
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-snug">
                Empresas em fase de <strong>Escala (Scale-ups)</strong> ou
                Grandes Corporações buscando{" "}
                <strong>Transformação Digital</strong>.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2 text-slate-600">
                <Target className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">
                  Ponto de Atenção
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-snug">
                Perfil tende a buscar autonomia. Evitar ambientes com
                microgerenciamento excessivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
