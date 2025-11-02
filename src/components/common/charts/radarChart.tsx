import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Title,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Title
);

import { radarChartOptions } from "@/constants/options/radarChartOptions";
import { radarChartData } from "@/constants/data/radarChartData";
import { radarTickLabels } from "@/plugins/radarChartPlugins";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";

export default function RadarChart() {
  return (
    <div className="flex flex-col items-center [grid-area:c] w-auto min-h-72 bg-white dark:bg-dark-4 dark:text-dark-text rounded-lg border border-slate-200 shadow-md relative">
      <Radar
        data={radarChartData}
        updateMode="resize"
        options={radarChartOptions}
        plugins={[radarTickLabels]}
        className=""
      />

      <div className=" flex items-center gap-1 text-slate-500 dark:text-dark-text absolute right-6 top-6 ">
        <Button className="cursor-pointer " variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </div>
    </div>
  );
}
