import type { BarProps } from "@/types/chart";

const labels : string[] = ["Australia", "Indonesia", "Thailand", "Germany"];

export const barChartdata : BarProps["data"] = {
  labels,
  datasets: [
    {
      label: "Sessions",
      data: [750, 320, 450, 600],
      borderColor: "transparent",
      backgroundColor: "#287F71",
      borderWidth: 1,
      borderSkipped: false,
      borderRadius: 8,
      barPercentage: 0.4,
      categoryPercentage: 0.4,
    },
],

};
