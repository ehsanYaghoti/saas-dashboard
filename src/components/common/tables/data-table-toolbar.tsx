import type { Table } from "@tanstack/react-table";
import DataTableFacetedFilter from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export default function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <>
      <div className=" bg-white flex items-center justify-between border px-4  overflow-visible h-16 z-10 ">
        <DataTableFacetedFilter table={table} />
        <div className="flex items-center justify-center ">
          <DataTableViewOptions table={table} />
        </div>
      </div>

      <div className="flex items-center p-4 border-x bg-white relative">
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
    </>
  );
}
