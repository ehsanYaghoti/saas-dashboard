import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from "chart.js";
import { Line } from "react-chartjs-2";
import annotationPlugin from 'chartjs-plugin-annotation';

// import faker from 'faker';
import type { ChartData, ChartOptions } from "chart.js";

interface LineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  annotationPlugin
);

export const options: LineProps["options"] = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  elements: {
    point: {
      backgroundColor: "red",
    },
  },
  aspectRatio: 2,
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
        display: false,
        dash: [6, 6],
      },
      grid: {
        color: (context) => {
          if (context.index % 5 === 0) {
            return `rgba(0 , 0 , 0 , 0.1)`;
          }
          return "rgba(0 , 0 , 0 , 0.0)";
        },

        tickBorderDashOffset: 1,
        tickBorderDash: [2, 1],
        display: true,
      },
    },
    x: {
        offset: true,
        min : '2023-03-01',
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

      },
      border: {
        display: false,
        // dash : [1 ,4]
      },
      grid: {
        drawOnChartArea: false
        // display : false
      },
      //   grid: { tickBorderDash : [1 , 2] },
      //   type : 'time'
      //   offset : true,
      //   offsetAfterAutoskip : true
    //   ticks: {
    //     major: {
    //       enabled: true,
    //     },
    //   },
    },
  },
  plugins: {
    annotation: {
      annotations: {
        highlight: {
          type: 'box',
          xMin: '2022-09-01',
          xMax: '2023-09-30',
          backgroundColor: 'rgba(16, 185, 129, 0.08)', // translucent green
          borderWidth: 0
        }
      }
    },
    legend: {
      position: "top" as const,
      align: "start",
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

        // generateLabels : (a ) => {
        //     console.log(a)
        // }
      },
    },
    title: {
      display: true,
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

const labels = [
  "Mar 2023",
  "Jun 2023",
  "Sep 2023",
  "Dec 2023",
  "Mar 2024",
  "Jun 2024",
  "Sep 2024",
  "Dec 2024",
];

// function getRandomInt(max: number, min: number): number {
//   return Math.floor(Math.random() * (max - min) + min);
// }

export const data: LineProps["data"] = {
  labels,
  datasets: [
    {
      label: "Revenue",
          data: [15000, 12000, 8000, 13000, 11000, 12823.98, 16000, 16000],
    //   data : [
    //     { x: 20230301, y: 16000 },
    //     { x: '2023-03-03', y: 15800 },
    //     { x: '2023-04-01', y: 15500 },
    //     { x: '2023-05-02', y: 10000 },
    //     { x: '2023-06-03', y: 15800 },
    //     { x: '2023-07-04', y: 5000 },
    //     { x: '2023-08-05', y: 6000 },
    //     { x: '2023-09-06', y: 15800 },
    //     { x: '2023-10-07', y: 4000 },

    // ],
      borderColor: "#287F71",
      backgroundColor: "red",
    //   backgroundColor: (_,index) => +index % 2 === 0 ? 'red':'pink',
      fill: false,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: "#ffffff",
      pointStyle: "circle",
      tension: 0.2,
    },
    {
      label: "Target",
      data: [10000, 11000, 9500, 10000, 9000, 9500, 14000, 14000],
      borderColor: "#EB862A",
      backgroundColor: "#EB862A",
      pointRadius: 1,
      pointStyle: "rectRot",

      tension: 0.2,
    },
  ],
};

export function ChartLine() {
  return <Line options={options} updateMode="resize" data={data} />;
}
