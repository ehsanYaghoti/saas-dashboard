import "./App.css";
import "./chart-config";

import { ThemeProvider } from "@/components/theme/theme-provider";
import SidebarLayout from "@/components/layouts/sidebarLayout";
import Header from "@/components/common/header/header";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarLayout>
        <main className="w-full">
          <Header />
          <div className="bg-gray-100 w-full flex-grow dark:bg-gray-900 min-h-screen  ">
            Main
          </div>
        </main>
      </SidebarLayout>
    </ThemeProvider>
  );
}

export default App;
