import { Card } from "../ui/card";
import Loader from "../ui/loader";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import {
  Sparkles,
  AlertTriangle,
  Search,
  ChevronRight,
  BarChart,
  Users,
} from "lucide-react";

export default function ProfileGeneratorSkeleton({ loading }) {
  if (loading) {
    return (
      <Card className="container mx-auto p-8 border-dashed w-full max-w-4xl bg-card/50 gap-1">
        {/* HEADER: Loading State */}
        <header className="space-y-5">
          <div className="space-y-3 animate-pulse">
            <div className="flex items-center gap-3">
              <Loader />
              <h1 className="text-3xl font-bold text-muted-foreground/60">
                Afinando o Pitch...{" "}
                <span className="text-muted-foreground/30 font-normal">
                  - Gerando Perfil Comercial
                </span>
              </h1>
            </div>
          </div>

          <Separator />

          <nav className="flex gap-6 text-sm font-medium text-muted-foreground/50 animate-pulse">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> <span>Jornada</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart className="w-4 h-4" /> <span>Ferramentas</span>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4" /> <span>Destaques</span>
            </div>
          </nav>
        </header>

        <main className="space-y-10 mt-8">
          <div className="space-y-2 animate-pulse">
            <p className="text-muted-foreground/40">
              Calculando taxas de conversão e litros de café consumidos...
            </p>
            <Skeleton className="h-2 w-1/3" />
          </div>

          {/* SEÇÃO 1: Loading Placeholder */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground/70 animate-pulse">
              <Sparkles className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Histórico Profissional</h2>
            </div>
            <div className="space-y-6">
              <Skeleton className="border rounded-lg p-5 space-y-4 bg-muted/10">
                <div className="h-4 w-1/4 bg-muted/20 rounded" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-10 mb-2" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-10 mb-2" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                </div>
              </Skeleton>
            </div>
          </section>

          {/* SEÇÃO 2: Loading Grid */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground/70 animate-pulse">
              <BarChart className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Arsenal de Vendas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 space-y-2 animate-pulse bg-muted/5"
                >
                  <Skeleton className="h-5 w-24 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          </section>

          {/* SEÇÃO 3: Loading List */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground/70 animate-pulse">
              <Search className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Pontos Fortes</h2>
            </div>
            <div className="space-y-4 pl-2 animate-pulse">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton className="w-4 h-4 rounded-full shrink-0" />
                  <Skeleton className="h-3 w-full" />
                </div>
              ))}
            </div>
          </section>
        </main>
      </Card>
    );
  }

  return (
    <Card className="container mx-auto p-8 border-dashed w-full max-w-4xl bg-card/50 gap-1">
      {/* HEADER: Título e Navegação */}
      <header className="space-y-5">
        <h2 className="text-primary/80">Perfil Encontrado:</h2>
        <div className="space-y-3">
          {/* Título com Personalidade */}
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-muted-foreground/60">
              O Estrategista de Negócios{" "}
              <span className="text-muted-foreground/30 font-normal">
                - Consultivo & Hands-on
              </span>
            </h1>
          </div>
        </div>

        <Separator />

        {/* Nav: Categorias do Perfil */}
        <nav className="flex gap-6 text-sm font-medium text-muted-foreground/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> <span>Evolução</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart className="w-4 h-4" /> <span>Competências</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" /> <span>Soft Skills</span>
          </div>
        </nav>
      </header>

      <main className="space-y-10 mt-8">
        {/* Resumo Profissional */}
        <div className="space-y-2">
          <p className="text-muted-foreground/60 leading-relaxed">
            Profissional movido a desafios e focado em resultados reais.
            Especialista em transformar leads frios em parcerias duradouras.
            Sabe que vender é uma arte, mas bater a meta é uma ciência exata
            (apoiada por um CRM bem preenchido).
          </p>
          <Skeleton noPulse className="h-2 w-1/4 bg-primary/10" />
        </div>

        {/* SEÇÃO 1: OTIMIZAÇÃO / TRAJETÓRIA */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground/70">
            <Sparkles className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Trajetória Profissional</h2>
          </div>

          <div className="space-y-6">
            {/* Bloco: Comparativo de Cargos */}
            <Skeleton
              noPulse
              className="border rounded-lg p-5 space-y-4 bg-muted/10"
            >
              <h3 className="font-medium text-muted-foreground/60 uppercase text-xs tracking-wider">
                De onde veio vs. Onde chegou
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Cargo Base */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-muted-foreground/80 uppercase flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                    Fase Inicial
                  </span>
                  <h4 className="font-semibold text-sm">
                    Consultor em Formação
                  </h4>
                  <p className="text-sm text-muted-foreground/50 leading-relaxed">
                    Foco total na execução. Aprendendo que ouvir o cliente vale
                    mais do que decorar o script e que "não" faz parte do jogo.
                  </p>
                </div>
                {/* Cargo Alvo */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-primary/80 uppercase flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                    Maturidade Profissional
                  </span>
                  <h4 className="font-semibold text-sm">
                    Executivo & Coordenação
                  </h4>
                  <p className="text-sm text-muted-foreground/50 leading-relaxed">
                    Visão de águia sobre o pipeline. Gere crises, prevê gargalos
                    e atua como consultor de confiança, não apenas como
                    vendedor.
                  </p>
                </div>
              </div>
            </Skeleton>

            {/* Bloco: Formação */}
            <div className="border rounded-lg p-5 space-y-4 bg-muted/10">
              <h3 className="font-medium text-muted-foreground/60 uppercase text-xs tracking-wider">
                Base Acadêmica
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground/50">
                  <span className="font-semibold text-foreground/70">
                    Graduação:
                  </span>{" "}
                  Administração ou Marketing (teoria aplicada à prática).
                </p>
                <p className="text-sm text-muted-foreground/50">
                  <span className="font-semibold text-foreground/70">
                    Pós-Graduação:
                  </span>{" "}
                  Especialização em Gestão Comercial e Mestrado prático em
                  Resiliência.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: COMPETÊNCIAS (Grid) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground/70">
            <BarChart className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Caixa de Ferramentas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Domínio de CRM",
                desc: "Salesforce, HubSpot ou Pipedrive: o diário de bordo indispensável.",
                icon: "🛠️",
              },
              {
                title: "Metodologias Ágeis",
                desc: "SPIN Selling para investigar e BANT para qualificar com precisão.",
                icon: "🧠",
              },
              {
                title: "Inteligência de Dados",
                desc: "Tradutor de números: converte CAC e LTV em estratégias de crescimento.",
                icon: "📊",
              },
              {
                title: "Soft Skills",
                desc: "Escuta ativa, empatia para conectar e firmeza para negociar.",
                icon: "🤝",
              },
            ].map((skill, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 space-y-2 bg-muted/5 hover:bg-muted/10 transition-colors"
              >
                <div className="h-5 w-fit bg-muted/50 rounded px-2 text-xs font-bold text-muted-foreground/60 flex items-center gap-2">
                  <span>{skill.icon}</span> {skill.title}
                </div>
                <p className="text-sm text-muted-foreground/50">{skill.desc}</p>
                <Skeleton noPulse className="h-2 w-1/3 mt-2 bg-primary/5" />
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO 3: DIFERENCIAIS (Lista) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground/70">
            <Search className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Por que este perfil?</h2>
          </div>

          <div className="space-y-4 pl-2">
            {[
              "Adaptabilidade: Navega bem tanto em Startups ágeis quanto em grandes corporações.",
              "Tech-savvy: Usa automação para ganhar tempo e focar no que importa (o cliente).",
              "Comunicação Global: Inglês afiado para expandir fronteiras e negócios.",
              "Disponibilidade: Mala pronta para reuniões presenciais estratégicas.",
              "Foco na Solução: Transforma objeções complexas em novas oportunidades.",
            ].map((rec, i) => (
              <div key={i} className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 mt-1 text-primary/40 shrink-0" />
                <div className="space-y-1 w-full">
                  <p className="text-sm text-muted-foreground/60">{rec}</p>
                  <Separator className="opacity-50" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Card>
  );
}
