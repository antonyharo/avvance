import modules from "@/config/modules.json";

import AnalyzerSkeleton from "./skeletons/analyzer";
import CandidateJobMatchSkeleton from "./skeletons/candidate-job-match";
import InterviewSimulatorSkeleton from "./skeletons/interview-simulator";
import JobsSkeleton from "./skeletons/jobs";
import LinkedinGeneratorSkeleton from "./skeletons/linkedin-generator";
import ProfileGeneratorSkeleton from "./skeletons/profile-generator";
import ReviewerSkeleton from "./skeletons/reviewer";

import AnalyzerOutput from "./outputs/analyzer";
import CandidateJobMatchOutput from "./outputs/candidate-job-match";
import LinkedinGeneratorOutput from "./outputs/linkedin-generator";
import ProfileGeneratorOutput from "./outputs/profile-generator";
import ReviewerOutput from "./outputs/reviewer";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

const skeletonMap = {
  analyzer: AnalyzerSkeleton,
  "candidate-job-match": CandidateJobMatchSkeleton,
  "interview-simulator": InterviewSimulatorSkeleton,
  jobs: JobsSkeleton,
  "linkedin-generator": LinkedinGeneratorSkeleton,
  "profile-generator": ProfileGeneratorSkeleton,
  reviewer: ReviewerSkeleton,
};

const outputMap = {
  analyzer: AnalyzerOutput,
  "candidate-job-match": CandidateJobMatchOutput,
  "linkedin-generator": LinkedinGeneratorOutput,
  "profile-generator": ProfileGeneratorOutput,
  reviewer: ReviewerOutput,
  // "interview-simulator": InterviewSimulatorOutput,
  // jobs: JobsOutput,
};

export default function PageTemplate({
  moduleName,
  icon,
  title,
  children,
  error,
  loading,
  output,
}) {
  const moduleInfo = modules?.[moduleName];

  const Skeleton = skeletonMap[moduleName];
  const Output = outputMap[moduleName];

  return (
    <div className="space-y-8">
      {/* Alterado: text-2xl no mobile, 3xl no desktop */}
      <h1 className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
        <span className={`${moduleInfo.color.text}`}>{icon}</span> {title}
      </h1>

      {/* Alterado: w-3xl (fixo) para w-full max-w-3xl (fluido) */}
      <p className="opacity-80 w-full max-w-3xl mb-4">
        {moduleInfo.description}
      </p>

      {/* Alterado: w-3xl (fixo) para w-full max-w-3xl (fluido) */}
      <p
        className={
          "w-full max-w-3xl border-l-4 pl-3 mb-6 font-bold " +
          moduleInfo.color.border
        }
      >
        {moduleInfo.instructions}
      </p>

      {/* Alterado: Adicionado 'hidden lg:flex' para esconder o ícone flutuante em telas menores onde ele cobriria o texto */}
      <span
        className={`hidden lg:flex fixed right-0 top-1/2 z-50 h-14 w-11 -translate-y-1/2 items-center justify-center rounded-l-full ${moduleInfo.color.bg} ${moduleInfo.color.text}`}
      >
        {icon}
      </span>

      {error && <p className="text-red-500 mt-4">Erro: {error}</p>}

      {children}

      {loading && (
        <div className="opacity-40">
          <Skeleton loading={loading} />
        </div>
      )}

      {!loading && !output && moduleName != "interview-simulator" && (
        <div className="opacity-60 dark:opacity-30">
          <p className="mb-5">Ao usar este módulo você verá algo como:</p>
          <Skeleton loading={false} />
        </div>
      )}

      {!loading && output && (
        <div className="space-y-4">
          <div>
            <Button
              className={
                "bg-transparent border border-dashed border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-primary"
              }
            >
              <Star /> Favoritar?
            </Button>
          </div>
          <Output data={output} />
        </div>
      )}
    </div>
  );
}
