import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function ModuleCard({ module, mode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          key={module.title}
          className="cursor-pointer text-left gap-2 transition duration-200 hover:border-dashed hover:border-purple-400 hover:shadow-purple-400"
        >
          <CardHeader>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/40">
              <module.icon className="text-purple-500" size={24} />
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

      <DialogContent
        className="
      max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 
      max-h-[80vh] overflow-y-auto rounded-2xl
      p-6 sm:p-8
    "
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold sm:text-2xl mx-auto">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/40">
              <module.icon className="text-purple-500" size={24} />
            </div>
            {module.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-1 space-y-7">
          <p className="text-primary/70 text-center">{module.description}</p>
          <div className="text-lg whitespace-pre-line text-center">
            {module.instructions}
            {mode === "dashboard" ? (
              <Button className={"mx-auto mt-8"}>
                <Link href={module.url} size="lg">
                  Ir para o módulo
                </Link>
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
