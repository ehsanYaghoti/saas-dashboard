import { Button } from "@/components/ui/button";
import { Blocks, ListFilter, Share } from "lucide-react";



export default function HeaderDynamic () {

    return (
        <div className=" w-full px-6 py-3 flex items-center justify-between   " >
            <h2 className=" text-2xl font-bold text-slate-700  dark:text-white" >Overview</h2>

            <div className="flex items-center gap-3 px-1  ">
                <Button variant="outline"  >
                    <Blocks />
                    Custimize Widget
                </Button>
                <Button variant="outline"  >
                    <ListFilter />
                    Filter
                </Button>
                <Button variant="outline"  >
                    <Share />
                    Share
                </Button>
            </div>
        </div>
    )
}
