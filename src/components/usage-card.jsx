import modules from "@/config/modules.json";

import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

import AnalyzerOutput from "./outputs/analyzer";
import CandidateJobMatchOutput from "./outputs/candidate-job-match";
import LinkedinGeneratorOutput from "./outputs/linkedin-generator";
import ProfileGeneratorOutput from "./outputs/profile-generator";
import ReviewerOutput from "./outputs/reviewer";
import JobsOutput from "./outputs/jobs";

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
import AnalyzerSkeleton from "./skeletons/analyzer";

const iconMap = {
  Briefcase,
  UserCheck,
  User,
  FileHeart,
  MessageCircleQuestion,
  Gavel,
  TextSearch,
};

const outputMap = {
  analyzer: AnalyzerOutput,
  "candidate-job-match": CandidateJobMatchOutput,
  "linkedin-generator": LinkedinGeneratorOutput,
  "profile-generator": ProfileGeneratorOutput,
  reviewer: ReviewerOutput,
  jobs: JobsOutput,
  // "interview-simulator": InterviewSimulatorOutput,
};

export default function UsageCard({ data }) {
  const moduleInfo = modules?.[data.module];
  const Output = outputMap[data.module];
  const Icon = iconMap[moduleInfo?.icon] || File;

  // fallback amigável
  // const safeOutput =
  //   data.output?.length > 0
  //     ? data.output
  //     : "Nenhum conteúdo disponível para este registro.";

  // console.log(data.output);

  console.log(Output);

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

      <DialogContent className="h-[90vh] max-h-[90vh] min-w-4xl flex-wrap flex">
        <ScrollArea className="h-[82vh]">
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
            <Output data={JSON.parse(data.output)} />
            {/* <AnalyzerOutput /> */}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
