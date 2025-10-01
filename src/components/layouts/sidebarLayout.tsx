import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/sidebar/sidebar";
// import { findState } from "@/utils/sidebar";


export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <SidebarProvider  defaultOpen={true} >
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
