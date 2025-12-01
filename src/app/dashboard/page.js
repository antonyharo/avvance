"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { modules } from "@/config/modules";
import ModuleCard from "@/components/module-card";
import { Mail } from "lucide-react";
import { UserUsageChart } from "@/components/dashboard/user-usage-chart";
import Loader from "@/components/ui/loader";
import { Card, CardContent } from "@/components/ui/card";
import UsageCard from "@/components/usage-card";

export default function Page() {
  const { user } = useUser();
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  // Frases para substituir "Olá, usuário!"
  const welcomePhrases = [
    "🌱 Hoje é um ótimo dia para crescer um pouco mais.",
    "🚀 O próximo salto começa exatamente aqui.",
    "🎯 Clareza na mente, propósito no caminho.",
    "🔥 A sua evolução está oficialmente em movimento.",
    "💼 Carreira não se constrói em um dia — mas em dias como este.",
    "🔍 Você está prestes a descobrir onde pode chegar.",
    "⚡ Energia certa, direção certa, progresso inevitável.",
    "🛠️ Lapidar talento? Missão aceita.",
    "🧭 A rota do seu crescimento está atualizada. Vamos seguir.",
    "✨ Cada login é uma nova chance de avançar.",
  ];

  const getRandomWelcome = () => {
    return welcomePhrases[Math.floor(Math.random() * welcomePhrases.length)];
  };

  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    setWelcomeMessage(getRandomWelcome());
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("/api/usage-logs");
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Erro ao buscar dados.");
        setHistory(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchHistory();
  }, [user]);

  if (!user) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <div className="grid gap-4">
        {/* FRASE ALEATÓRIA NO LUGAR DO "OLÁ, USUÁRIO!" */}

        <h2 className="flex items-center gap-3 text-2xl font-semibold">
          {`Olá, ${user.firstName}!`}
        </h2>
        <h1 className="flex items-center gap-3 text-3xl font-bold">
          {welcomeMessage}
        </h1>

        {/* Informações do usuário */}
        <p className="flex items-center gap-2 text-sm text-purple-400">
          <Mail size={15} /> {user.primaryEmailAddress.emailAddress}
        </p>
      </div>

      <UserUsageChart />

      {/* Grid de módulos */}
      <section className="grid gap-6 mt-6">
        <h2 className="flex items-center gap-2 text-lg font-medium">
          <span>✨</span> Que tal explorar novas funcionalidades?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modules.map((module) => (
            <ModuleCard key={module.title} module={module} mode="dashboard" />
          ))}
        </div>
      </section>

      <section className="grid gap-6 mt-6">
        <h2 className="flex items-center gap-2 text-lg font-medium">
          Suas últimas atividades
        </h2>

        {history ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
            {history.map((item) => (
              <UsageCard data={item} key={item.id} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </section>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
    </>
  );
}
