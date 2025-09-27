import "./App.css";
import "./chart-config";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/mode-toggle";
import SidebarLayout from "@/components/layouts/sidebarLayout";

function App() {

  return (
    <ThemeProvider defaultTheme="system"  storageKey="vite-ui-theme">
      <SidebarLayout >

            <ModeToggle />
            <div className="bg-gray-100 w-full flex-grow dark:bg-gray-900 min-h-screen  " >
                Main
            </div>

      </SidebarLayout>
    </ThemeProvider>
  );
}

export default App;
