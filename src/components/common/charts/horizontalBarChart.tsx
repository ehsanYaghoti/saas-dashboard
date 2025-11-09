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
import { getBarChartOptions } from "@/constants/options/barChartOptions";
import { imageLabels, progressBar } from "@/plugins/barChartPlugins";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { memo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);

export const HorizontalBarChart = memo(function () {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-start md:min-h-[350px] [grid-area:b] bg-white dark:bg-dark-4  rounded-lg border border-slate-200 shadow-md relative">
      <Bar
        id="myChartHorizontalBar"
        options={getBarChartOptions({
          isDark:
            theme === "dark" ||
            (theme === "system" &&
              window.matchMedia("(prefers-color-scheme: dark)").matches),
        })}
        data={barChartdata}
        plugins={[imageLabels, progressBar]}
      />
      <div className=" flex items-center gap-1 text-slate-500 dark:text-dark-text absolute right-6 top-6 ">
        <Button className="cursor-pointer " variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </div>
    </div>
  );
})
