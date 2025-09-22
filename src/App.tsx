import "./App.css";
import "./chart-config";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ModeToggle />
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />

        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
