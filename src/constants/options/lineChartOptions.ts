import type { LineProps } from "@/types";
// import type { LineOptions, PluginOptionsByType } from "chart.js";

export const lineChartOptions: LineProps["options"] = {
  backgroundColor: "red",
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  aspectRatio: 3,
  elements: {
    point: {
      pointStyle: "circle",
      hoverBackgroundColor: "white",
      borderWidth: 0,
      radius: 2,
      hoverBorderWidth: 2,
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
        color: "#B0B9C8",
      },
      border: {
        // display: false,
        dash: [3, 5],
      },
      grid: {
        color: (context) => {
          if (context.index % 5 === 0) {
            return `rgba(0 , 0 , 0 , 0.1)`;
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
        color: "rgba(0,0,0,0.5)",
        padding: 6,
        font: { weight: 600 },
      },
      border: {
        display: false,
        // dash : [1 ,4]
      },
      grid: {
        // drawOnChartArea: true,
        // display : false
      },
    },
  },
  plugins: {
    annotation: {
      common: {
        drawTime: "beforeDraw",
      },
      annotations: {},
    },
    htmlLegend: {
      // ID of the container to put the legend in
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
        usePointStyle: true,
        borderRadius: 4,
        useBorderRadius: true,
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
      position: "top",
      align: "start",
      font: { size: 18, weight: 600, family: "Inter" },
      color: "rgba(0,0,0,0.8)",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}:  $${context.formattedValue}`;
        },
      },
      usePointStyle: true,
      backgroundColor: "#111729",
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
      padding: 15,
      bodySpacing: 10,
      titleSpacing: 2,
      titleMarginBottom: 12,
    },
  },
};
