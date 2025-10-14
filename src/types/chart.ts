import type { ChartData, ChartOptions } from "chart.js";

export interface LineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line", { x: string; y: number }[]>;
}

export interface BarProps {
  options: ChartOptions<"bar">;
  data: ChartData<"bar">;
}
