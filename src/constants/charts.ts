import { checkTheme } from "@/utils";
import type { ChartConfiguration , TitleOptions } from "chart.js";

export const titleTypography : Partial<TitleOptions> = {
  position: "top",
  align: "start",
  font: { size: 18, weight: 600, family: "Inter" },
  color: checkTheme() ? "rgba(250 , 250 , 250 , 0.8)" : "rgba(0,0,0,0.8)",
};

export const commonChartOptions : Partial<ChartConfiguration['options']> = {
  responsive: true,
};

export const secondaryColor : string = 'rgba(227,232,239, 0.4)';
export const primaryColor : string = '#287F71';
