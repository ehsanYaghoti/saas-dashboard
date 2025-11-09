import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Download, Rocket, Settings } from "lucide-react";




export default function ToolbarAndTheme({sidebar} : {sidebar : boolean}) {
    return (
        <div className={` ${sidebar ? 'flex md:hidden  py-2 grow justify-between pr-3 ' : 'hidden md:flex px-3 ' } items-center gap-2 `}>
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
    )
}
