"use client";

import { useClerk } from "@clerk/nextjs";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { modules } from "@/config/modules"; // Certifique-se que seus módulos estejam descritos para o candidato
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Badge } from "@/components/ui/badge"; // Assumindo que você tem ou use classes tailwind
import { Separator } from "@/components/ui/separator";

import {
  Users,
  Star,
  Sparkles,
  LogIn,
  CheckCircle2,
  Rocket,
  ArrowRight,
  Target,
  FileSearch,
  Zap,
  Linkedin,
} from "lucide-react";

// ... imports anteriores
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react"; // Certifique-se de importar o Quote

// Dados dos depoimentos (Pode ficar fora do componente ou em um arquivo separado)
const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "Desenvolvedor Frontend",
    company: "Nubank",
    avatar: "LF",
    image: "https://i.pravatar.cc/150?u=lucas", // Placeholder
    content:
      "Eu mandava 50 currículos por semana e não tinha resposta. O Avvance me mostrou que eu estava sendo filtrado pelos robôs. Ajustei as keywords e em 2 semanas consegui minha entrevista.",
    highlight: "Contratado em 14 dias",
  },
  {
    name: "Mariana Costa",
    role: "Gerente de Marketing",
    company: "Mercado Livre",
    avatar: "MC",
    image: "https://i.pravatar.cc/150?u=mariana",
    content:
      "O gerador de LinkedIn é assustadoramente bom. Ele reescreveu meu 'Sobre' de um jeito que eu nunca conseguiria. Meu perfil começou a aparecer nas buscas dos recrutadores.",
    highlight: "Aumentou visitas no perfil em 300%",
  },
  {
    name: "Ricardo Silva",
    role: "Analista de Dados",
    company: "Itaú",
    avatar: "RS",
    image: "https://i.pravatar.cc/150?u=ricardo",
    content:
      "Achei que meu CV estava bom, mas a análise da IA encontrou erros de formatação que quebravam o ATS. Corrigi, e o resultado veio rápido.",
    highlight: "Passou na triagem automática",
  },
  {
    name: "Beatriz Oliveira",
    role: "UX Designer",
    company: "Globo",
    avatar: "BO",
    image: "https://i.pravatar.cc/150?u=beatriz",
    content:
      "A ferramenta de Match de Vaga é incrível. Ela me disse exatamente o que faltava no meu CV para a vaga que eu queria. Personalizei e deu match!",
    highlight: "Match de 95% atingido",
  },
  {
    name: "Eduardo Santos",
    role: "Sales Executive",
    company: "Salesforce",
    avatar: "ES",
    image: "https://i.pravatar.cc/150?u=eduardo",
    content:
      "Eu não sabia vender meu próprio peixe. O Avvance transformou minhas experiências genéricas em conquistas quantificáveis. Valeu cada centavo.",
    highlight: "Mudança de carreira",
  },
  {
    name: "Fernanda Lima",
    role: "Tech Recruiter (Sim, eu uso!)",
    company: "Startup Confidencial",
    avatar: "FL",
    image: "https://i.pravatar.cc/150?u=fernanda",
    content:
      "Como recrutadora, digo: dá para ver a diferença de quem usa o Avvance. Os currículos chegam limpos, diretos e fáceis de ler. Facilita meu trabalho e o do candidato.",
    highlight: "Aprovado por RHs",
  },
];

import ModuleCard from "@/components/module-card";
import Link from "next/link";

