import type React from "react";
import { ThemeProvider } from "../theme/theme-provider";
import SidebarLayout from "./sidebarLayout";

export default function DashboardLayout({ children } : {children : React.ReactNode}) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarLayout>
        {children}
      </SidebarLayout>
    </ThemeProvider>
  );
}
