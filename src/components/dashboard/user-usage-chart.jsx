"use client";

import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, LabelList } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

// 🔹 Geração de dados fictícios
function generateUsageData(days) {
  const data = [];

  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);

    const dayLabel = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    });

    const vagasBuscadas = Math.floor(Math.random() * 8);
    const analisesCurriculo = Math.floor(Math.random() * 6);
    const treinosEntrevista = Math.floor(Math.random() * 4);
    const usoGeral = vagasBuscadas + analisesCurriculo + treinosEntrevista;

    data.push({
      date: dayLabel,
      usoGeral,
      vagasBuscadas,
      analisesCurriculo,
      treinosEntrevista,
    });
  }
  return data;
}

// 🔹 Configuração de cores e rótulos
const chartConfig = {
  usoGeral: { label: "Uso Geral", color: "#7C3AED" },
  vagasBuscadas: { label: "Vagas Buscadas", color: "#a158e1" },
  analisesCurriculo: { label: "Análises de Currículo", color: "#ca85ff" },
  treinosEntrevista: { label: "Treinos de Entrevista", color: "#e3bdff" },
};

export function UserUsageChart() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("7d");
  const [data, setData] = React.useState(generateUsageData(30));
  const chartType = "bar"; // 🔹 Sempre barra

  React.useEffect(() => {
    if (timeRange === "7d") setData(generateUsageData(7));
    else if (timeRange === "30d") setData(generateUsageData(30));
    else if (timeRange === "90d") setData(generateUsageData(90));
  }, [timeRange]);

  const renderChart = () => {
    return (
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {Object.keys(chartConfig).map((key) => (
          <Bar key={key} dataKey={key} fill={chartConfig[key].color} radius={4}>
            <LabelList
              dataKey={key}
              position="top"
              offset={8}
              className="fill-muted-foreground text-[11px] font-medium"
            />
          </Bar>
        ))}
      </BarChart>
    );
  };

  return (
    <Card className="@container/card border-dashed transition-all hover:border-purple-400">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <CardTitle className={"mb-3"}>📈 Seu uso na plataforma</CardTitle>
          <CardDescription>
            Acompanhe suas atividades nos últimos dias
          </CardDescription>
        </div>

        <div className="flex gap-2 flex-wrap">
          {/* Controle de período */}
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden sm:flex"
          >
            <ToggleGroupItem value="7d">7 dias</ToggleGroupItem>
            <ToggleGroupItem value="30d">30 dias</ToggleGroupItem>
            <ToggleGroupItem value="90d">90 dias</ToggleGroupItem>
          </ToggleGroup>

          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="sm:hidden w-28" size="sm">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">7 dias</SelectItem>
              <SelectItem value="30d">30 dias</SelectItem>
              <SelectItem value="90d">90 dias</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="pt-4 sm:pt-6">
        <ChartContainer config={chartConfig} className="w-full h-[280px]">
          {renderChart()}
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
