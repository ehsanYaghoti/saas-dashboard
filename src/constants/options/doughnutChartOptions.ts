import type { DoughnutProps } from "@/types/chart";
import { titleTypography } from "../charts";
// import { getWindowsWidth } from "@/utils";

type GetOptions = ({ isDark }: { isDark: boolean }) => DoughnutProps["options"];

export const getDoughnutChartOptions : GetOptions = ({isDark}) => ({
  responsive: true,
  maintainAspectRatio: true,
    animation : {
      duration : 2000,
      easing : "easeOutCirc",
      animateRotate : true,
      animateScale : false
    },
//   animations: {
//     radius: {
//       duration: 1000,
//       easing: "easeOutElastic",
//       from: 0,
//       to: 120,
//       loop: false,
//     },
//   },
  layout: {
    padding: {
      top: 10,
      bottom: 43,
      left: 55,
      right: 55,
    },
  },
  cutout: "65%",
  radius: "90%",
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      fullSize: true,
      color: isDark ? "white" : "rgba(0,0,0,0.7)",
      text: "Sales by e-commerce platform",
      padding: {
        bottom: 10,
      },
      ...titleTypography,
    },
    tooltip: {
      usePointStyle: true,
    },
  },
});
