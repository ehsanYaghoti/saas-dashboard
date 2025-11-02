import type { DoughnutProps } from "@/types/chart";
import { titleTypography } from "../charts";
import { checkTheme } from "@/utils";


export const doughnutChartOptions: DoughnutProps["options"] = {
  responsive : true,
  maintainAspectRatio : true,
  animation : {
    duration : 2000,
    easing : "easeOutQuad"
  },
  layout : {
    padding : {
        top : 10,
        bottom : 40,
        left : 55,
        right : 55
    },
  },
  cutout : "65%",
  radius : "90%",
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      fullSize: true,
      color : checkTheme() ? "white" : "rgba(0,0,0,0.7)",
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
