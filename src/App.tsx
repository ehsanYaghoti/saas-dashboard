import "./App.css";
import "./chart-config";

import Header from "@/components/common/header/header";
import KpiCard from "./components/common/cards/kpi";
import { ChartLine } from "./components/common/charts/lineChart";
import { HorizontalBarChart } from "./components/common/charts/horizontalBarChart";
import RadarChart from "./components/common/charts/radarChart";
import { DoughnutChart } from "./components/common/charts/doughnutChart";
import { GaugeChart } from "./components/common/charts/gaugeChart";
import DashboardLayout from "./components/layouts/dashbaordLayout";

function App() {
  return (
    <DashboardLayout>
      <div className=" w-full overflow-y-hidden ">
        <Header title="Overview" buttons={["Custimize Widget" , "Filter" , "Share" ]} />
        <main className="w-full h-full bg-[#FAFCFE] flex flex-col gap-8 shrink grow basis-auto  dark:bg-gray-900 p-4 md:p-10 ">
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            [grid-template-areas:'a'_'b'_'c'_'d'_'e'] md:[grid-template-areas:'a_a'_'b_c'_'d_e'] lg:[grid-template-areas:'a_a_b'_'c_d_e'] gap-8"
          >
            <ChartLine />
            <HorizontalBarChart />
            <RadarChart />
            <DoughnutChart />
            <GaugeChart />
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}

export default App;
