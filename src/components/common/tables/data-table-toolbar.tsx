import type { Table } from "@tanstack/react-table";
import DataTableFacetedFilter from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { lowStockThreshold } from "@/constants/data/table/products";
import { useState } from "react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export default function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="bg-white dark:bg-dark-1 dark:text-dark-text">

      <div className="flex flex-col gap-5 py-3 md:flex-row items-center justify-between border dark:border-white px-4  md:overflow-visible min-h-16 h-fit z-10 ">
        <div
          className="
            md:h-full flex overflow-x-auto overflow-y-hidden w-full  items-center gap-1 md:gap-6
            font-[500] md:font-[600] text-xs md:text-base text-slate-400 dark:text-dark-text
        "
        >
          <DataTableFacetedFilter
            table={table}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
            title="All Products"
            column={table.getColumn("status")}
            options={{ tabIndexProp: 0, valueProp: undefined, type: "value" }}
          />
          {table.getColumn("status") && (
            <DataTableFacetedFilter
              table={table}
              tabIndex={tabIndex}
              setTabIndex={setTabIndex}
              title="Live"
              column={table.getColumn("status")}
              options={{ tabIndexProp: 1, valueProp: true, type: "value" }}
            />
          )}
          {table.getColumn("status") && (
            <DataTableFacetedFilter
              table={table}
              tabIndex={tabIndex}
              setTabIndex={setTabIndex}
              title="Archive"
              column={table.getColumn("status")}
              options={{ tabIndexProp: 2, valueProp: false, type: "value" }}
            />
          )}
          {table.getColumn("stock") && (
            <DataTableFacetedFilter
              table={table}
              tabIndex={tabIndex}
              setTabIndex={setTabIndex}
              title="Out of Stock"
              column={table.getColumn("stock")}
              options={{ tabIndexProp: 3, valueProp: 0, type: "range" }}
            />
          )}
          {table.getColumn("stock") && (
            <DataTableFacetedFilter
              table={table}
              tabIndex={tabIndex}
              setTabIndex={setTabIndex}
              title="Low Stock"
              column={table.getColumn("stock")}
              options={{
                tabIndexProp: 4,
                valueProp: lowStockThreshold,
                type: "range",
              }}
            />
          )}
        </div>

        <div className="flex items-center justify-center ">
          <DataTableViewOptions table={table} />
        </div>
      </div>

      <div className="flex items-center p-4 border-x dark:border-white relative">
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
    </div>
  );
}
