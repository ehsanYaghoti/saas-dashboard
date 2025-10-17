import type { DoughnutProps } from "@/types/chart";
import { titleTypography } from "../charts";

export const gaugeChartOptions: DoughnutProps["options"] = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio : 1,
  circumference: 195,
  rotation: 263,
  layout: {
    padding : {
        // left : 20,
        // right : 20,
        // top : 0

    }
    // padding: {
    //   top: 40,
    //   bottom: 40,
    //   left: 55,
    //   right: 55,
    // },
  },
  cutout: "85%",
  radius : "80%",
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

      ...titleTypography,
    },
    subtitle: {
      display: true,
      text: "an overview of your users",
      padding: {
        bottom: 0,
      },
      position: "top",
      align: "start",
      font: { size: 16, weight: 500, family: "Inter" },
      color: "rgba(0,0,0,0.4)",
    },
    tooltip: {
      usePointStyle: true,
    },
  },
};
