import { Button } from "@/components/ui/button";
import type { buttonsListType } from "@/types";
import { Blocks, ListFilter, Plus, Share } from "lucide-react";


const buttonsList: buttonsListType = [
  {
    title: "Custimize Widget",
    icon: <Blocks />,
  },
  {
    title: "Filter",
    icon: <ListFilter />,
  },
  {
    title: "Share",
    icon: <Share />,
  },
  {
    title: "Add Product",
    icon: <Plus />,
    style: "bg-primary-1 text-white",
  },
];

export default function HeaderDynamic({
  title,
  buttons,
}: {
  title: string;
  buttons?: string[];
}) {
  return (
    <div className=" w-full px-6 py-3 flex items-center justify-between   ">
      <h2 className=" text-2xl font-bold text-slate-700  dark:text-white flex items-center gap-2">
        {title}
        {title === "Products" && (
          <span className="text-xs px-2 py-[2px] rounded-full bg-[#E5F0EF] text-primary-1 text-shadow-lg text-shadow-white ">
            10,932
          </span>
        )}
      </h2>

      <div className="flex items-center gap-3 px-1  ">
        {buttonsList
          .filter((item) => {
            return buttons?.includes(item.title);
          })
          .map((button) => (
            <Button
              variant="outline"
              className={`${button.style} cursor-pointer`}
            >
              {button.icon}
              {button.title}
            </Button>
          ))}
      </div>
    </div>
  );
}
