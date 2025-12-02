import modules from "@/config/modules.json";

import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";

import {
  Briefcase,
  UserCheck,
  User,
  FileHeart,
  MessageCircleQuestion,
  Gavel,
  TextSearch,
  File,
} from "lucide-react";

import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { formatToBrasilia } from "@/lib/utils";

import MarkdownComponent from "@/components/ui/markdown-component";
import CopyButton from "./ui/copy-button";

const iconMap = {
  Briefcase,
  UserCheck,
  User,
  FileHeart,
  MessageCircleQuestion,
  Gavel,
  TextSearch,
};

export default function UsageCard({ data }) {
  const moduleInfo = modules?.[data.module];
  const Icon = iconMap[moduleInfo?.icon] || File;

  // fallback amigável
  const safeOutput =
    data.output?.length > 0
      ? data.output
      : "Nenhum conteúdo disponível para este registro.";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          key={data.id}
          className="
            cursor-pointer transition duration-200 rounded-l-none border-l-5 hover:border-purple-400 hover:translate-y-[-0.2rem] p-3
          "
        >
          <CardHeader className="flex flex-row gap-4 items-center">
            <Icon className={moduleInfo.color.text} size={20} />

            <div className="flex-1 space-y-1">
              <CardTitle className="text-base">
                {moduleInfo?.title || "Módulo desconhecido"}
              </CardTitle>

              <CardDescription className="text-xs flex flex-col">
                <span>{moduleInfo?.category}</span>
                <span>{formatToBrasilia(data.created_at)}</span>
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </DialogTrigger>

      <DialogContent className="h-7xl max-h-[75vh] min-w-6xl flex-wrap flex">
        <ScrollArea className="h-[60vh]">
          <div className="space-y-6">
            <DialogHeader className="space-y-2 text-center">
              <DialogTitle className="text-2xl font-bold">
                {moduleInfo?.title}
              </DialogTitle>

              <DialogDescription>
                {moduleInfo?.category} — {formatToBrasilia(data.created_at)}
              </DialogDescription>
            </DialogHeader>

            <Separator />

            <div className="space-y-4">
              <CopyButton buttonText="Copiar" text={safeOutput} />

              <div className="prose dark:prose-invert max-w-none">
                <MarkdownComponent>{safeOutput}</MarkdownComponent>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
