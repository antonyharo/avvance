import { Card } from "@/components/ui/card";
import Loader from "../ui/loader";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import {
  UserCheck,
  Briefcase,
  GraduationCap,
  Wrench,
  Users,
  Globe,
  MapPin,
  Award,
  Download,
  Copy,
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
  PieChart,
} from "lucide-react";

export default function ReferenceProfileGenerator({ loading }) {
  if (loading) {
    return (
      <Card className="container mx-auto p-8 border-dashed w-full max-w-5xl bg-card/50 gap-1">
        <header className="space-y-5">
          <div className="space-y-3 animate-pulse">
            <div className="flex items-center gap-3">
              <Loader />
              <h1 className="text-3xl font-bold text-muted-foreground/60">
                Sintetizando o Candidato Ideal...
              </h1>
            </div>
            <p className="text-sm text-muted-foreground/50">
              Processando requisitos, hard skills e cultura da empresa para
              gerar o avatar perfeito.
            </p>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Skeleton className="h-64 w-full rounded-xl" />
            <div className="col-span-2 space-y-4">
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-96 w-full rounded-xl" />
            </div>
          </div>
        </header>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-6xl mx-auto bg-card/50 border-dashed p-6 md:p-8">
      {/* HEADER: A IDENTIDADE DO ALVO */}
      <header className="mb-8">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-wider uppercase bg-primary/10 w-fit px-2 py-1 rounded">
              <UserCheck className="w-4 h-4" /> Perfil Referência (Benchmark)
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              Administrador de Vendas
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
              Este é o "Candidato dos Sonhos" gerado pela IA com base na
              descrição da vaga. Use este perfil para calibrar seu currículo ou
              entender o que o mercado espera.
            </p>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-background border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              <Copy className="w-4 h-4" /> Copiar
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
              <Download className="w-4 h-4" /> Baixar PDF
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* COLUNA ESQUERDA: ATRIBUTOS (4 colunas) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card: Resumo da Persona */}
          <div className="bg-background border rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b">
              <BrainCircuit className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm uppercase text-muted-foreground">
                Mindset
              </h3>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed italic">
              "Organizado, analítico e o melhor amigo do CRM. Não apenas
              registra vendas, mas encontra os gargalos no funil. É a ponte
              entre a estratégia e a execução comercial."
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="secondary">3-5 anos XP</Badge>
              <Badge variant="secondary">Médio Porte</Badge>
              <Badge variant="secondary">SaaS/Tech</Badge>
            </div>
          </div>

          {/* Card: Educação */}
          <div className="bg-background border rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm uppercase text-muted-foreground">
                Base Acadêmica
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="font-bold block text-foreground">
                  Bacharelado/Tecnólogo
                </span>
                <span className="text-muted-foreground text-xs">
                  Administração, Marketing ou Gestão Comercial.
                </span>
              </li>
              <li className="text-sm">
                <span className="font-bold text-foreground flex items-center gap-1">
                  Pós-Graduação <Award className="w-3 h-3 text-yellow-500" />
                </span>
                <span className="text-muted-foreground text-xs">
                  Gestão de Vendas, BI ou CRM.
                </span>
              </li>
            </ul>
          </div>

          {/* Card: Tech Stack (Ferramentas) */}
          <div className="bg-background border rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b">
              <Wrench className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm uppercase text-muted-foreground">
                Caixa de Ferramentas
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase mb-2">
                  CRM (Obrigatório)
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Salesforce", "HubSpot", "Pipedrive", "Dynamics 365"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200"
                      >
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase mb-2">
                  Dados & BI
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Excel Avançado", "Power BI", "Tableau", "Dashboards"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200"
                      >
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Card: Idiomas & Logística */}
          <div className="bg-muted/30 border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span>Inglês</span>
              </div>
              <span className="font-bold">Intermediário+</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>Modelo</span>
              </div>
              <span className="font-bold">Híbrido/Presencial</span>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: EXPERIÊNCIA E SKILLS (8 colunas) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Seção: Experiência Ideal (Timeline) */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-bold text-lg text-foreground">
              <Briefcase className="w-5 h-5 text-primary" /> Trajetória Esperada
            </h3>

            <div className="relative border-l-2 border-muted ml-3 space-y-8 pb-2">
              {/* Exp 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                <div className="bg-background border rounded-lg p-5 shadow-sm hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h4 className="font-bold text-base text-foreground">
                      Analista de Vendas Sênior / Especialista CRM
                    </h4>
                    <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded">
                      2-3 Anos
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase font-bold mb-3">
                    Empresa SaaS / Tech Médio Porte
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>Gestão completa do CRM (Sanidade de dados).</span>
                    </li>
                    <li className="flex gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>Criação de relatórios de conversão e funil.</span>
                    </li>
                    <li className="flex gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>Apoio em campanhas de nutrição de leads.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Exp 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-muted-foreground/30 border-4 border-background" />
                <div className="bg-background border rounded-lg p-5 shadow-sm hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h4 className="font-bold text-base text-foreground">
                      Administrador de Vendas
                    </h4>
                    <span className="text-xs font-bold bg-muted px-2 py-1 rounded">
                      1.5 - 2.5 Anos
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase font-bold mb-3">
                    Consultoria B2B
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span>
                        Controle de atividades diárias da força de vendas.
                      </span>
                    </li>
                    <li className="flex gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span>
                        Organização de propostas e materiais comerciais.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Seção: Competências Comportamentais (Soft Skills) */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-bold text-lg text-foreground">
              <Users className="w-5 h-5 text-primary" /> Soft Skills (DNA)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Detalhista",
                  desc: "Controle rigoroso de dados no CRM.",
                },
                {
                  title: "Analítico",
                  desc: "Transforma números em insights de venda.",
                },
                {
                  title: "Orientado a Resultados",
                  desc: "Foco total na meta e conversão.",
                },
                {
                  title: "Proativo",
                  desc: "Resolve gargalos sem esperar ordem.",
                },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-muted/10 rounded-lg border border-dashed hover:bg-muted/20 transition-colors"
                >
                  <div className="mt-1 bg-purple-100 p-1.5 rounded-md text-purple-600">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{skill.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seção: Diferenciais (Bonus Track) */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="flex items-center gap-2 font-bold text-lg text-yellow-800 mb-4">
              <Award className="w-5 h-5" /> Fatores "Uau" (Diferenciais)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm text-yellow-900 bg-white/50 p-2 rounded border border-yellow-100">
                <PieChart className="w-4 h-4 text-yellow-600" />
                Conhecimento em Marketing Digital / Inbound.
              </div>
              <div className="flex items-center gap-2 text-sm text-yellow-900 bg-white/50 p-2 rounded border border-yellow-100">
                <Wrench className="w-4 h-4 text-yellow-600" />
                Implementação/Customização de CRM.
              </div>
              <div className="flex items-center gap-2 text-sm text-yellow-900 bg-white/50 p-2 rounded border border-yellow-100">
                <Users className="w-4 h-4 text-yellow-600" />
                Treinamento de equipes de vendas.
              </div>
              <div className="flex items-center gap-2 text-sm text-yellow-900 bg-white/50 p-2 rounded border border-yellow-100">
                <Award className="w-4 h-4 text-yellow-600" />
                Certificação Salesforce/HubSpot.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
