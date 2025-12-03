import ProfileGenerator from "../skeletons/profile-generator";
import modules from "@/config/modules.json";
import ReviewerSkeleton from "../skeletons/reviewer";
import LinkedinGeneratorSkeleton from "../skeletons/linkedin-generator";
import CandidateJobMatchSkeleton from "../skeletons/candidate-job-match";

export default function PageTemplate({
  moduleName,
  icon,
  title,
  children,
  error,
}) {
  const moduleInfo = modules?.[moduleName];

  return (
    <div className="space-y-8">
      <h1 className="flex items-center gap-3 text-3xl font-bold">
        <span className={`${moduleInfo.color.text}`}>{icon}</span> {title}
      </h1>

      <p className="opacity-80 w-3xl mb-4">{moduleInfo.description}</p>
      <p className="w-3xl mb-6 font-bold">{moduleInfo.instructions}</p>

      <span
        className={`fixed right-0 top-1/2 z-50 flex h-14 w-11 -translate-y-1/2 items-center justify-center rounded-l-full ${moduleInfo.color.bg} ${moduleInfo.color.text}`}
      >
        {icon}
      </span>

      {error && <p className="text-red-500 mt-4">Erro: {error}</p>}

      {children}

      <CandidateJobMatchSkeleton />
    </div>
  );
}
