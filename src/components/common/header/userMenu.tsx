import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import {
  ChevronDown,
  User,
} from "lucide-react";




export default function UserMenu ({sidebar} : {sidebar : boolean}) {
    return (
        <div className={` ${sidebar ? 'flex md:hidden py-2 pl-3' : 'hidden md:flex px-3' } items-center `}>
          <DropdownMenu>
            <DropdownMenuTrigger className=" flex items-center gap-1">
              <div className=" w-8 h-8 border rounded-full flex items-center justify-center  ">
                <User className=" w-5 cursor-pointer " />
              </div>
              <ChevronDown className="w-4 cursor-pointer " />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-dark-1 dark:text-dark-text p-3 rounded-2xl border mt-5 z-50  ">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    )
}
