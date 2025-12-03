import { Card } from "../ui/card";
import Loader from "../ui/loader";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import {
  Linkedin,
  Copy,
  Wand2,
  Briefcase,
  UserCircle,
  Hash,
  Check,
  RefreshCw,
} from "lucide-react";

export default function LinkedinGeneratorSkeleton({ loading }) {
  // Estado de loading (Skeleton)
  if (loading) {
    return (
      <Card className="container mx-auto p-8 border-dashed w-full max-w-4xl bg-card/50 gap-1">
        <header className="space-y-5">
          <div className="space-y-3 animate-pulse">
            <div className="flex items-center gap-3">
              <Loader />
              <h1 className="text-3xl font-bold text-muted-foreground/60">
                Gerando Perfil LinkedIn...
              </h1>
            </div>
            <p className="text-sm text-muted-foreground/50">
              Otimizando palavras-chave e criando storytelling...
            </p>
          </div>
          <Separator />
          {/* Nav Skeleton */}
          <div className="flex gap-4">
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-8 w-24 rounded-full" />
          </div>
        </header>

        <main className="space-y-8 mt-8">
          {/* Headline Skeleton */}
          <div className="space-y-3">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
          {/* About Skeleton */}
          <div className="space-y-3">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-40 w-full" />
          </div>
        </main>
      </Card>
    );
  }

  // Estado Final (Conteúdo Gerado)
  return (
    <Card className="container mx-auto p-8 border-dashed w-full max-w-4xl bg-card/50 gap-1">
      {/* HEADER DO MÓDULO */}
      <header className="space-y-5">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h2 className="text-primary font-medium text-sm tracking-wider uppercase">
              Resultado da Otimização
            </h2>
            <div className="flex items-center gap-3">
              <Linkedin className="w-8 h-8 text-[#0077b5]" />
              <h1 className="text-3xl font-bold text-foreground/80">
                Fernanda Mendes
                <span className="text-muted-foreground/40 font-normal text-lg ml-2">
                  - Sugestão de Perfil
                </span>
              </h1>
            </div>
          </div>
          <button className="text-xs flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors border px-3 py-1 rounded-full">
            <RefreshCw className="w-3 h-3" /> Gerar Novamente
          </button>
        </div>

        <Separator />

        {/* Navegação Interna das Seções Geradas */}
        <nav className="flex gap-2 text-sm font-medium text-muted-foreground overflow-x-auto pb-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full cursor-pointer">
            <Hash className="w-4 h-4" /> <span>Headlines</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-muted rounded-full cursor-pointer transition-colors">
            <UserCircle className="w-4 h-4" /> <span>Resumo (Sobre)</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-muted rounded-full cursor-pointer transition-colors">
            <Briefcase className="w-4 h-4" /> <span>Experiência</span>
          </div>
        </nav>
      </header>

      <main className="space-y-10 mt-8">
        {/* SEÇÃO 1: HEADLINES SUGERIDAS */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-foreground/80">
            <Hash className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">
              1. Headlines (Título do Perfil)
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Escolha a opção que melhor se alinha ao seu objetivo atual.
          </p>

          <div className="grid gap-4">
            {/* Opção 1 */}
            <div className="group border rounded-lg p-4 bg-background hover:border-primary/50 transition-all relative">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex items-center gap-1 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                  <Copy className="w-3 h-3" /> Copiar
                </button>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 mb-1 block">
                Opção Conservadora (Corporativo)
              </span>
              <p className="text-sm font-medium text-foreground">
                Head de Growth Marketing | Especialista em B2B & SaaS |
                Estratégia de Aquisição e Retenção (CRM) | Liderança de Equipes
              </p>
            </div>

            {/* Opção 2 */}
            <div className="group border rounded-lg p-4 bg-background hover:border-primary/50 transition-all relative">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex items-center gap-1 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                  <Copy className="w-3 h-3" /> Copiar
                </button>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 mb-1 block">
                Opção Autoral (Destaque)
              </span>
              <p className="text-sm font-medium text-foreground">
                Escalando SaaS de R$ 0 a R$ 10M 🚀 | Growth Strategist focada em
                Dados e Receita | Transformando Leads em Fãs
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: SOBRE (RESUMO) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-foreground/80">
            <UserCircle className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">2. Resumo Otimizado (Sobre)</h2>
          </div>

          <div className="relative border rounded-lg bg-background p-6 space-y-4">
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors">
              <Copy className="w-4 h-4" />
            </button>

            <div className="prose prose-sm max-w-none text-muted-foreground/80">
              <p>
                Não sou apenas apaixonada por marketing; sou obcecada por{" "}
                <strong>crescimento mensurável</strong>.
              </p>
              <p>
                Com mais de 8 anos de experiência no ecossistema de Startups e
                Tech, minha carreira foi construída na intersecção entre dados,
                criatividade e vendas. Já liderei estratégias que reduziram o
                CAC em 40% enquanto triplicavam o LTV.
              </p>
              <p>
                💡 <strong>O que eu faço de melhor:</strong>
                <br />- <strong>Gestão de Growth:</strong> Olhar holístico para
                o funil (AARRR), não apenas aquisição.
                <br />- <strong>Liderança:</strong> Construção de times
                multidisciplinares que amam bater meta.
                <br />- <strong>Experimentação:</strong> Cultura de testes
                rápidos (A/B) para validar hipóteses sem queimar budget.
              </p>
              <p>
                Atualmente, busco desafios onde eu possa conectar a visão do
                produto com a necessidade do mercado. Se você quer falar sobre
                PLG (Product-Led Growth) ou apenas trocar dicas de ferramentas
                de automação, vamos nos conectar!
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: EXPERIÊNCIA REESCRITA */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-foreground/80">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">
              3. Experiência Profissional (Bullet Points)
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Copie e cole estes pontos nas descrições de cada cargo no LinkedIn.
          </p>

          <div className="space-y-6">
            {/* Cargo 1 */}
            <div className="border-l-2 border-primary/30 pl-4 space-y-2">
              <h3 className="font-semibold text-sm text-foreground">
                Growth Manager @ Fintech X (2021 - Atual)
              </h3>
              <div className="bg-muted/10 rounded-lg p-4 space-y-3">
                <div className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Liderei a estratégia de Go-To-Market de 3 novos produtos,
                    resultando em <strong>R$ 2M de ARR</strong> no primeiro ano.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Implementei cultura de CRO que aumentou a conversão da
                    Landing Page de 2% para 5.5% em 6 meses.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Gestão de budget de mídia paga (R$ 500k/mês) com foco em
                    otimização de ROAS.
                  </p>
                </div>
              </div>
            </div>

            {/* Cargo 2 */}
            <div className="border-l-2 border-muted pl-4 space-y-2">
              <h3 className="font-semibold text-sm text-foreground">
                Coordenadora de Marketing @ Agência Y (2018 - 2021)
              </h3>
              <div className="bg-muted/10 rounded-lg p-4 space-y-3">
                <div className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Reestruturei a área de Inbound Marketing, implementando
                    HubSpot e automação de e-mail para nutrir leads.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Gerenciei uma equipe de 5 pessoas (Designers e Redatores),
                    garantindo entregas ágeis e de alta qualidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: COMPETÊNCIAS */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-foreground/80">
            <Wand2 className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">
              4. Competências para Adicionar
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Growth Hacking",
              "Google Analytics 4",
              "CRM (Salesforce/HubSpot)",
              "Gestão de Tráfego",
              "Liderança de Equipes",
              "SaaS B2B",
              "Copywriting",
              "Análise de Dados (SQL Básico)",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground border border-transparent hover:border-primary/30 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </Card>
  );
}
