import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";

import { Button } from "./ui/button";

// MAPA DE CORES PERMITIDAS PARA O TAILWIND
const colorMap = {
  "amber-600": {
    text: "text-amber-600",
    bg: "bg-amber-600/20",
    hover: "hover:bg-amber-600/30 hover:border-amber-600",
  },
  "blue-600": {
    text: "text-blue-600",
    bg: "bg-blue-600/20",
    hover: "hover:bg-blue-600/30",
  },
  "cyan-700": {
    text: "text-cyan-700",
    bg: "bg-cyan-700/20",
    hover: "hover:bg-cyan-700/30",
  },
  "emerald-600": {
    text: "text-emerald-600",
    bg: "bg-emerald-600/20",
    hover: "hover:bg-emerald-600/30",
  },
  "indigo-600": {
    text: "text-indigo-600",
    bg: "bg-indigo-600/20",
    hover: "hover:bg-indigo-600/30",
  },
  "rose-600": {
    text: "text-rose-600",
    bg: "bg-rose-600/20",
    hover: "hover:bg-rose-600/30",
  },
  "violet-700": {
    text: "text-violet-700",
    bg: "bg-violet-700/20",
    hover: "hover:bg-violet-700/30",
  },
};

export default function ModuleCard({ module, mode }) {
  // const colors = colorMap[module.color] || colorMap["blue-600"]; // fallback

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          key={module.title}
          className={`cursor-pointer text-left gap-2 transition duration-200 hover:-translate-y-[0.3rem] ${module.color.hover}`}
        >
          <CardHeader>
            <div
              className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${module.color.bg}`}
            >
              <module.icon className={`${module.color.text}`} size={24} />
            </div>

            <CardTitle>{module.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground">
              {module.shortDescription}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[80vh] overflow-y-auto rounded-2xl p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold sm:text-2xl mx-auto">
            <div
              className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${module.color.bg}`}
            >
              <module.icon className={module.color.text} size={24} />
            </div>
            {module.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-1 space-y-7">
          <p className="text-primary/70 text-center">{module.description}</p>

          <div className="text-lg whitespace-pre-line text-center">
            {module.instructions}

            {mode === "dashboard" && (
              <Button className="mx-auto mt-8">
                <Link href={module.url} size="lg">
                  Ir para o módulo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
