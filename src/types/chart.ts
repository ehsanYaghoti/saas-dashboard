import type { Chart, ChartData, ChartOptions, Plugin } from "chart.js";

export interface LineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line", { x: string; y: number }[]>;
}

export interface BarProps {
  options: ChartOptions<"bar">;
  data: ChartData<"bar">;
}

export interface RadarProps {
  chart : Chart<'radar'>,
  options: ChartOptions<"radar">;
  data: ChartData<"radar">;
  plugin : Plugin<"radar">;
}

export interface DoughnutProps {
  chart : Chart<"doughnut">;
  options: ChartOptions<"doughnut">;
  data: ChartData<"doughnut">;
  plugin : Plugin<"doughnut">;
}
