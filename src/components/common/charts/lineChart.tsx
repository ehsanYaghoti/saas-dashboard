import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';
import type { ChartData, ChartOptions } from "chart.js";

interface LineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options: LineProps["options"] = {
  responsive: true,
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
        //   console.log(index);
        //   console.log(value);
          if (+index % 5 === 0) {
            return `$${+value / 1000}k`;
          }
          return "";
        },
        color: "#B0B9C8",
      },
      border : {
        display : false,
        dash : [6 , 6]
      },
      grid: {
        color: (context) => {
          console.log(context);
        //   console.log(value);
          if (context.index % 5 === 0) {
            return `rgba(0 , 0 , 0 , 0.1)`;
          }
          return "rgba(0 , 0 , 0 , 0.0)";
        },

        tickBorderDashOffset: 1,
        tickBorderDash: [2, 1],
        // tickBorderDashOffset: 50,
        display: true,
      },
    },
    x: {
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Revenue Over Time",
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
      label: "Target",
      data: [15000, 12000, 8000, 13000, 11000, 12823.98 , 16000 , 16000],
      borderColor: "#287F71",
      backgroundColor: "#287F71",
    //   borderWidth: 2,
      fill: false,
      //   borderDash: [4, 10],
      pointRadius: 1,
      pointHoverRadius: 6,
      tension: 0.2,
    },
    {
      label: "Revenue",
      data: [10000, 11000, 9500, 10000, 9000, 9500, 14000, 14000],
      borderColor: "#EB862A",
      backgroundColor: "#EB862A",
      pointRadius: 1,

      tension: 0.2,
    },
  ],
};

export function ChartLine() {
  return <Line options={options} updateMode="resize" data={data} />;
}
