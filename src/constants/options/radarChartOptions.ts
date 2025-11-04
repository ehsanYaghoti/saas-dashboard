import type { RadarProps } from "@/types/chart";
import { primaryColor } from "../charts";
// import { checkTheme } from "@/utils";

type GetOptions = ({ isDark }: { isDark: boolean }) => RadarProps["options"];

export const getRadarChartOptions: GetOptions = ({ isDark }) => ({
  responsive: true,
  aspectRatio: 1,
  interaction: {
    // mode: "index",
    intersect: false,
  },
  animation: {
    duration: 3000,
    easing: "easeOutQuad",
    // onProgress: function (animation) {
    //   //   progress.value = animation.currentStep / animation.numSteps;
    //   console.log(animation);
    // },
  },
  animations: {
    ["fadeIn"]: {
      properties: ['borderColor' , 'backgroundColor' ,'color' , 'gridColor'],
      type: 'color',
      from: 'transparent',
    },
    ['show'] : { type: 'boolean', duration: 300 }
  },
  layout: { padding: 24 },
  // clip: {left: 5, top: 100, right: -2, bottom: 0},
  scales: {
    r: {
      startAngle: -30,
      pointLabels: {
        color: () => {
          return isDark ? "white" : "rgba(0,0,0,0.4)";
        },
        padding: 25,
        font: {
          size: 10,
          weight: "bold",
          family: "Inter",
        },
      },
      // display : false,
      angleLines: {
        // display : false
        color: () => {
          return isDark
            ? "rgba(250 , 250 , 250 , 0.2)"
            : "rgba(0 , 0 , 0 , 0.1)";
        },
        lineWidth: 2,
      },
      grid: {
        // display : false
        drawTicks: false,
        lineWidth: 2,
        color: (context) => {
          if (
            context.index == context.chart.data.datasets[0].data.length ||
            context.index == 4
          ) {
            return isDark
              ? "rgba(250 , 250 , 250 , 0.2)"
              : "rgba(0 , 0 , 0 , 0.1)";
          }
          return "rgba(0 , 0 , 0 , 0.0)";
        },
      },
      ticks: {
        display: false,
      },
    },
  },

  elements: {
    line: {
      borderColor: primaryColor,
      borderWidth: 2,
    },
    // point : {
    //     backgroundColor : primaryColor,
    //     radius : 3,
    //     borderColor : "#fff",
    //     borderWidth : 1,
    // }
  },
  plugins: {
    title: {
      display: true,
      text: "Sales by Region",
      padding: {
        bottom: 30,
      },
      position: "top",
      align: "start",
      font: { size: 18, weight: 600, family: "Inter" },
      color: isDark ? "rgba(250 , 250 , 250 , 0.8)" : "rgba(0,0,0,0.8)",
    },
    legend: { display: false },
    tooltip: {
      usePointStyle: true,
      padding: 10,
      titleMarginBottom: 10,
    },
  },
});
