import type { LineProps } from "@/types";

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

//   data: [15000, 12000, 8000, 13000, 11000, 12823.98, 16000, 16000],
//   data: [10000, 11000, 9500, 10000, 9000, 9500, 14000, 14000],

const dataChart = [
//   { x: "2023-03-01", y: 16000 },
//   { x: "2023-03-15", y: 15800 },
  { x: "2023-04-01", y: 15500 },
  { x: "2023-05-02", y: 10000 },
  { x: "2023-06-03", y: 15800 },
  { x: "2023-07-04", y: 5000 },
  { x: "2023-08-05", y: 6000 },
  { x: "2023-09-06", y: 15800 },
  { x: "2023-10-07", y: 4000 },
  { x: "2024-01-15", y: 8000 },
  { x: "2024-02-15", y: 10000 },
];

const dataChart_2 = [
//   { x: "2023-02-01", y: 19000 },
//   { x: "2023-03-03", y: 16800 },
  { x: "2023-04-01", y: 16500 },
  { x: "2023-05-02", y: 16000 },
  { x: "2023-06-13", y: 17000 },
  { x: "2023-07-04", y: 15000 },
  { x: "2023-08-05", y: 6000 },
  { x: "2023-09-06", y: 16800 },
  { x: "2023-10-08", y: 5000 },
  { x: "2023-11-08", y: 6000 },
  { x: "2023-12-15", y: 7000 },
  { x: "2024-01-08", y: 8000 },
  { x: "2024-02-08", y: 9000 },
];

export const lineChartData: LineProps["data"] = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: dataChart.map((item) => item),
      borderColor: "#287F71",
      backgroundColor: "#287F71",
      tension : 0.4,
      borderJoinStyle : "bevel",
      borderCapStyle : "butt"
    },
    {
      label: "Target",
      data: dataChart_2.map((item) => item),
      borderColor: "#EB862A",
      backgroundColor: "#EB862A",
      tension : 0.4,
    },
  ],
};
