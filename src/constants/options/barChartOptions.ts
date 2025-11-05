import type { BarProps } from "@/types/chart";
// import { titleTypography } from "../charts";
// import { checkTheme } from "@/utils";

type GetOptions = ({ isDark }: { isDark: boolean }) => BarProps["options"];

export const getBarChartOptions: GetOptions = ({ isDark }) => ({
  responsive: true,
  aspectRatio: 1,
  maintainAspectRatio: true,
  layout: { padding: 24 },
  animation: {
    duration: 2000,
    easing: "easeOutCirc",
  },
  animations: {
    x: {
      from: 0,
    },
  },
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  scales: {
    y: {
      offset: true,
      offsetAfterAutoskip: true,
      grid: {
        display: false,
        drawOnChartArea: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: true,
        padding: -12,
        color: "rgba(0,0,0,0)",
      },
    },
    x: {
      grid: {
        display: false,
        drawOnChartArea: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: true,
      fullSize: true,
      text: "Session by Country",
      color: isDark ? "white" : "rgba(0,0,0,0.8)",
      align: "start",
      position: "top",
      font: { size: 18, weight: 600, family: "Inter" },
      padding: {
        bottom: 10,
      },
      // ...titleTypography,
    },
    subtitle: {
      display: true,
      align: "start",
      font: { size: 16, weight: 500 , font : "Inter" },
      color: isDark ? "white" : "rgba(0,0,0,0.4)",
      padding: {
        bottom: 20,
      },
      text: "Showing Data for Top Session",
    },
  },
});
