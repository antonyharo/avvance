"use client";

import { useUser } from "@clerk/nextjs";
import { modules } from "@/config/modules";
import ModuleCard from "@/components/module-card";
import { Mail } from "lucide-react";

import { UserUsageChart } from "@/components/dashboard/user-usage-chart";

export default function Page() {
  const { user } = useUser();

  if (!user) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <div className="grid gap-4">
        <h1 className="flex items-center gap-3 text-3xl font-bold">
          👋 Olá, {user.firstName || "Usuário"}!
        </h1>
        <p className="flex items-center gap-2 text-sm text-purple-400">
          <Mail size={15} /> {user.primaryEmailAddress.emailAddress}
        </p>
      </div>

      <p className="text-muted-foreground">
        Estamos aqui para ajudar você a dar o próximo passo na sua carreira —
        explore as ferramentas disponíveis!
      </p>

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
    </>
  );
}
