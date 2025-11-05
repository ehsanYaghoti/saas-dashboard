import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { LogoIcon } from "../sidebar/logoIcon";
import { cn } from "@/lib/utils";

export const Logo = () => {
  const { state } = useSidebar();

  return (
    <div
      className={cn(
        "flex items-center",
        state === "collapsed" &&
          "!p-0 justify-center group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:self-center "
      )}
    >
      <LogoIcon collapsed={state === "collapsed"} />
      <h1
        className={`font-bold text-2xl text-primary-4 dark:text-white ${
          state === "collapsed" && "hidden"
        } `}
      >
        Consist
      </h1>
      <SidebarTrigger
        className={cn(" ml-4", state === "collapsed" && "hidden")}
      />
    </div>
  );
};
