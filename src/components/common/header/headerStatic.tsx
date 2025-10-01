import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  ChevronDown,
  Download,
  Rocket,
  Search,
  Settings,
  User,
} from "lucide-react";

export default function HeaderStatic() {
  return (
    <div className="w-full h-auto px-6 py-3 flex items-center justify-between  ">
      <label className=" flex-grow flex items-center gap-3 max-w-[500px] ">
        <Search className=" w-5 " />
        <Input
          id="search"
          name="search"
          placeholder="Search anythig here..."
          className=" border-none shadow-none focus-visible:shadow-md focus-visible:ring-[1px] transition-all duration-500"
        />
      </label>
      <div className=" flex items-center divide-x ">
        <div className="flex items-center gap-2 px-3 ">
          <Button
            variant="ghost"
            size="icon"
            className="size-8 cursor-pointer "
          >
            <Download />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 cursor-pointer "
          >
            <Rocket />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 cursor-pointer "
          >
            <Settings />
          </Button>
          <ModeToggle />
        </div>
        <div className=" flex items-center px-3">
          <DropdownMenu>
            <DropdownMenuTrigger className=" flex items-center gap-1">
              <div className=" w-8 h-8 border rounded-full flex items-center justify-center  ">
                <User className=" w-5 cursor-pointer " />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="size-6 cursor-pointer p-2 "
              >
                <ChevronDown className=" w-6 cursor-pointer " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-white p-3 rounded-2xl border mt-5">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
