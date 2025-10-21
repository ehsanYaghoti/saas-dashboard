import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { barChartdata } from "@/constants/data/barChartData";
import { barChartOptions } from "@/constants/options/barChartOptions";
import { imageLabels, progressBar } from "@/plugins/barChartPlugins";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);

export function HorizontalBarChart() {
  return (
    <div className="flex flex-col items-start [grid-area:b] bg-white rounded-lg border border-slate-200 shadow-md relative">
      <Bar
      id="myChart"
        options={barChartOptions}
        data={barChartdata}
        plugins={[progressBar, imageLabels]}

      />
      <div className=" flex items-center gap-1 text-slate-500 absolute right-6 top-6 ">
        <Button className="cursor-pointer " variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </div>
    </div>
  );
}
