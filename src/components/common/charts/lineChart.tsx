import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";

import "chartjs-adapter-date-fns";
import { lineChartOptions } from "@/constants/options/lineChartOptions";
import { lineChartData } from "@/constants/data/lineChartData";
import { htmlLegendPlugin, verticalHoverLine } from "@/plugins/chartsPlugins";
import { Button } from "@/components/ui/button";
import { Download, Ellipsis } from "lucide-react";

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

export function ChartLine() {
  return (
    <div className="flex flex-col w-2/3 bg-white p-6 rounded-lg border border-slate-200 shadow-md relative ">
      <h3 className="text-lg font-semibold text-slate-700 mb-2">
        Revenue Over Time
      </h3>
      <div id="legend-container"></div>
      <Line
        options={lineChartOptions}
        updateMode="resize"
        data={lineChartData}
        plugins={[verticalHoverLine, htmlLegendPlugin]}
      />
      <div className=" flex items-center gap-1 text-slate-500 absolute right-6 top-6 ">
        <Button className="cursor-pointer " variant="ghost" size="icon">
          <Download />
        </Button>
        <Button className="cursor-pointer " variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </div>
    </div>
  );
}
