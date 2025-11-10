import { DataTableViewOptions } from "./data-table-view-options";
import type { TableProps } from "@/types";
import FilterTabs from "./data-table-filter-tabs";
import FilterSearch from "./data-table-filter-search";

export default function DataTableToolbar<TData>({ table }: TableProps<TData>) {
  return (
    <div className="bg-white dark:bg-dark-1 dark:text-dark-text">
      <div className="flex gap-5 items-center justify-between border dark:border-white px-4  md:overflow-visible min-h-16 h-fit z-10 ">
        <FilterTabs table={table} />


        <div className="flex items-center justify-center ">
          <DataTableViewOptions table={table} />
        </div>
      </div>

      <FilterSearch table={table} />
    </div>
  );
}
