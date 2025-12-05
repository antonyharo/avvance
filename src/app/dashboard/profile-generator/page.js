"use client";

import { useState } from "react";
import { UserCheck } from "lucide-react";

import { useJobForm } from "@/hooks/use-job-form";
import JobForm from "@/components/job-form";
import PageTemplate from "@/components/page-template";
import AiOutput from "@/components/dashboard/ai-output";
import OutputSkeleton from "@/components/skeletons/analyzer";

export default function Page() {
  const { register, handleSubmit, errors, isSubmitting, onReset } =
    useJobForm();

  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    setOutput(null);

    try {
      const response = await fetch("/api/modules/profile-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ job: data }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Erro desconhecido");
      }

      setOutput(result.output);
    } catch (err) {
      console.error(err);
      setError(err.message || "Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTemplate
      title={"Gerador de Perfis"}
      icon={<UserCheck />}
      moduleName={"profile-generator"}
      error={error}
      loading={loading}
      output={output}
    >
      <JobForm
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        onReset={onReset}
      />

      {/* <AiOutput output={output} /> */}
    </PageTemplate>
  );
}
