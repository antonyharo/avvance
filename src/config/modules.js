import {
  Briefcase,
  UserCheck,
  User,
  FileHeart,
  MessageCircleQuestion,
  Gavel,
  TextSearch,
  MoveRight,
  Sparkles,
} from "lucide-react";

export const modules = [
  {
    title: "Explorador de Vagas",
    url: "/dashboard/jobs",
    icon: Briefcase,
    color: {
      text: "text-amber-600",
      bg: "bg-amber-600/20",
      hover: "hover:bg-amber-600/30 hover:border-amber-600",
      border: "border-amber-600",
    },
    category: "Busca de Vagas",
    shortDescription:
      "Encontre vagas ideais com filtros e acesso direto às principais plataformas.",
    description:
      "Explore oportunidades de trabalho com recursos avançados de filtragem e acesso direto às principais plataformas, facilitando a identificação das vagas mais alinhadas ao seu perfil.",
    instructions: (
      <div className="flex flex-wrap items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <span>Preencha as informações para filtrar vagas</span>
        </div>
        <MoveRight className="w-5 h-5" />
        <div className="flex items-center gap-2 font-bold">
          <Sparkles size={16} color="orange" fill="orange" />
          <span>Resultados de vagas para você</span>
        </div>
      </div>
    ),
  },

  {
    title: "Analisador de Currículos",
    url: "/dashboard/analyzer",
    icon: TextSearch,
    color: {
      text: "text-blue-600",
      bg: "bg-blue-600/20",
      hover: "hover:bg-blue-600/30 hover:border-blue-600",
      border: "border-blue-600",
    },
    category: "Análise de Currículos",
    shortDescription:
      "Analise currículos com IA e descubra o perfil completo do candidato.",
    description:
      "Envie currículos para uma IA e receba insights estratégicos juntamente com descrições e pontuações assertivas para conhecer melhor o candidato, sua área de atuação e seu posicionamento no mercado de trabalho.",
    instructions: (
      <div className="flex flex-wrap items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <span>Anexe seu currículo</span>
        </div>
        <MoveRight className="w-5 h-5" />
        <div className="flex items-center gap-2 font-bold">
          <Sparkles size={16} color="orange" fill="orange" />
          <span>Uma análise completa do seu currículo</span>
        </div>
      </div>
    ),
  },

  {
    title: "Revisor de Currículos",
    url: "/dashboard/reviewer",
    icon: Gavel,
    color: {
      text: "text-cyan-700",
      bg: "bg-cyan-700/20",
      hover: "hover:bg-cyan-700/30 hover:border-cyan-700",
      border: "border-cyan-700",
    },
    category: "Análise de Currículos",
    shortDescription:
      "Otimize currículos com IA para aumentar suas chances no mercado.",
    description:
      "Envie currículos para uma IA e receba insights estratégicos juntamente com descrições e pontuações assertivas para otimizá-lo, aumentando as chances de se destacar nas próximas oportunidades.",
    instructions: (
      <div className="flex flex-wrap items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <span>Anexe seu currículo</span>
        </div>
        <MoveRight className="w-5 h-5" />
        <div className="flex items-center gap-2 font-bold">
          <Sparkles size={16} color="orange" fill="orange" />
          <span>Uma revisão completa do seu currículo</span>
        </div>
      </div>
    ),
  },

  {
    title: "Gerador de Perfis",
    url: "/dashboard/profile-generator",
    icon: UserCheck,
    color: {
      text: "text-emerald-600",
      bg: "bg-emerald-600/20",
      hover: "hover:bg-emerald-600/30 hover:border-emerald-600",
      border: "border-emerald-600",
    },
    category: "Criação de Perfis",
    shortDescription:
      "Crie perfis estratégicos com base em vagas e habilidades desejadas.",
    description:
      "Crie perfis otimizados a partir de uma vaga, receba sugestões inteligentes de competências e habilidades, e analise candidatos com insights precisos para encontrar a combinação ideal para a sua necessidade.",
    instructions: (
      <div className="flex flex-wrap items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <span>Preencha as informações de uma vaga</span>
        </div>
        <MoveRight className="w-5 h-5" />
        <div className="flex items-center gap-2 font-bold">
          <Sparkles size={16} color="orange" fill="orange" />
          <span>Um perfil incrível gerado</span>
        </div>
      </div>
    ),
  },

  {
    title: "Gerador de Linkedin",
    url: "/dashboard/linkedin-generator",
    icon: User,
    color: {
      text: "text-indigo-600",
      bg: "bg-indigo-600/20",
      hover: "hover:bg-indigo-600/30 hover:border-indigo-600",
      border: "border-indigo-600",
    },
    category: "Criação de Perfis",
    shortDescription:
      "Transforme currículos em perfis LinkedIn prontos para impressionar.",
    description:
      "Faça o upload de um currículo e transforme-o automaticamente em um perfil profissional, no estilo LinkedIn, pronto para maximizar oportunidades, altamente otimizado para os altos padrões do mercado.",
    instructions: (
      <div className="flex flex-wrap items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <span>Anexe seu currículo</span>
        </div>
        <MoveRight className="w-5 h-5" />
        <div className="flex items-center gap-2 font-bold">
          <Sparkles size={16} color="orange" fill="orange" />
          <span>Um perfil completo para colocar no seu LinkedIn</span>
        </div>
      </div>
    ),
  },

  {
    title: "Match de Vagas",
    url: "/dashboard/candidate-job-match",
    icon: FileHeart,
    color: {
      text: "text-rose-600",
      bg: "bg-rose-600/20",
      hover: "hover:bg-rose-600/30 hover:border-rose-600",
      border: "border-rose-600",
    },
    category: "Análise de Aderência",
    shortDescription:
      "Avalie o alinhamento entre currículos e vagas com inteligência.",
    description:
      "Realize análises estratégicas de currículos com base em vagas específicas. Receba relatórios profissionais que avaliam a aderência do candidato, destacam pontos fortes e oportunidades de melhoria, e ajudam a tomar decisões mais assertivas no recrutamento.",
    instructions: (
      <div className="flex flex-wrap items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <span>Anexe seu currículo</span>
        </div>
        <MoveRight className="w-5 h-5" />

        <div className="flex items-center gap-2">
          <span>Preencha as informações de uma vaga</span>
        </div>
        <MoveRight className="w-5 h-5" />

        <div className="flex items-center gap-2 font-bold">
          <Sparkles size={16} color="orange" fill="orange" />
          <span>Uma análise de aderência completa</span>
        </div>
      </div>
    ),
  },

  {
    title: "Simulador de Entrevistas",
    url: "/dashboard/interview-simulator",
    icon: MessageCircleQuestion,
    color: {
      text: "text-violet-700",
      bg: "bg-violet-700/20",
      hover: "hover:bg-violet-700/30 hover:border-violet-700",
      border: "border-violet-700",
    },
    category: "Análise de Aderência",
    shortDescription:
      "Simule entrevistas reais com IA e receba feedback personalizado.",
    description:
      "Submeta um currículo e uma vaga para gerar um quiz de entrevista interativo. Responda perguntas baseadas no seu perfil e receba um score detalhado, com pontos fortes, GAPs de competência e recomendações de estudo para a vaga.",
    instructions: (
      <div className="flex flex-wrap items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <span>Anexe seu currículo</span>
        </div>
        <MoveRight className="w-5 h-5" />

        <div className="flex items-center gap-2">
          <span>Preencha as informações de uma vaga</span>
        </div>
        <MoveRight className="w-5 h-5" />

        <div className="flex items-center gap-2 font-bold">
          <Sparkles size={16} color="orange" fill="orange" />
          <span>Um quiz incrível para treinar entrevistas</span>
        </div>
      </div>
    ),
  },
];
