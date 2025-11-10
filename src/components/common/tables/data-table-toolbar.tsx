import { DataTableViewOptions } from "./data-table-view-options";
import type { TableProps } from "@/types";
import FilterTabs from "./data-table-filter-tabs";
import FilterSearch from "./data-table-filter-search";
import FilterSelect from "./data-table-filter-select";

export default function DataTableToolbar<TData>({ table }: TableProps<TData>) {
  return (
    <div className="bg-white dark:bg-dark-1 dark:text-dark-text">
      <div className="flex gap-5 items-center justify-between border border-b-0 dark:border-white px-4 overflow-visible h-16 z-10 ">
        <FilterTabs table={table} />
        <FilterSelect table={table} />
        <DataTableViewOptions table={table} />
      </div>

      <FilterSearch table={table} />
    </div>
  );
}
