import JobCard from "@/components/job-card";

export default function JobsOutput({ data = mockJobsData }) {
  console.log(data);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pointer-events-none">
      {data?.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
}

const mockJobsData = [
  {
    company: "Santé",
    title: "Engenheiro de Código que Não Quebra (Quase Nunca)",
    location: "New York, NY",
    job_level: "mid-senior level",
    description: "Engenharia em POS; manter tudo funcionando sem virar caos.",
    job_url: "https://www.linkedin.com/jobs/view/4342076693",
  },
  {
    company: "BeaconFire Inc.",
    title: "Domador de Python Júnior",
    location: "New York, United States",
    job_level: "entry level",
    description: "Desenvolvimento full-stack e evitar que o Python te morda.",
    job_url: "https://www.linkedin.com/jobs/view/4338005331",
  },
  {
    company: "Jolly",
    title: "Estagiário Full-Stack que Faz de Tudo um Pouco",
    location: "New York, United States",
    job_level: "entry level",
    description: "React, Node e café… principalmente café.",
    job_url: "https://www.linkedin.com/jobs/view/4342106081",
  },
  {
    company: "Clay",
    title: "Arquiteto de Sistemas Anti-Pânico",
    location: "New York, NY",
    job_level: "mid-senior level",
    description: "Infraestrutura sólida o suficiente para evitar sustos.",
    job_url: "https://www.linkedin.com/jobs/view/4342137486",
  },
  {
    company: "GE HealthCare",
    title: "Engenheiro C++ que Fala com Máquinas",
    location: "New York, NY",
    job_level: "mid-senior level",
    description: "Integrar ML com C++ sem perder a sanidade.",
    job_url: "https://www.linkedin.com/jobs/view/4335966404",
  },

  /* --- NOVAS 10 VAGAS COM NOMES FICTÍCIOS E ENGRAÇADOS --- */

  {
    company: "Spotify",
    title: "Guardião das Playlists Que Nunca Travem",
    location: "New York, NY",
    job_level: "mid level",
    description: "APIs de streaming que não desafinam.",
    job_url: "https://www.linkedin.com/jobs/view/0000000001",
  },
  {
    company: "Google",
    title: "Engenheiro de Busca por Soluções (Literalmente)",
    location: "New York, NY",
    job_level: "entry level",
    description:
      "Trabalhar com sistemas distribuídos e fazer mágica computacional.",
    job_url: "https://www.linkedin.com/jobs/view/0000000002",
  },
  {
    company: "Meta",
    title: "Construtor de Bugs em Realidade Virtual",
    location: "New York, NY",
    job_level: "mid level",
    description: "Criar apps que rodem… e às vezes teleportem.",
    job_url: "https://www.linkedin.com/jobs/view/0000000003",
  },
  {
    company: "Stripe",
    title: "Mago dos Pagamentos Instantâneos",
    location: "New York, NY",
    job_level: "senior level",
    description: "Transações rápidas e sem feitiçaria suspeita.",
    job_url: "https://www.linkedin.com/jobs/view/0000000004",
  },
  {
    company: "Datadog",
    title: "Vigia de Servidores sem Soninho",
    location: "New York, NY",
    job_level: "mid level",
    description: "Monitorar sistemas e evitar incêndios digitais.",
    job_url: "https://www.linkedin.com/jobs/view/0000000005",
  },
  {
    company: "MongoDB",
    title: "Designer de Interfaces que Não Quebram com um ;",
    location: "New York, NY",
    job_level: "mid level",
    description: "React e design system sem dramas.",
    job_url: "https://www.linkedin.com/jobs/view/0000000006",
  },
  {
    company: "NVIDIA",
    title: "Dobrador de GPUs",
    location: "New York, NY",
    job_level: "senior level",
    description: "Construir ferramentas de IA com poder gráfico monstruoso.",
    job_url: "https://www.linkedin.com/jobs/view/0000000007",
  },
  {
    company: "Bloomberg",
    title: "Alquimista de Dados Financeiros",
    location: "New York, NY",
    job_level: "mid level",
    description: "Transformar números em algo útil.",
    job_url: "https://www.linkedin.com/jobs/view/0000000008",
  },
  {
    company: "IBM",
    title: "Aprendiz de Feitiços em Nuvem",
    location: "New York, NY",
    job_level: "entry level",
    description: "Trabalhar com nuvem sem provocar tempestade.",
    job_url: "https://www.linkedin.com/jobs/view/0000000009",
  },
  {
    company: "Adobe",
    title: "Criador de Ferramentas que Artistas Amam (e Odiarão Depois)",
    location: "New York, NY",
    job_level: "mid level",
    description: "APIs para criatividade digital.",
    job_url: "https://www.linkedin.com/jobs/view/0000000010",
  },
];
