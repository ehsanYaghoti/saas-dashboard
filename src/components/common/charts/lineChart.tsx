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
    <div className="flex flex-col [grid-area:a] bg-white rounded-lg border  border-slate-200 shadow-md relative ">
        <h3 className="text-lg font-semibold text-slate-700 mb-2 px-6 pt-6 pb-0">
            Revenue Over Time
        </h3>
      <div id="legend-container" className="px-6"></div>
      <Line
        options={lineChartOptions}
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
