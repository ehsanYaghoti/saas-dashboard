import { useTheme } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";
import { doughnutChartData } from "@/constants/data/doughnutChartData";
import { getDoughnutChartOptions } from "@/constants/options/doughnutChartOptions";
import {
  dashedFullArc,
  lineLabelsPlugin,
} from "@/plugins/doughnutChartPlugins";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Ellipsis } from "lucide-react";
import { memo } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const DoughnutChart = memo(function () {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-start pb-4  [grid-area:d] w-auto min-h-72 md:min-h-[425px] bg-white dark:bg-dark-4 rounded-lg border border-slate-200 shadow-md relative">
      <h3 className="flex text-lg font-extrabold text-shadow-black p-6  text-slate-700 dark:text-dark-text mb-0">
        Sales by e-commerce platform
      </h3>
      <Doughnut
        data={doughnutChartData}
        options={getDoughnutChartOptions({
          isDark:
            theme === "dark" ||
            (theme === "system" &&
              window.matchMedia("(prefers-color-scheme: dark)").matches),
        })}
        plugins={[lineLabelsPlugin, dashedFullArc]}
      />

      <div className=" flex items-center gap-1 text-slate-500 dark:text-dark-text absolute right-6 top-6 ">
        <Button className="cursor-pointer " variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </div>
    </div>
  );
});
