import type { BarProps } from "@/types/chart";
import { titleTypography } from "../charts";

export const barChartOptions: BarProps["options"] = {
  responsive: true,
  aspectRatio: 1,
  maintainAspectRatio: true,
  layout : {padding : 24},
  animation: {
    duration: 5000, // ms
  },
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  scales: {
    y: {
        offset : true,
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
        padding : -12,
        color : 'rgba(0,0,0,0.0)',
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
      padding: {
        bottom: 10,
      },
      ...titleTypography,
    },
    subtitle: {
      display: true,
      align: "start",
      font: { size: 14, weight: 500 },
      color: "rgba(0,0,0,0.4)",
      padding: {
        bottom: 20,
      },
      text: "Showing Data for Top Session",
    },
  },
};
