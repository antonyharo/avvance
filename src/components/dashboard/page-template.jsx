import modules from "@/config/modules.json";

export default function PageTemplate({
  moduleName,
  icon,
  title,
  description,
  children,
  error,
}) {
  const moduleInfo = modules?.[moduleName];

  return (
    <div className="space-y-8">
      <h1 className="flex items-center gap-3 text-3xl font-bold">
        <span className="text-purple-500">{icon}</span> {title}
      </h1>

      <p className="opacity-80 w-3xl mb-6">{moduleInfo.shortDescription}</p>

      <span className="fixed right-0 top-1/2 z-50 flex h-14 w-11 -translate-y-1/2 items-center justify-center rounded-l-full bg-muted text-purple-400">
        {icon}
      </span>

      {error && <p className="text-red-500 mt-4">Erro: {error}</p>}

      {children}
    </div>
  );
}
