"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, Loader2 } from "lucide-react";
import JobCard from "@/components/job-card";
import CvCard from "@/components/cv-card";
import Loader from "@/components/ui/loader";
// Adicionei a importação do UsageCard (verifique se o caminho está correto)
import UsageCard from "@/components/usage-card";

const PAGE_SIZE = 10;

export default function Page() {
  // Estados para Vagas e CVs
  const [jobs, setJobs] = useState([]);
  const [cvAnalyses, setCvAnalyses] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [visibleCvAnalyses, setVisibleCvAnalyses] = useState([]);

  // Estado para o Histórico (iniciado como null para controlar o loading)
  const [history, setHistory] = useState(null);

  // Estados de Loading e Erro
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [loadingCvs, setLoadingCvs] = useState(false);
  const [error, setError] = useState(null);

  // Paginação
  const [jobPage, setJobPage] = useState(1);
  const [cvPage, setCvPage] = useState(1);

  // Função auxiliar para paginar localmente
  const paginate = (items, page) => items.slice(0, page * PAGE_SIZE);

  // Função genérica de busca para Jobs e CVs
  const fetchData = async (endpoint, setter, setVisible, setLoading) => {
    setLoading(true);
    try {
      const res = await fetch(endpoint);
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Erro ao buscar dados.");
      setter(data);
      setVisible(paginate(data, 1));
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Effect para carregar Vagas e CVs
  useEffect(() => {
    fetchData("/api/jobs", setJobs, setVisibleJobs, setLoadingJobs);
    fetchData("/api/cv", setCvAnalyses, setVisibleCvAnalyses, setLoadingCvs);
  }, []);

  // Effect para carregar o Histórico
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("/api/usage-logs");
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Erro ao buscar histórico.");
        setHistory(data);
      } catch (err) {
        console.error(err);
        // Não sobrescreve o erro global para não esconder erros de jobs/cvs,
        // ou defina history como array vazio em caso de erro.
        setHistory([]);
      }
    };

    fetchHistory();
  }, []); // Removida a dependência [user] pois ela não estava definida no escopo

  // Lógica de "Carregar Mais"
  const loadMore = (type) => {
    if (type === "jobs") {
      const nextPage = jobPage + 1;
      setVisibleJobs(paginate(jobs, nextPage));
      setJobPage(nextPage);
    } else {
      const nextPage = cvPage + 1;
      setVisibleCvAnalyses(paginate(cvAnalyses, nextPage));
      setCvPage(nextPage);
    }
  };

  // Lógica de Deleção
  const handleDelete = (id, list, setter, setVisible, page) => {
    const updated = list.filter((item) => item.id !== id);
    setter(updated);
    setVisible(paginate(updated, page));
  };

  return (
    <>
      <h1 className="flex items-center gap-3 text-3xl font-bold mb-1">
        <span className="text-purple-500">
          <Bookmark />
        </span>
        Salvos
      </h1>

      <p className="text-muted-foreground mb-6">
        Explore todos os seus conteúdos salvos.
      </p>

      {/* --- SEÇÃO: Currículos --- */}
      <section className="grid gap-5">
        <h2 className="flex items-center gap-2 text-lg font-medium">
          <span className="text-base">🔍</span> Análises de currículo salvas:
        </h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {loadingCvs ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {visibleCvAnalyses.length ? (
              visibleCvAnalyses.map((cv) => (
                <CvCard
                  key={cv.id}
                  cv={cv}
                  onDelete={() =>
                    handleDelete(
                      cv.id,
                      cvAnalyses,
                      setCvAnalyses,
                      setVisibleCvAnalyses,
                      cvPage
                    )
                  }
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-full">Nenhum item salvo.</p>
            )}
          </div>
        )}
        {visibleCvAnalyses.length < cvAnalyses.length && (
          <LoadMoreButton onClick={() => loadMore("cv")} loading={loadingCvs} />
        )}
      </section>

      {/* --- SEÇÃO: Histórico / Atividades --- */}
      <section className="grid gap-6 mt-10">
        <h2 className="flex items-center gap-2 text-lg font-medium">
          Suas últimas atividades
        </h2>

        {history ? (
          history.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
              {history.map((item) => (
                <UsageCard data={item} key={item.id} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              Nenhuma atividade recente encontrada.
            </p>
          )
        ) : (
          <Loader />
        )}
      </section>

      {/* --- SEÇÃO: Vagas --- */}
      <section className="grid gap-5 mt-10">
        <h2 className="flex items-center gap-2 text-lg font-medium">
          <span>💼</span> Vagas salvas:
        </h2>

        {loadingJobs ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleJobs.length ? (
              visibleJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isSaved
                  onDelete={() =>
                    handleDelete(job.id, jobs, setJobs, setVisibleJobs, jobPage)
                  }
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-full">Nenhum item salvo.</p>
            )}
          </div>
        )}
        {visibleJobs.length < jobs.length && (
          <LoadMoreButton
            onClick={() => loadMore("jobs")}
            loading={loadingJobs}
          />
        )}
      </section>
    </>
  );
}

function LoadMoreButton({ onClick, loading }) {
  return (
    <div className="flex justify-center mt-4">
      <Button variant="outline" onClick={onClick} disabled={loading}>
        {loading ? <Loader2 className="animate-spin" /> : "Carregar mais"}
      </Button>
    </div>
  );
}