export default function LandingPage() {
  const { openSignUp } = useClerk();

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="bg-purple-500/10 p-2 rounded-lg text-purple-500">
                <Sparkles size={24} />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">Avvance</h1>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="hidden md:block">
              <ModeToggle />
            </div>

            <SignedOut>
              <div className="flex gap-3">
                <SignInButton mode="modal">
                  <Button variant="ghost" className="hidden sm:flex">
                    Entrar
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20">
                    Começar Agora <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex gap-3 items-center">
                <Link href="/dashboard">
                  <Button variant="default">Ir para o App</Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-35 lg:pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10 opacity-50" />

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium mb-6 border border-purple-500/20">
              <Rocket size={14} />
              <span>Acelerador de Carreira com IA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Seu currículo não é o problema. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                O algoritmo é.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pare de enviar candidaturas no vazio. Nossa IA analisa seu perfil
              contra a vaga dos sonhos, otimiza seu LinkedIn e te diz exatamente
              o que mudar para ser notado pelos recrutadores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <SignedOut>
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-500/20"
                  onClick={openSignUp}
                >
                  Otimizar meu Currículo Grátis
                </Button>
              </SignedOut>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm"
              >
                Ver como funciona
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-3">
                {testimonials.map((testimonial, index) => (
                  <Avatar
                    key={index}
                    className="h-10 w-10 border-2 border-emerald-500"
                  >
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex flex-col text-xs">
                <div className="flex text-yellow-500 mb-1">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
                <span>Aprovado por +1.000 candidatos</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual / Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[480px] relative"
          >
            {/* Floating Badge Animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-background border p-3 rounded-xl shadow-2xl hidden sm:flex items-center gap-3"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Target size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase">
                  Match Rate
                </p>
                <p className="text-lg font-bold text-green-600">98%</p>
              </div>
            </motion.div>

            <Card className="p-1 bg-gradient-to-br from-white/10 to-white/5 border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="bg-card/80 p-6 rounded-lg space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Crie sua conta gratuita
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sem cartão de crédito. Teste todas as ferramentas de IA por
                    7 dias.
                  </p>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-2">
                    <Label>Nome completo</Label>
                    <Input
                      placeholder="Ex: João da Silva"
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Seu melhor e-mail</Label>
                    <Input
                      type="email"
                      placeholder="joao@email.com"
                      className="bg-background/50"
                    />
                  </div>

                  <SignedOut>
                    <Button
                      className="w-full h-11 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity"
                      onClick={openSignUp}
                    >
                      Começar Análise{" "}
                      <Zap className="w-4 h-4 ml-2 fill-current" />
                    </Button>
                  </SignedOut>
                </form>

                <div className="pt-4 border-t border-dashed">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-green-500" /> Scan
                      de CV
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-green-500" />{" "}
                      LinkedIn Generator
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-green-500" />{" "}
                      Vagas
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-15 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                <FileSearch size={24} />
              </span>
              Tudo o que você precisa para ser contratado
            </h2>
            <p className="text-muted-foreground text-lg">
              Esqueça as planilhas e a ansiedade. O Avvance centraliza sua busca
              e te dá as ferramentas de IA que antes só os recrutadores tinham.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {modules.map((module) => (
              <ModuleCard module={module} key={module.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Elemento decorativo de fundo */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Histórias de quem{" "}
              <span className="text-purple-500 underline decoration-wavy underline-offset-4">
                venceu o algoritmo
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Junte-se a milhares de profissionais que pararam de ser ignorados
              e conquistaram o "Sim".
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 flex flex-col justify-between hover:shadow-lg hover:border-purple-500/30 transition-all duration-300 bg-card/50 backdrop-blur-sm group">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <Quote className="text-purple-500/20 w-8 h-8 group-hover:text-purple-500/40 transition-colors" />
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={14}
                            className="fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between border-t border-dashed pt-4 mt-auto">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border-2 border-purple-500/20">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-bold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Ícone do LinkedIn para credibilidade */}
                      <div className="bg-[#0077b5]/10 p-1.5 rounded-full text-[#0077b5]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.21-.43-2-1.52-2A1.6 1.6 0 0013 13.82V19h-3v-9h3v1.23c.41-.62 1.14-1.5 2.76-1.5 1.98 0 3.24 1.3 3.24 4.09z" />
                        </svg>
                      </div>
                    </div>

                    {/* Badge de Resultado */}
                    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-semibold border border-green-500/20 w-full justify-center">
                      <CheckCircle2 size={12} />
                      {testimonial.highlight}
                      {testimonial.company && (
                        <>
                          <span className="mx-1">•</span>
                          <span>{testimonial.company}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            Invista na sua carreira (por menos de uma pizza)
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Planos simples. Cancele quando conseguir o emprego.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="p-8 flex flex-col hover:border-purple-400/50 transition-colors">
            <div className="mb-8">
              <h3 className="text-lg font-medium text-muted-foreground">
                Explorador
              </h3>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-4xl font-bold">R$0</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Para quem está começando a olhar o mercado.
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                <span>Busca de vagas ilimitada</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                <span>1 Análise de CV básica/mês</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                <span>Acesso à comunidade</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full">
              Criar conta grátis
            </Button>
          </Card>

          {/* Pro Plan */}
          <Card className="p-8 flex flex-col relative border-purple-500 shadow-2xl shadow-purple-500/10">
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              RECOMENDADO
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-bold text-purple-600">
                Carreira Pro
              </h3>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-4xl font-bold">R$29,90</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Para quem tem pressa em ser contratado.
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 size={18} className="text-purple-600 shrink-0" />
                <span>Análises de CV com IA Ilimitadas</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="text-purple-600 shrink-0" />
                <span>Match de Vagas (Score de Aderência)</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="text-purple-600 shrink-0" />
                <span>Gerador de LinkedIn & Cover Letter</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="text-purple-600 shrink-0" />
                <span>Simulador de Entrevista</span>
              </li>
            </ul>

            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Quero ser contratado rápido
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dashed py-12 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <span className="bg-purple-500 text-white p-1 rounded">
                  <Sparkles size={18} />
                </span>
                Avvance
              </h2>
              <p className="text-muted-foreground max-w-sm">
                Empoderando candidatos com a mesma inteligência artificial que
                as grandes empresas usam para contratar. O jogo virou.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-purple-500">
                    Analisador de CV
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-500">
                    Gerador de LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-500">
                    Vagas Remotas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-purple-500">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-500">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Avvance Inc. Feito com café e código.
            </p>
            <div className="flex gap-4">
              <Users size={18} />
              <Linkedin size={18} /> {/* Certifique-se de importar se usar */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
