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

import { getRadarChartOptions } from "@/constants/options/radarChartOptions";
import { radarChartData } from "@/constants/data/radarChartData";
import { radarTickLabels } from "@/plugins/radarChartPlugins";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";

export default function RadarChart() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center [grid-area:c] w-auto min-h-72 bg-white dark:bg-dark-4 dark:text-dark-text rounded-lg border border-slate-200 shadow-md relative">
      <Radar
        data={radarChartData}
        options={getRadarChartOptions({
          isDark:
            theme === "dark" ||
            (theme === "system" &&
              window.matchMedia("(prefers-color-scheme: dark)").matches),
        })}
        plugins={[radarTickLabels]}
      />

      <div className=" flex items-center gap-1 text-slate-500 dark:text-dark-text absolute right-6 top-6 ">
        <Button className="cursor-pointer " variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </div>
    </div>
  );
}
