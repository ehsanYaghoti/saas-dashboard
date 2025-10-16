import "./App.css";
import "./chart-config";

import { ThemeProvider } from "@/components/theme/theme-provider";
import SidebarLayout from "@/components/layouts/sidebarLayout";
import Header from "@/components/common/header/header";
import KpiCard from "./components/common/cards/kpi";
import { ChartLine } from "./components/common/charts/lineChart";
import { HorizontalBarChart } from "./components/common/charts/horizontalBarChart";
import { Button } from "./components/ui/button";
import { Ellipsis } from "lucide-react";
import RadarChart from "./components/common/charts/radarChart";
import { DoughnutChart } from "./components/common/charts/doughnutChart";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarLayout>
        <div className=" w-full overflow-hidden">
          <Header />
          <main className="w-full h-full bg-[#FAFCFE] flex flex-col gap-8 shrink grow basis-auto  dark:bg-gray-900 p-10 ">
            <div className="flex flex-wrap items-center gap-5 w-full justify-between ">
              <KpiCard
                title="Total Income"
                profit
                amount={"$ 0.00"}
                description={{ num: 0.0, explain: "Compared to last month" }}
              />
              <KpiCard
                title="Profit"
                profit={false}
                amount={"$ 0.00"}
                description={{ num: 0.0, explain: "Compared to last month" }}
              />
              <KpiCard
                title="Total Views"
                profit
                amount={"0"}
                description={{ num: 0.0, explain: "Compared to last month" }}
              />
              <KpiCard
                title="Conversation Rate"
                profit
                amount={"0,00 %"}
                description={{ num: 0.0, explain: "Compared to last month" }}
              />
            </div>
            <div className="w-full flex gap-8">
              <ChartLine />
              <div className="flex flex-col items-center w-1/3 bg-white p-6 rounded-lg border border-slate-200 shadow-md relative">
                <HorizontalBarChart />
                <div className=" flex items-center gap-1 text-slate-500 absolute right-6 top-6 ">
                  <Button
                    className="cursor-pointer "
                    variant="ghost"
                    size="icon"
                  >
                    <Ellipsis />
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex gap-8">
              <div className="flex flex-col items-center w-1/3 min-h-72 bg-white p-6 rounded-lg border border-slate-200 shadow-md relative">
                <RadarChart />
                <div className=" flex items-center gap-1 text-slate-500 absolute right-6 top-6 ">
                  <Button
                    className="cursor-pointer "
                    variant="ghost"
                    size="icon"
                  >
                    <Ellipsis />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center w-1/3 min-h-72 bg-white px-6 py-6 rounded-lg border border-slate-200 shadow-md relative">
                <DoughnutChart />
                <div className=" flex items-center gap-1 text-slate-500 absolute right-6 top-6 ">
                  <Button
                    className="cursor-pointer "
                    variant="ghost"
                    size="icon"
                  >
                    <Ellipsis />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center w-1/3 min-h-72 bg-white p-6 rounded-lg border border-slate-200 shadow-md relative">
                <div className=" flex items-center gap-1 text-slate-500 absolute right-6 top-6 ">
                  <Button
                    className="cursor-pointer "
                    variant="ghost"
                    size="icon"
                  >
                    <Ellipsis />
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarLayout>
    </ThemeProvider>
  );
}

export default App;
