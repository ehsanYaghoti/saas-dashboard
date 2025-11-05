import {
  FileText,
  Grid2X2,
  Info,
  MessageSquareText,
  Package,
  Phone,
  Rocket,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
  SidebarRail,
  useSidebar,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Suspense } from "react";
import NavProjectsSkeleton from "@/components/loadings/skeletons/sidebarSkeleton";
import { LogoIcon } from "./logoIcon";
import { cn } from "@/lib/utils";
import Ball from "./ball";
import { NavLink, useLocation } from "react-router";

// Menu items.
const items_1 = [
  {
    title: "Overview",
    url: "/",
    icon: Grid2X2,
  },
  {
    title: "Performance",
    url: "#",
    icon: TrendingUp,
  },
  {
    title: "Campaigns",
    url: "#",
    icon: FileText,
  },
  {
    title: "Orders",
    url: "#",
    icon: ShoppingBag,
  },
  {
    title: "Products",
    url: "/products",
    icon: Package,
  },
  {
    title: "Messages",
    url: "#",
    icon: MessageSquareText,
  },
  {
    title: "Sales platform",
    url: "#",
    icon: Phone,
  },
];

const items_2 = [
  {
    title: "Feedback",
    url: "#",
    icon: Rocket,
  },
  {
    title: "Help and docs",
    url: "#",
    icon: Info,
  },
];
export function AppSidebar() {
  const { state } = useSidebar();
  const {pathname} = useLocation();

  return (
    <Suspense fallback={<NavProjectsSkeleton />}>
      <Sidebar collapsible="icon" className="font-inter bg-white ">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
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
                  className={cn(" ml-auto", state === "collapsed" && "hidden")}
                />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu >
                {items_1.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className=" active:hover:bg-primary-1 active:hover:text-white "
                      asChild
                    >
                        <NavLink
                          to={item.url}
                          end
                          className={pathname === item.url ? ' text-white bg-primary-1  ' : '' }
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator className=" mx-4 data-[orientation=horizontal]:w-auto " />
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items_2.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className=" active:hover:bg-primary-1 active:text-white "
                    >
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className=" px-4">
          <SidebarMenu>
            {/* <SidebarMenuItem> */}
            <SidebarMenuItem
              className="group-data-[collapsible=icon]:hidden w-full h-[160px] p-4 rounded-md bg-primary-1
                    relative flex flex-col items-start justify-end gap-3 shadow-2xs shadow-primary-1
                    after:content-[''] after:absolute after:w-44 after:h-44 after:border-2 after:border-black/30 after:rounded-full after:left-[30%] after:-top-[70%]
                    before:content-[''] before:absolute before:w-44 before:h-44 before:border-2 before:border-black/30 before:rounded-full before:left-[80%] before:-top-[45px]
                    overflow-hidden
                "
            >
              <Ball />
              <p className=" text-white text-sm   ">
                Get detailed analitycs to help you, upgrade pro
              </p>
              {/* <a href="#" className=" "> */}
              <button className=" bg-white !cursor-pointer hover:bg-primary-1 hover:text-white border border-transparent hover:border-white  rounded-[10px] text-sm text-primary-1 px-2 py-1 ">
                Upgrade Now
              </button>
              {/* </a> */}
            </SidebarMenuItem>
            {/* </SidebarMenuItem> */}
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail className="" />
      </Sidebar>
    </Suspense>
  );
}
