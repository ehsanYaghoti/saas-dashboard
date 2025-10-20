import type { Plugin } from "chart.js";

export const chartAreaPadding: Plugin = {
  id: "chartAreaPadding",
  beforeDraw: (chart) => {
    let { chartArea } = chart;
    chartArea = {
      width: chart.width,
      height: chart.height,
      top: chartArea.top + 20,
      bottom: chartArea.bottom - 20,
      left: chartArea.left + 50,
      right: chartArea.right - 20,
    };
    console.log(chartArea)
  },
};
