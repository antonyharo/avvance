import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  UserCheck,
  BrainCircuit,
  GraduationCap,
  Award,
  Wrench,
  Globe,
  MapPin,
  Briefcase,
  CheckCircle2,
  Users,
  TrendingUp,
  PieChart,
  Copy,
  Download,
} from "lucide-react";

export default function ProfileGeneratorOutput({ data = mockProfileData }) {
  if (!data) return null;
  console.log(data);

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
              {data.role.title}
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
              Este é o "Candidato dos Sonhos" gerado pela IA com base na
              descrição da vaga. Use este perfil para calibrar seu currículo ou
              entender o que o mercado espera.
            </p>
          </div>

          {/* <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-background border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              <Copy className="w-4 h-4" /> Copiar
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
              <Download className="w-4 h-4" /> Baixar PDF
            </button>
          </div> */}
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
              "{data.role.mindset}"
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="secondary">3-5 anos XP</Badge>{" "}
              {/* Pode virar dinâmico se quiser */}
              <Badge variant="secondary">{data.role.level}</Badge>
              <Badge variant="secondary">{data.role.industry}</Badge>
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
                  {data.education.degree}
                </span>
              </li>
              <li className="text-sm">
                <span className="font-bold text-foreground flex items-center gap-1">
                  Pós-Graduação <Award className="w-3 h-3 text-yellow-500" />
                </span>
                <span className="text-muted-foreground text-xs">
                  {data.education.certification}
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
                  {data.techStack.crm.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-blue-500/10 text-blue-400 border-blue-400/40"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase mb-2">
                  Dados & BI
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {data.techStack.data.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-green-500/10 text-green-400 border-green-400/40"
                    >
                      {skill}
                    </Badge>
                  ))}
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
              <span className="font-bold">{data.logistics.english}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>Modelo</span>
              </div>
              <span className="font-bold">{data.logistics.model}</span>
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
              {data.trajectory.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div
                    className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-background ${
                      index === 0 ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                  <div className="bg-background border rounded-lg p-5 shadow-sm hover:border-primary/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h4 className="font-bold text-base text-foreground">
                        {exp.role}
                      </h4>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ${
                          index === 0
                            ? "bg-primary/10 text-primary"
                            : "bg-muted"
                        }`}
                      >
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground uppercase font-bold mb-3">
                      {exp.context}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm text-foreground/80"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              index === 0
                                ? "text-green-500"
                                : "text-muted-foreground"
                            }`}
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seção: Competências Comportamentais (Soft Skills) */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-bold text-lg text-foreground">
              <Users className="w-5 h-5 text-primary" /> Soft Skills (DNA)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {data.softSkills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-muted/10 rounded-lg border border-dashed hover:bg-muted/20 transition-colors"
                >
                  <div className="mt-1 bg-purple-400/10 p-1.5 rounded-md text-purple-400">
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
          <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/30 border border-yellow-600/20 rounded-xl p-6">
            <h3 className="flex items-center gap-2 font-bold text-lg mb-4">
              <Award className="w-5 h-5 text-yellow-500 dark:text-yellow-400" /> Fatores "Uau"
              (Diferenciais)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {data.differentials.map((diff, i) => {
                // Alternar ícones só para dar uma variada visual
                const Icon = i % 2 === 0 ? PieChart : Wrench;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm  bg-yellow-500/20 p-2 rounded border border-yellow-400/30"
                  >
                    <Icon className="w-4 h-4 text-yellow-500 shrink-0" />
                    {diff}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

const mockProfileData = {
  role: {
    title: "Administrador de Vendas",
    mindset:
      "Organizado, analítico e o melhor amigo do CRM. Não apenas registra vendas, mas encontra os gargalos no funil.",
    level: "Pleno/Sênior",
    industry: "SaaS / Tech",
  },
  education: {
    degree: "Administração, Marketing ou Gestão Comercial.",
    certification: "Pós-graduação em Gestão de Vendas, BI ou CRM.",
  },
  techStack: {
    crm: ["Salesforce", "HubSpot", "Pipedrive", "Dynamics 365"],
    data: ["Excel Avançado", "Power BI", "Tableau", "Dashboards"],
  },
  logistics: {
    english: "Intermediário+",
    model: "Híbrido/Presencial",
  },
  trajectory: [
    {
      role: "Analista de Vendas Sênior / Especialista CRM",
      duration: "2-3 Anos",
      context: "Empresa SaaS / Tech Médio Porte",
      responsibilities: [
        "Gestão completa do CRM (Sanidade de dados).",
        "Criação de relatórios de conversão e funil.",
        "Apoio em campanhas de nutrição de leads.",
      ],
    },
    {
      role: "Administrador de Vendas",
      duration: "1.5 - 2.5 Anos",
      context: "Consultoria B2B",
      responsibilities: [
        "Controle de atividades diárias da força de vendas.",
        "Organização de propostas e materiais comerciais.",
      ],
    },
  ],
  softSkills: [
    { title: "Detalhista", desc: "Controle rigoroso de dados no CRM." },
    { title: "Analítico", desc: "Transforma números em insights de venda." },
    {
      title: "Orientado a Resultados",
      desc: "Foco total na meta e conversão.",
    },
    { title: "Proativo", desc: "Resolve gargalos sem esperar ordem." },
  ],
  differentials: [
    "Conhecimento em Marketing Digital / Inbound.",
    "Implementação/Customização de CRM.",
    "Treinamento de equipes de vendas.",
    "Certificação Salesforce/HubSpot.",
  ],
};
