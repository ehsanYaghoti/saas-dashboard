import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/app-sidebar";
// import { findState } from "@/utils/sidebar";


export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <SidebarProvider  defaultOpen={true} >
      <AppSidebar />
      <main className=" w-full " >
        <SidebarTrigger className="m-2" />
        {children}
      </main>
    </SidebarProvider>
  );
}
