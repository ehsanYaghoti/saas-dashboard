import type { BarProps } from "@/types/chart";

export const barChartOptions: BarProps["options"] = {
  responsive: true,
  aspectRatio: 2,
  maintainAspectRatio : false,
  indexAxis: "y" as const,
  layout : {
    padding : {
        left : 30
    }
  },

  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  scales: {
    y: {
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
      align: "start",
      fullSize : true,
      text: "Session by Country",
      font: { size: 18 , weight : 600 },
      padding  : {
        bottom  : 10
      },
      color: "rgba(0,0,0,0.7)",
    },
    subtitle: {
      display: true,
      align: "start",
      font: { size: 14 , weight : 500 },
      color : "rgba(0,0,0,0.4)",
      padding  : {
        bottom  : 20
      },
      text: "Showing Data for Top Session",
    },
  },
};
