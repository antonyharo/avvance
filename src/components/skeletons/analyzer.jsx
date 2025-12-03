import { Card } from "../ui/card";
import Loader from "../ui/loader";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import { Sparkles, AlertTriangle, Search, ChevronRight } from "lucide-react";

export default function AnalyzerSkeleton({ loading }) {
  if (loading) {
    return (
      <Card className="container mx-auto p-8 border-dashed w-full max-w-4xl bg-card/50 gap-1">
        {/* HEADER: Título e Navegação */}
        <header className="space-y-5">
          <div className="space-y-3 animate-pulse">
            {/* Título com Personalidade */}
            <div className="flex items-center gap-3">
              <Loader />
              <h1 className="text-3xl font-bold text-muted-foreground/60">
                Joãzinho da Silva{" "}
                <span className="text-muted-foreground/30 font-normal">
                  - Análise de Currículo
                </span>
              </h1>
            </div>
          </div>

          <Separator />

          {/* Nav: Simulando Links */}
          <nav className="flex gap-6 text-sm font-medium text-muted-foreground/50 animate-pulse">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> <span>Otimização</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> <span>Gaps</span>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4" /> <span>Recomendações</span>
            </div>
          </nav>
        </header>

        <main className="space-y-10 mt-8">
          {/* Info Text Placeholder */}
          <div className="space-y-2 animate-pulse">
            <p className="text-muted-foreground/40">
              Analisando seus dados para gerar o melhor resultado...
            </p>
            <Skeleton className="h-2 w-1/3" />
          </div>

          {/* SEÇÃO 1: OTIMIZAÇÃO */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground/70 animate-pulse">
              <Sparkles className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Otimização do Currículo</h2>
            </div>

            <div className="space-y-6">
              {/* Bloco: Resumo Profissional */}
              <Skeleton className="border rounded-lg p-5 space-y-4 bg-muted/10">
                <h3 className="font-medium text-muted-foreground/60 uppercase text-xs tracking-wider">
                  Resumo Profissional
                </h3>

                <div className="grid md:grid-cols-2 gap-6 animate-pulse">
                  {/* Coluna Antes */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-muted-foreground/80 uppercase">
                      Atual
                    </span>
                    <p className="text-sm text-muted-foreground/50 leading-relaxed">
                      "Faço um pouco de tudo, gosto de computadores e já
                      formatei o PC do meu vizinho. Sou proativo e gosto de
                      café..."
                    </p>
                  </div>
                  {/* Coluna Depois */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-muted-foreground/80 uppercase">
                      Sugestão
                    </span>
                    <p className="text-sm text-muted-foreground/50 leading-relaxed">
                      "Especialista Sênior em Infraestrutura de TI com histórico
                      comprovado em Gestão de Crise (formatação de urgência).
                      Proficiência em cafeína aplicada..."
                    </p>
                  </div>
                </div>
              </Skeleton>

              {/* Bloco: Experiência */}
              <div className="border rounded-lg p-5 space-y-4 bg-muted/10 animate-pulse">
                <h3 className="font-medium text-muted-foreground/60 uppercase text-xs tracking-wider">
                  Experiência Profissional
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground/50">
                    <span className="font-semibold">Exemplo de Melhoria:</span>{" "}
                    Transformar "Atendi o telefone" em "Gerenciei fluxo de
                    comunicação externa com volume de 50 chamadas/dia..."
                  </p>
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            </div>
          </section>

          {/* SEÇÃO 2: GAPS (Grid) */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground/70 animate-pulse">
              <AlertTriangle className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Gaps Identificados</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Cards de Exemplo */}
              {[
                {
                  title: "Certificações",
                  desc: "Falta certificação em 'Pilotagem de Foguete' da NASA.",
                },
                {
                  title: "Idiomas",
                  desc: "Inglês 'The book is on the table' precisa evoluir.",
                },
                {
                  title: "Ferramentas",
                  desc: "Ausência de experiência com 'Máquina do Tempo v3.0'.",
                },
                {
                  title: "Liderança",
                  desc: "Poucos exemplos de gestão de exércitos estelares.",
                },
              ].map((gap, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 space-y-2 animate-pulse bg-muted/5"
                >
                  <div className="h-5 w-fit bg-muted/50 rounded px-2 text-xs font-bold text-muted-foreground/60 flex items-center">
                    {gap.title}
                  </div>
                  <p className="text-sm text-muted-foreground/40">{gap.desc}</p>
                  <Skeleton className="h-2 w-1/2 mt-2" />
                </div>
              ))}
            </div>
          </section>

          {/* SEÇÃO 3: RECOMENDAÇÕES (Lista) */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground/70 animate-pulse">
              <Search className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Recomendações Práticas</h2>
            </div>

            <div className="space-y-4 pl-2 animate-pulse">
              {[
                "Adicionar métricas quantitativas (ex: Aumentei o lucro da 'Barraca do Beijo' em 200%).",
                "Focar em palavras-chave como 'Proatividade', 'Liderança' e 'Jedi'.",
                "Criar um portfólio no GitHub com seus projetos de dominação mundial.",
                "Atualizar o LinkedIn para parecer menos 'Facebook 2010'.",
                "Realizar cursos de atualização em tecnologias que foram lançadas ontem.",
              ].map((rec, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 text-muted-foreground/30 shrink-0" />
                  <div className="space-y-1 w-full">
                    <p className="text-sm text-muted-foreground/50">{rec}</p>
                    <Skeleton className="h-1 w-[90%]" />
                  </div>
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
        <h2 className="text-primary/80">Você receberá algo como:</h2>
        <div className="space-y-3 ">
          {/* Título com Personalidade */}
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-muted-foreground/60">
              Joãzinho da Silva{" "}
              <span className="text-muted-foreground/30 font-normal">
                - Análise de Currículo
              </span>
            </h1>
          </div>
        </div>

        <Separator />

        {/* Nav: Simulando Links */}
        <nav className="flex gap-6 text-sm font-medium text-muted-foreground/50 ">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> <span>Otimização</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> <span>Gaps</span>
          </div>
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4" /> <span>Recomendações</span>
          </div>
        </nav>
      </header>

      <main className="space-y-10 mt-8">
        {/* Info Text Placeholder */}
        <div className="space-y-2 ">
          <p className="text-muted-foreground/40">Texto supimpa!</p>
          <Skeleton noPulse className="h-2 w-1/3" />
        </div>

        {/* SEÇÃO 1: OTIMIZAÇÃO */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground/70 ">
            <Sparkles className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Otimização do Currículo</h2>
          </div>

          <div className="space-y-6">
            {/* Bloco: Resumo Profissional */}
            <Skeleton
              noPulse
              className="border rounded-lg p-5 space-y-4 bg-muted/10"
            >
              <h3 className="font-medium text-muted-foreground/60 uppercase text-xs tracking-wider">
                Resumo Profissional
              </h3>

              <div className="grid md:grid-cols-2 gap-6 ">
                {/* Coluna Antes */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-muted-foreground/80 uppercase">
                    Atual
                  </span>
                  <p className="text-sm text-muted-foreground/50 leading-relaxed">
                    "Faço um pouco de tudo, gosto de computadores e já formatei
                    o PC do meu vizinho. Sou proativo e gosto de café..."
                  </p>
                </div>
                {/* Coluna Depois */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-muted-foreground/80 uppercase">
                    Sugestão
                  </span>
                  <p className="text-sm text-muted-foreground/50 leading-relaxed">
                    "Especialista Sênior em Infraestrutura de TI com histórico
                    comprovado em Gestão de Crise (formatação de urgência).
                    Proficiência em cafeína aplicada..."
                  </p>
                </div>
              </div>
            </Skeleton>

            {/* Bloco: Experiência */}
            <div className="border rounded-lg p-5 space-y-4 bg-muted/10 ">
              <h3 className="font-medium text-muted-foreground/60 uppercase text-xs tracking-wider">
                Experiência Profissional
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground/50">
                  <span className="font-semibold">Exemplo de Melhoria:</span>{" "}
                  Transformar "Atendi o telefone" em "Gerenciei fluxo de
                  comunicação externa com volume de 50 chamadas/dia..."
                </p>
                <Skeleton noPulse className="h-4 w-2/3" />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: GAPS (Grid) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground/70 ">
            <AlertTriangle className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Gaps Identificados</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cards de Exemplo */}
            {[
              {
                title: "Certificações",
                desc: "Falta certificação em 'Pilotagem de Foguete' da NASA.",
              },
              {
                title: "Idiomas",
                desc: "Inglês 'The book is on the table' precisa evoluir.",
              },
              {
                title: "Ferramentas",
                desc: "Ausência de experiência com 'Máquina do Tempo v3.0'.",
              },
              {
                title: "Liderança",
                desc: "Poucos exemplos de gestão de exércitos estelares.",
              },
            ].map((gap, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 space-y-2  bg-muted/5"
              >
                <div className="h-5 w-fit bg-muted/50 rounded px-2 text-xs font-bold text-muted-foreground/60 flex items-center">
                  {gap.title}
                </div>
                <p className="text-sm text-muted-foreground/40">{gap.desc}</p>
                <Skeleton noPulse className="h-2 w-1/2 mt-2" />
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO 3: RECOMENDAÇÕES (Lista) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground/70 ">
            <Search className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Recomendações Práticas</h2>
          </div>

          <div className="space-y-4 pl-2 ">
            {[
              "Adicionar métricas quantitativas (ex: Aumentei o lucro da 'Barraca do Beijo' em 200%).",
              "Focar em palavras-chave como 'Proatividade', 'Liderança' e 'Jedi'.",
              "Criar um portfólio no GitHub com seus projetos de dominação mundial.",
              "Atualizar o LinkedIn para parecer menos 'Facebook 2010'.",
              "Realizar cursos de atualização em tecnologias que foram lançadas ontem.",
            ].map((rec, i) => (
              <div key={i} className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 mt-1 text-muted-foreground/30 shrink-0" />
                <div className="space-y-1 w-full">
                  <p className="text-sm text-muted-foreground/50">{rec}</p>
                  <Skeleton noPulse className="h-1 w-[90%]" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Card>
  );
}
