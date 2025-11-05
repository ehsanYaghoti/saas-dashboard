// import type { DoughnutProps } from "@/types/chart";
import type { DoughnutProps } from "@/types/chart";
// import { titleTypography } from "../charts";
// import { checkTheme } from "@/utils";

type GetOptions = ({ isDark }: { isDark: boolean }) => DoughnutProps["options"];

export const getGaugeChartOptions: GetOptions = ({ isDark }) => ({
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1,
  circumference: 200,
  rotation: 260,
  animation: {
    duration: 2000,
    easing: "easeOutQuad",
  },
  layout: {
    padding: 24,
  },
  cutout: "85%",
  radius: "80%",
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: true,
      fullSize: true,
      text: "Registered users",
      padding: {
        bottom: 10,
      },
      position: "top",
      align: "start",
      font: { size: 18, weight: 600, family: "Inter" },
      color: isDark ? "rgba(250 , 250 , 250 , 0.8)" : "rgba(0,0,0,0.8)",
    },
    subtitle: {
      display: true,
      text: "an overview of your users",
      color: isDark ? "white" : "rgba(0,0,0,0.4)",
      padding: {
        bottom: 0,
      },
      position: "top",
      align: "start",
      font: { size: 16, weight: 500, family: "Inter" },
    },
    tooltip: {
      usePointStyle: true,
    },
  },
});
