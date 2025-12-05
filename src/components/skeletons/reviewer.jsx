import { Card } from "@/components/ui/card";
import Loader from "../ui/loader";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress"; // Supondo que exista, ou simulamos com div
import { Badge } from "@/components/ui/badge";
import {
  GitPullRequest,
  AlertOctagon,
  CheckCircle2,
  TrendingUp,
  Microscope,
  CalendarClock,
  LayoutTemplate,
  FileJson,
  ArrowRight,
  Maximize2,
  Search,
  Target,
} from "lucide-react";

export default function ReviewerSkeleton({ loading }) {
  if (loading) {
    return (
      <Card className="container mx-auto p-8 border-dashed w-full max-w-6xl bg-card/500/10 gap-1">
        <header className="space-y-6">
          <div className="flex items-center gap-4 animate-pulse">
            <Loader />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-muted-foreground/60">
                Executando revisões profundas no seu currículo...
              </h1>
              <p className="text-sm text-muted-foreground/50">
                Analisando semântica, consistência temporal e métricas de
                impacto (OARR)...
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <Skeleton className="h-96 w-full rounded-xl" />
            <div className="space-y-4">
              <Skeleton className="h-28 w-full rounded-xl" />
              <Skeleton className="h-28 w-full rounded-xl" />
              <Skeleton className="h-28 w-full rounded-xl" />
            </div>
          </div>
        </header>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-7xl mx-auto bg-card/500/10 border-dashed p-6 md:p-10">
      {/* HEADER: VISÃO MACRO */}
      <header className="mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase bg-primary/10 w-fit px-2 py-1 rounded">
              <Microscope className="w-4 h-4" /> revisão do currículo
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Relatório de Conformidade & Impacto
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl">
              Análise detalhada baseada em 5 dimensões críticas. Identificamos{" "}
              <span className="text-red-500 font-bold">
                2 Bloqueios Críticos
              </span>{" "}
              e{" "}
              <span className="text-green-600 font-bold">
                3 Diferenciais de Ouro
              </span>
              .
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 bg-background border p-4 rounded-xl shadow-sm">
            <span className="text-xs font-bold uppercase text-muted-foreground">
              Nota Geral (ATS Score)
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-yellow-500/100">
                75
              </span>
              <span className="text-lg text-muted-foreground/60 font-medium">
                /100
              </span>
            </div>
            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden mt-1">
              <div className="h-full bg-yellow-500/100 w-[75%]" />
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* COLUNA ESQUERDA: DETALHAMENTO TÉCNICO (8 colunas) */}
        <div className="lg:col-span-8 space-y-10">
          {/* 1. ANÁLISE ESTRATÉGICA (TEXTO DENSO) */}
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
                    Seu stack (Python, Next.js, IA) é extremamente atual e
                    vendável. A menção à mentoria em Hackathon e a criação de
                    produtos internos (Script XML-RPC) prova que você entrega
                    valor real, não apenas código.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                    <AlertOctagon className="w-3 h-3 text-red-500" /> Ponto de
                    Atenção
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    A apresentação da experiência é confusa. Datas futuras
                    (2025) misturadas com realizações passadas geram
                    desconfiança. Além disso, falta quantificação numérica nos
                    resultados.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. MATRIZ 5D DETALHADA */}
          <section className="space-y-4">
            <h3 className="flex items-center gap-2 font-bold text-xl text-foreground">
              <LayoutTemplate className="w-5 h-5 text-primary" /> Matriz de
              Avaliação 5D
            </h3>
            <div className="grid gap-4">
              {/* Item da Matriz */}
              <div className="bg-background border rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start">
                <div className="md:w-1/4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">Trajetória</span>
                    <Badge
                      variant="outline"
                      className="text-yellow-600 bg-yellow-500/10 border-yellow-400/30"
                    >
                      3/5
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Coerência cronológica
                  </p>
                </div>
                <div className="md:w-3/4 border-l pl-4 border-dashed">
                  <p className="text-sm text-foreground/90">
                    <span className="font-bold text-red-500">
                      Bug Temporal:
                    </span>{" "}
                    Você listou o estágio terminando em Julho/2025, mas descreve
                    feitos como se já tivessem ocorrido. Isso é ambíguo. Se é um
                    contrato futuro, deixe claro. Se é atual, use "Presente".
                  </p>
                </div>
              </div>

              {/* Item da Matriz */}
              <div className="bg-background border rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start">
                <div className="md:w-1/4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">Resultados</span>
                    <Badge
                      variant="outline"
                      className="text-red-600 bg-red-500/10 border-red-400/30"
                    >
                      2/5
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Impacto quantitativo
                  </p>
                </div>
                <div className="md:w-3/4 border-l pl-4 border-dashed">
                  <p className="text-sm text-foreground/90">
                    <span className="font-bold text-red-500">
                      Falta de Dados:
                    </span>{" "}
                    Você diz "agregou valor", mas não diz quanto. O script
                    otimizou em 10% ou 90%? Recrutadores amam números. Sem eles,
                    o impacto fica subjetivo.
                  </p>
                </div>
              </div>

              {/* Item da Matriz */}
              <div className="bg-background border rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start">
                <div className="md:w-1/4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">Competências</span>
                    <Badge
                      variant="outline"
                      className="text-blue-600 bg-blue-500/10 border-blue-400/30"
                    >
                      3/5
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Organização de Skills
                  </p>
                </div>
                <div className="md:w-3/4 border-l pl-4 border-dashed">
                  <p className="text-sm text-foreground/90">
                    <span className="font-bold text-blue-500">
                      Mistura de Conceitos:
                    </span>{" "}
                    A seção "Conhecimentos" está narrativa demais. Soft skills
                    estão perdidas no meio de Hard skills. Separe em listas
                    limpas para facilitar a leitura do robô (ATS).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. LABORATÓRIO DE REFATORAÇÃO (OARR) */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-bold text-xl text-foreground">
                <GitPullRequest className="w-5 h-5 text-primary" /> Laboratório
                de Refatoração (OARR)
              </h3>
              <Badge variant="secondary" className="text-xs">
                Exemplo Real do seu CV
              </Badge>
            </div>

            <div className="bg-muted/20 border rounded-xl overflow-hidden">
              <div className="p-4 border-b bg-muted/40">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Objetivo: Transformar descrição de tarefa em descrição de
                  impacto
                </p>
              </div>

              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-b">
                {/* ANTES */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-red-500 bg-red-400/10 px-2 py-1 rounded">
                      ORIGINAL
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Passivo
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "Criei um script de exportação de contatos via XML-RPC em
                    Python altamente otimizado, permitindo o upload de arquivos
                    .csv para uma base de dados Odoo."
                  </p>
                  <ul className="text-xs text-red-500 space-y-1 list-disc list-inside">
                    <li>Foca no "o que" fez, não no resultado.</li>
                    <li>"Altamente otimizado" é vago (opinião).</li>
                  </ul>
                </div>

                {/* DEPOIS */}
                <div className="p-6 space-y-4 bg-green-300/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-green-500 bg-green-400/20 px-2 py-1 rounded">
                      REFATORADO
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Orientado a Ação
                    </span>
                  </div>
                  <p className="text-sm text-foreground font-medium leading-relaxed">
                    "Desenvolvi solução de automação em Python/XML-RPC que{" "}
                    <span className="bg-green-400/30 px-1 rounded">
                      reduziu em 70%
                    </span>{" "}
                    o tempo de processamento de dados. A ferramenta eliminou
                    erros manuais e foi{" "}
                    <span className="bg-green-400/30 px-1 rounded">
                      adotada oficialmente
                    </span>{" "}
                    como produto da empresa."
                  </p>
                  <ul className="text-xs text-green-600 space-y-1 list-disc list-inside">
                    <li>Usa métricas (70% de redução).</li>
                    <li>Prova valor social (adotada como produto).</li>
                  </ul>
                </div>
              </div>
              <div className="p-3 bg-muted/40 text-center">
                <p className="text-xs text-muted-foreground">
                  <span className="font-bold">Fórmula OARR:</span> Oportunidade
                  → Ação → Resultado → Relevância
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* COLUNA DIREITA: PLANO DE AÇÃO (4 colunas) */}
        <div className="lg:col-span-4 space-y-8">
          {/* QUICK WINS */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-yellow-500/100" />{" "}
              Correções Imediatas
            </h3>
            <div className="space-y-3">
              <Card className="p-4 border-l-4 border-l-red-500 shadow-sm bg-red-300/10 rounded-l-none gap-2">
                <h4 className="font-bold text-sm text-foreground">
                  Ajustar Datas do Estágio
                </h4>
                <p className="text-xs text-muted-foreground">
                  Mude "Julho/2025" para "Atual" ou explique se é um contrato
                  futuro. Ambiguidade mata processos.
                </p>
              </Card>
              <Card className="p-4 border-l-4 border-l-orange-500 shadow-sm bg-orange-300/10 rounded-l-none gap-2">
                <h4 className="font-bold text-sm text-foreground">
                  Limpar Seção "Conhecimentos"
                </h4>
                <p className="text-xs text-muted-foreground">
                  Delete o texto corrido. Transforme em bullet points
                  categorizados (Linguagens, Frameworks, Tools).
                </p>
              </Card>
              <Card className="p-4 border-l-4 border-l-blue-500 shadow-sm bg-blue-300/10 rounded-l-none gap-2">
                <h4 className="font-bold text-sm text-foreground">
                  Reescrever o Resumo
                </h4>
                <p className="text-xs text-muted-foreground">
                  Evite "1 ano de experiência" se for estágio. Use "Vivência
                  prática em projetos com..."
                </p>
              </Card>
            </div>
          </div>

          {/* ESTRATÉGIA LONGO PRAZO */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" /> Plano de Evolução
            </h3>
            <div className="border rounded-xl p-5 space-y-6 bg-background">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm font-medium">
                  <span>GitHub Portfolio</span>
                  <span className="text-xs text-muted-foreground">
                    Prioridade Alta
                  </span>
                </div>
                <Progress value={30} className="h-2" />
                <p className="text-xs text-muted-foreground pt-1">
                  Seus projetos da Diggi Systems são proprietários. Você precisa
                  de 2-3 projetos open-source para provar seu código
                  publicamente.
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm font-medium">
                  <span>Certificações Cloud</span>
                  <span className="text-xs text-muted-foreground">
                    Médio Prazo
                  </span>
                </div>
                <Progress value={10} className="h-2" />
                <p className="text-xs text-muted-foreground pt-1">
                  Como você mexe com SaaS e Next.js, uma certificação AWS Cloud
                  Practitioner seria um diferencial enorme.
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm font-medium">
                  <span>Inglês Técnico</span>
                  <span className="text-xs text-muted-foreground">
                    Contínuo
                  </span>
                </div>
                <Progress value={60} className="h-2" />
                <p className="text-xs text-muted-foreground pt-1">
                  Saia do intermediário. A melhor documentação de Next.js e IA
                  está em inglês.
                </p>
              </div>
            </div>
          </div>

          {/* INSIGHT DE NICHO */}
          <div className="bg-gradient-to-br from-transparent to-purple-500/10 border border-primary/20 rounded-xl p-5">
            <h4 className="font-bold text-sm text-foreground flex items-center gap-2 mb-2">
              <Search className="w-4 h-4" /> Posicionamento Ideal
            </h4>
            <p className="text-xs text-foreground/80 leading-relaxed">
              Com base na sua análise, pare de aplicar para vagas genéricas.
              Foque em:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="text-xs font-medium flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-primary" /> Startups de SaaS
                B2B
              </li>
              <li className="text-xs font-medium flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-primary" /> Consultorias de
                ERP (Odoo)
              </li>
              <li className="text-xs font-medium flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-primary" /> Vagas de
                "Product Engineer"
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
