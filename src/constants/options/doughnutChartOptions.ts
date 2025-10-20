import type { DoughnutProps } from "@/types/chart";
import { titleTypography } from "../charts";


export const doughnutChartOptions: DoughnutProps["options"] = {
  responsive : true,
  maintainAspectRatio : true,
  layout : {
    padding : {
        top : 10,
        bottom : 40,
        left : 55,
        right : 55
    },
  },
  cutout : "65%",
  radius : "99%",
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      fullSize: true,
      text: "Sales by e-commerce platform",
      padding: {
        bottom: 10,
      },
      ...titleTypography,
    },
    tooltip : {
        usePointStyle : true,
    }
  },
};
