import type { DoughnutProps } from "@/types/chart";

export const gaugeChartData : DoughnutProps["data"] = {
  labels: ["Premium Plan", "Basic Plan" ],
  datasets: [
    {
      label: "Users",
      data: [1809, 515],
      backgroundColor: [
        "#287F71",
        "#E3E8EF",
      ],
      borderColor: [
        "#fff",
      ],
      borderWidth: 1,
    },
  ],
};
