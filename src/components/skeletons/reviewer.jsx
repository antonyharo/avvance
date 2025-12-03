import { Card } from "../ui/card";
import Loader from "../ui/loader";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import {
  Sparkles,
  AlertTriangle,
  Search,
  CheckCircle,
  TrendingUp,
  Star,
  Code,
  Target,
  Zap,
  Bug,
  Terminal,
  Cpu,
} from "lucide-react";

export default function ReviewerSkeleton({ loading }) {
  // Helper para renderizar estrelas
  const renderStars = (count) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? "text-yellow-500 fill-yellow-500"
              : "text-muted-foreground/20"
          }`}
        />
      ));
  };

  if (loading) {
    return (
      <Card className="container mx-auto p-8 border-dashed w-full max-w-5xl bg-card/50 gap-1">
        {/* HEADER LOADING */}
        <header className="space-y-5">
          <div className="space-y-3 animate-pulse">
            <div className="flex items-center gap-3">
              <Loader />
              <h1 className="text-3xl font-bold text-muted-foreground/60">
                Rodando Testes Unitários...{" "}
                <span className="text-muted-foreground/30 font-normal">
                  - Análise de Carreira
                </span>
              </h1>
            </div>
          </div>
          <Separator />
          <nav className="flex gap-6 text-sm font-medium text-muted-foreground/50 animate-pulse">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
          </nav>
        </header>

        <main className="space-y-10 mt-8">
          {/* SCORES LOADING */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="border rounded-lg p-6 space-y-3 bg-muted/5 flex flex-col items-center justify-center"
              >
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-12 w-20 rounded-md" />
              </div>
            ))}
          </section>

          {/* MATRIZ LOADING */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground/70 animate-pulse">
              <Target className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Compilando Matriz 5D...</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-pulse">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 space-y-3 bg-muted/5"
                >
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          </section>

          {/* OARR LOADING */}
          <section className="space-y-4">
            <Skeleton className="h-40 w-full rounded-lg" />
          </section>
        </main>
      </Card>
    );
  }

  return (
    <Card className="container mx-auto p-8 border-dashed w-full max-w-5xl bg-card/50 gap-1">
      {/* HEADER */}
      <header className="space-y-5">
        <h2 className="text-primary/80">Build Concluído com Sucesso:</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-muted-foreground/60">
              Roberto "Beto" Souza{" "}
              <span className="text-muted-foreground/30 font-normal">
                - Code Review de Currículo
              </span>
            </h1>
          </div>
        </div>

        <Separator />

        <nav className="flex gap-6 text-sm font-medium text-muted-foreground/50">
          <div className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors">
            <TrendingUp className="w-4 h-4" /> <span>KPIs</span>
          </div>
          <div className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors">
            <Target className="w-4 h-4" /> <span>Matriz 5D</span>
          </div>
          <div className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors">
            <Terminal className="w-4 h-4" /> <span>Refatoração</span>
          </div>
        </nav>
      </header>

      <main className="space-y-10 mt-8">
        {/* SECTION 1: SCOREBOARD */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              label: "Aderência DevOps",
              score: "88",
              color: "text-green-500",
              desc: "Stack AWS + Terraform sólida",
              icon: <Cpu className="w-4 h-4 mb-1 text-muted-foreground/50" />,
            },
            {
              label: "Senioridade Percebida",
              score: "75",
              color: "text-blue-500",
              desc: "Pleno consolidado, mirando Sênior",
              icon: (
                <TrendingUp className="w-4 h-4 mb-1 text-muted-foreground/50" />
              ),
            },
            {
              label: "Fator 'Recrutável'",
              score: "65",
              color: "text-orange-500",
              desc: "Muitas siglas, pouco contexto de negócio",
              icon: (
                <Search className="w-4 h-4 mb-1 text-muted-foreground/50" />
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-lg p-6 bg-card flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all hover:bg-muted/5"
            >
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <span className="text-xs font-bold text-muted-foreground/70 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
              <div className={`text-4xl font-black ${item.color} mb-2`}>
                {item.score}
                <span className="text-lg text-muted-foreground/40 font-normal">
                  /100
                </span>
              </div>
              <p className="text-xs text-muted-foreground/60">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 2: 5D MATRIX */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground/70">
            <Target className="w-6 h-6" />
            <h2 className="text-xl font-semibold">
              Análise Profunda (Matriz 5D)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                dim: "Dados Estratégicos",
                stars: 5,
                insight:
                  "Links perfeitos. GitHub com 'commits verdes' o ano todo. Passou no teste de sanidade.",
              },
              {
                dim: "Trajetória",
                stars: 3,
                insight:
                  "A migração de 'Java Legado' para 'Cloud Native' está confusa. Parece que você dormiu Dev e acordou DevOps.",
              },
              {
                dim: "Resultados (Impacto)",
                stars: 2,
                insight:
                  "Diz que 'configurou Kubernetes', mas não diz se economizou custo ou se derrubou a produção.",
              },
              {
                dim: "Competências",
                stars: 4,
                insight:
                  "Hard skills afiadas (Docker, K8s, CI/CD). Soft skills (comunicação) estão rodando em localhost ainda.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 space-y-2 bg-muted/5"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm text-foreground/80">
                    {item.dim}
                  </span>
                  <div className="flex">{renderStars(item.stars)}</div>
                </div>
                <p className="text-sm text-muted-foreground/60 leading-relaxed">
                  {item.insight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: QUICK FIXES (HOTFIXES) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground/70">
            <Zap className="w-6 h-6" />
            <h2 className="text-xl font-semibold">
              Hotfixes Sugeridos (Prioridade Alta)
            </h2>
          </div>

          <div className="space-y-4">
            {/* Bug Report */}
            <div className="border border-l-4 border-l-red-400 rounded-r-lg p-4 bg-red-50/5 hover:bg-red-50/10 transition-colors">
              <div className="flex gap-3 items-start">
                <Bug className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm">
                    Bug Crítico: "Inglês Técnico"
                  </h4>
                  <p className="text-sm text-muted-foreground/60">
                    Você colocou "Inglês Técnico" mas listou experiência
                    internacional. Isso é{" "}
                    <span className="italic">undefined behavior</span>. Se
                    conversou com gringo, é "Avançado/Fluente". Valorize seu
                    *buffer*!
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Request */}
            <div className="border border-l-4 border-l-blue-400 rounded-r-lg p-4 bg-blue-50/5 hover:bg-blue-50/10 transition-colors">
              <div className="flex gap-3 items-start">
                <Sparkles className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm">
                    Feature Request: Quantificar o Caos
                  </h4>
                  <p className="text-sm text-muted-foreground/60">
                    Troque "Manutenção de servidores" por "Garantia de 99.9% de
                    Uptime em Black Friday". O recrutador gosta de números, não
                    de promessas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: OARR (REFATORAÇÃO) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground/70">
            <Code className="w-6 h-6" />
            <h2 className="text-xl font-semibold">
              Refatoração de Experiência (Método OARR)
            </h2>
          </div>

          <Skeleton
            noPulse
            className="border rounded-lg p-6 space-y-6 bg-muted/10"
          >
            {/* Legacy Code Block */}
            <div className="space-y-2 group">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> Legacy Code
                </span>
              </div>
              <p className="text-sm text-muted-foreground/50 italic border-l-2 border-red-200 pl-3">
                "Responsável por criar pipelines Jenkins e gerenciar containers
                Docker. Também ajudava a corrigir bugs em Java quando o time
                estava atolado."
              </p>
            </div>

            <Separator className="bg-muted-foreground/20" />

            {/* Clean Code Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-green-500/10 text-green-600 text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Clean Code (Otimizado)
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                    <Terminal className="w-3 h-3" /> Oportunidade & Ação
                  </span>
                  <p className="text-sm text-muted-foreground/70">
                    Liderei a modernização da infraestrutura legacy. Migrei
                    monolitos Java para microsserviços em Docker, orquestrados
                    via pipelines Jenkins automatizados.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-primary uppercase flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Resultado & Relevância
                  </span>
                  <p className="text-sm text-muted-foreground/70">
                    Redução de{" "}
                    <span className="font-semibold text-primary/80">
                      40% no tempo de deploy
                    </span>{" "}
                    e eliminação do clássico erro "funciona na minha máquina",
                    aumentando a produtividade do time em 25%.
                  </p>
                </div>
              </div>
            </div>
          </Skeleton>
        </section>
      </main>
    </Card>
  );
}
