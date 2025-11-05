import { useTheme } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";
import { gaugeChartData } from "@/constants/data/gaugeChartData";
import { getGaugeChartOptions } from "@/constants/options/gaugeChartOptions";
import { dashedArc, textsMiddle } from "@/plugins/gaugeChartPlugins";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  SubTitle,
} from "chart.js";
import { Ellipsis } from "lucide-react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title, SubTitle);

export function GaugeChart() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center [grid-area:e] w-auto min-h-72 bg-white dark:bg-dark-4 rounded-lg border border-slate-200 shadow-md relative">
      <Doughnut
        data={gaugeChartData}
        options={getGaugeChartOptions({
          isDark: theme === "dark" || (theme === "system" &&  window.matchMedia("(prefers-color-scheme: dark)")
            .matches),
        })}
        plugins={[textsMiddle, dashedArc]}
      />
      <div className=" flex items-center w-full px-12 pb-6 divide-x-2 divide-[#E5E9EF] ">
        <div
          className=" flex flex-col items-start gap-1 relative w-1/2
             before:content-[''] before:h-12 before:absolute before:left-[-15px] before:top-[5px] before:w-[4px] before:rounded-full before:bg-primary-1
        "
        >
          <span className=" text-xl font-bold text-slate-800 dark:text-dark-text">
            1,809
          </span>
          <p className=" text-base font-bold text-slate-400 dark:text-dark-text">
            Premium Plan
          </p>
        </div>
        <div
          className=" flex flex-col items-end justify-end gap-1 relative w-1/2
             after:content-[''] after:h-12 after:absolute after:right-[-15px] after:top-[5px] after:w-[4px] after:rounded-full after:bg-[#E3E8EF]
        "
        >
          <span className=" text-xl font-bold text-slate-800 dark:text-dark-text">
            515
          </span>
          <p className=" text-base font-bold text-slate-400 dark:text-dark-text">
            Basic Plan
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-1 text-slate-500 dark:text-dark-text absolute right-6 top-6 ">
        <Button className="cursor-pointer " variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </div>
    </div>
  );
}
