import type { LineProps } from "@/types/chart";
import { titleTypography } from "../charts";
import { getWindowsWidth } from "@/utils";

type GetOptions = ({ isDark }: { isDark: boolean }) => LineProps["options"];

export const getLineChartOptions: GetOptions = ({ isDark }) => ({
  responsive: true,
  aspectRatio: getWindowsWidth() === "xxs" ? 2 : 3,
  maintainAspectRatio: true,
  animation: {
    duration: 2000,
    easing: "easeOutCirc",
  },
  animations: {
    x: {
      from: 0,
    },
  },
  transitions: {
    show: {
      animations: {
        x: {
          from: 0,
        },
        y: {
          from: 0,
        },
      },
    },
    hide: {
      animations: {
        x: {
          to: 0,
        },
        y: {
          to: 0,
        },
      },
    },
  },
  layout: {
    padding: getWindowsWidth() === "xxs" ? 4 : 24,
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
  elements: {
    point: {
      pointStyle: "circle",
      hoverBackgroundColor: "white",
      borderWidth: 0,
      radius: 2,
      hoverBorderWidth: 2,
      hitRadius: 50,
      hoverRadius: 6,
    },
  },
  scales: {
    y: {
      position: "right",
      max: 20000,
      min: 0,
      ticks: {
        callback: (value, index) => {
          if (+index % 5 === 0) {
            return `$${+value / 1000}k`;
          }
          return "";
        },
        color: () => {
          return isDark ? "white" : "#B0B9C8";
        },
      },
      border: {
        // display: false,
        color: isDark ? "white" : "rgba(0,0,0,0.2)",
        dash: [3, 5],
      },
      grid: {
        color: (context) => {
          if (context.index % 5 === 0) {
            return isDark ? "white" : `rgba(0 , 0 , 0 , 0.1)`;
          }
          return "rgba(0 , 0 , 0 , 0.0)";
        },

        // tickBorderDashOffset: 1,
        // tickBorderDash: [2, 1],
        display: true,
      },
    },
    x: {
      //   offset: true,
      //   offsetAfterAutoskip  : true,
      min: "2023-04-01",
      suggestedMin: "2023-03-01",
      suggestedMax: "2023-12-30",
      type: "time",
      time: {
        unit: "month", // 👈 Show ticks per month
        tooltipFormat: "MMM yyyy", // 👈 Show formatted label in tooltip
        displayFormats: {
          month: "MMM yyyy",
        },
      },
      ticks: {
        source: "auto", // let Chart.js space them nicely,
        major: {
          // enabled: true,
        },
        align: "start",
        color: () => {
          return isDark ? "white" : "rgba(0,0,0,0.5)";
        },
        padding: 6,
        font: { weight: 600 },
      },
      border: {
        display: false,
        // dash : [1 ,4]
      },
      grid: {
        color: () => (isDark ? "rgb(255,255,255)" : "rgba(0,0,0,0.1)"),
        backgroundColor: ["lightgrey", "white"],
        backgroundColorRepeat: true,
        // drawOnChartArea: true,
        // display : false
      },
    },
  },
  plugins: {
    htmlLegend: {
      containerID: "legend-container",
    },
    legend: {
      position: "top" as const,
      align: "start",
      display: false,
      //   fullSize : false,
      labels: {
        boxHeight: 7,
        boxWidth: 7,
        padding: 10,
        pointStyle: "rectRot",
        usePointStyle: false,
        borderRadius: 4,
        useBorderRadius: false,
        textAlign: "left",
        color: "rgba(0,0,0,0.7)",
        font: { size: 14 },
        // generateLabels : (a ) => {
        //     console.log(a)
        // }
      },
    },
    title: {
      display: false,
      text: "Revenue Over Time",
      ...titleTypography,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}:  $${context.formattedValue}`;
        },
      },
      usePointStyle: false,
      backgroundColor: "#111729",
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
      padding: 15,
      bodySpacing: 10,
      titleSpacing: 2,
      titleMarginBottom: 12,
    },
  },
})
