"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Linkedin,
  RefreshCw,
  Hash,
  UserCircle,
  Briefcase,
  Copy,
  Check,
  CheckCircle2,
  Wand2,
} from "lucide-react";
import { toast } from "sonner"; // Ou use seu sistema de toast preferido

export default function LinkedinGeneratorOutput({ data = mockLinkedinData }) {
  if (!data) return null;

  // Função utilitária para copiar texto
  const handleCopy = (text, label) => {
    // Remove tags HTML se houver, para copiar texto limpo (opcional)
    const cleanText = text.replace(/<[^>]+>/g, "");
    navigator.clipboard.writeText(cleanText);
    toast.success(`${label} copiado para a área de transferência!`);
  };

  return (
    <Card className="container mx-auto p-8 border-dashed w-full max-w-6xl bg-card/50 gap-1">
      {/* HEADER DO MÓDULO */}
      <header className="space-y-5">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h2 className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Resultados do perfil gerado:
            </h2>
            <div className="flex items-center gap-3">
              <Linkedin className="w-8 h-8 text-[#0077b5]" />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground/80">
                {data.header.fullName}
              </h1>
            </div>
            <span className="text-muted-foreground font-normal text-lg ml-2">
              {data.header.title}
            </span>
          </div>
        </div>

        <Separator />

        {/* Navegação Interna (Visual) */}
        <nav className="flex gap-2 text-sm font-medium text-muted-foreground overflow-x-auto pb-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full cursor-pointer">
            <Hash className="w-4 h-4" /> <span>Headlines</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-muted rounded-full cursor-pointer transition-colors">
            <UserCircle className="w-4 h-4" /> <span>Resumo</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-muted rounded-full cursor-pointer transition-colors">
            <Briefcase className="w-4 h-4" /> <span>Experiência</span>
          </div>
        </nav>
      </header>

      <main className="space-y-10 mt-8">
        {/* SEÇÃO 1: HEADLINES */}
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
            {data.headlines.map((headline, i) => (
              <div
                key={i}
                className="group border rounded-lg p-4 bg-background hover:border-primary/50 transition-all relative"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleCopy(headline.text, "Headline")}
                    className="flex items-center gap-1 text-xs bg-primary text-primary-foreground px-2 py-1 rounded hover:bg-primary/90 cursor-pointer"
                  >
                    <Copy className="cursor-pointer w-3 h-3" /> Copiar
                  </button>
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider mb-1 block ${
                    headline.type === "Autoral"
                      ? "text-blue-500"
                      : "text-muted-foreground/60"
                  }`}
                >
                  {headline.label} ({headline.type})
                </span>
                <p className="text-sm font-medium text-foreground">
                  {headline.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO 2: SOBRE (RESUMO) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-foreground/80">
            <UserCircle className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">2. Resumo Otimizado (Sobre)</h2>
          </div>

          <div className="relative border rounded-lg bg-background p-6 space-y-4">
            <button
              onClick={() => handleCopy(data.about.content, "Resumo")}
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
            >
              <Copy className="cursor-pointer w-4 h-4" />
            </button>

            {/* Renderização segura do HTML gerado */}
            <div
              className="prose prose-sm max-w-none text-muted-foreground/80"
              dangerouslySetInnerHTML={{ __html: data.about.content }}
            />
          </div>
        </section>

        {/* SEÇÃO 3: EXPERIÊNCIA */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-foreground/80">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">
              3. Experiência Profissional (Otimizada)
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Copie estes bullet points focados em resultados para o seu perfil.
          </p>

          <div className="space-y-6">
            {data.experience.map((exp, i) => (
              <div
                key={i}
                className={`${
                  i === 0
                    ? "border-l-2 border-primary/30"
                    : "border-l-2 border-muted"
                } pl-4 space-y-2`}
              >
                <h3 className="font-semibold text-sm text-foreground">
                  {exp.role} @ {exp.company}{" "}
                  <span className="text-muted-foreground font-normal text-xs ml-1">
                    ({exp.period})
                  </span>
                </h3>
                <div className="bg-muted/10 rounded-lg p-4 space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <div key={j} className="flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                      <p
                        className="text-sm text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: bullet }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO 4: SKILLS */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-foreground/80">
            <Wand2 className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">4. Palavras-Chave (SEO)</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
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

const mockLinkedinData = {
  header: {
    fullName: "Fernanda Mendes",
    title: "Sugestão de Perfil Otimizado",
  },
  headlines: [
    {
      type: "Corporativo",
      label: "Opção Conservadora",
      text: "Head de Growth Marketing | Especialista em B2B & SaaS | Estratégia de Aquisição e Retenção (CRM) | Liderança de Equipes",
    },
    {
      type: "Autoral",
      label: "Opção Destaque",
      text: "Escalando SaaS de R$ 0 a R$ 10M 🚀 | Growth Strategist focada em Dados e Receita | Transformando Leads em Fãs",
    },
  ],
  about: {
    content:
      "<p>Não sou apenas apaixonada por marketing; sou obcecada por <strong>crescimento mensurável</strong>.</p><p>Com mais de 8 anos de experiência no ecossistema de Startups e Tech, minha carreira foi construída na intersecção entre dados, criatividade e vendas. Já liderei estratégias que reduziram o CAC em 40% enquanto triplicavam o LTV.</p><p>💡 <strong>O que eu faço de melhor:</strong><br />- <strong>Gestão de Growth:</strong> Olhar holístico para o funil (AARRR), não apenas aquisição.<br />- <strong>Liderança:</strong> Construção de times multidisciplinares que amam bater meta.<br />- <strong>Experimentação:</strong> Cultura de testes rápidos (A/B) para validar hipóteses sem queimar budget.</p><p>Atualmente, busco desafios onde eu possa conectar a visão do produto com a necessidade do mercado. Se você quer falar sobre PLG (Product-Led Growth) ou apenas trocar dicas de ferramentas de automação, vamos nos conectar!</p>",
  },
  experience: [
    {
      role: "Growth Manager",
      company: "Fintech X",
      period: "2021 - Atual",
      bullets: [
        "Liderei a estratégia de Go-To-Market de 3 novos produtos, resultando em <strong>R$ 2M de ARR</strong> no primeiro ano.",
        "Implementei cultura de CRO que aumentou a conversão da Landing Page de 2% para 5.5% em 6 meses.",
        "Gestão de budget de mídia paga (R$ 500k/mês) com foco em otimização de ROAS.",
      ],
    },
    {
      role: "Coordenadora de Marketing",
      company: "Agência Y",
      period: "2018 - 2021",
      bullets: [
        "Reestruturei a área de Inbound Marketing, implementando HubSpot e automação de e-mail para nutrir leads.",
        "Gerenciei uma equipe de 5 pessoas (Designers e Redatores), garantindo entregas ágeis e de alta qualidade.",
      ],
    },
  ],
  skills: [
    "Growth Hacking",
    "Google Analytics 4",
    "CRM (Salesforce/HubSpot)",
    "Gestão de Tráfego",
    "Liderança de Equipes",
    "SaaS B2B",
    "Copywriting",
    "Análise de Dados",
  ],
};
