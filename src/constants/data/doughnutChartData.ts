import type { DoughnutProps } from "@/types/chart";

export const doughnutChartData : DoughnutProps["data"] = {
  labels: ["Tokopedia", "Alibaba" , "Amazon"],
  datasets: [
    {
      label: "Sales",
      data: [25, 45 , 35],
      backgroundColor: [
        "#287F71",
        "#EB862A",
        "#ABBDD3",
      ],
      borderColor: [
        "#fff",
      ],
      borderWidth: 3,
    },
  ],
};
