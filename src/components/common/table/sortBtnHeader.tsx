import { Button } from "@/components/ui/button";
import type { Products } from "@/types";
import type { Column } from "@tanstack/react-table";
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";

export default function SortBtnHeader({
  title,
  column,
}: {
  title: string;
  column: Column<Products>;
}) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className=" self-start w-full flex items-center justify-between mr-2 font-semibold"
    >
      {title}
      {column.getIsSorted() === "asc" ? (
        <ArrowUpNarrowWide className="ml-2 h-4 w-4 " />
      ) : (
        <ArrowDownWideNarrow className="ml-2 h-4 w-4 " />
      )}
    </Button>
  );
}
