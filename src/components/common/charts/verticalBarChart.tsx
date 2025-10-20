import { Button } from "@/components/ui/button";
import { barChartdata } from "@/constants/data/barChartData";
import { barChartOptions } from "@/constants/options/barChartOptions";
import { imageLabels, progressBar } from "@/plugins/barChartPlugins";
import type { BarProps } from "@/types/chart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Ellipsis } from "lucide-react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: BarProps["options"] = {
  responsive: true,
  indexAxis: "y",
  animation: {
    duration: 5000, // ms
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [500, 600, 700, 800, 900, 100, 200],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [1000, 950, 750, 550, 350, 150, 50],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function VerticalBarChart() {
  return <div className="flex flex-col items-start  p-6 bg-white rounded-lg border border-slate-200 shadow-md relative">
        <Bar options={barChartOptions} data={barChartdata} plugins={[progressBar, imageLabels]}  />

      <div className=" flex items-center gap-1 text-slate-500 absolute right-6 top-6 ">
        <Button className="cursor-pointer " variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </div>
    </div>

}
