import { Input } from "@/components/ui/input";
import type { TableProps } from "@/types";
import { Search } from "lucide-react";

export default function FilterSearch<TData>({ table }: TableProps<TData>) {
  return (
    <div className="flex items-center p-4 border border-b-0 z-0 dark:border-white relative">
      <Input
        placeholder="Search products..."
        value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("title")?.setFilterValue(event.target.value)
        }
        name="search"
        className="max-w-full bg-white h-12 pl-8 "
      />
      <Search className=" absolute left-7 text-slate-400" size={15} />
    </div>
  );
}
