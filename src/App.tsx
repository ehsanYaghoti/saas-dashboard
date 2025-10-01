import "./App.css";
import "./chart-config";

import { ThemeProvider } from "@/components/theme/theme-provider";
import SidebarLayout from "@/components/layouts/sidebarLayout";
import Header from "@/components/common/header/header";
import KpiCard from "./components/common/cards/kpi";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarLayout>
        <div className=" w-full">
          <Header />
          <main className="w-full h-full bg-[#FAFCFE] flex flex-col gap-8 shrink grow basis-auto  dark:bg-gray-900 p-10 ">
            <div className="flex flex-wrap items-center gap-5 w-full justify-between ">
                <KpiCard title="Total Income"  profit amount={'$ 0.00'} description={{num : 0.00, explain : 'Compared to last month'}} />
                <KpiCard title="Profit"  profit={false}  amount={'$ 0.00'} description={{num : 0.00, explain : 'Compared to last month'}} />
                <KpiCard title="Total Views" profit amount={'0'} description={{num : 0.00, explain : 'Compared to last month'}} />
                <KpiCard title="Conversation Rate" profit amount={'0,00 %'} description={{num : 0.00, explain : 'Compared to last month'}} />
            </div>
          </main>
        </div>
      </SidebarLayout>
    </ThemeProvider>
  );
}

export default App;
