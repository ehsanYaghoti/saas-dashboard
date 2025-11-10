import { useState } from "react";
import DataTableFacetedFilter from "./data-table-faceted-filter";
import { lowStockThreshold } from "@/constants/data/table/products";
import type { TableProps } from "@/types";

export default function FilterTabs<TData>({ table }: TableProps<TData>) {

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div
      className="
            md:h-full hidden md:flex overflow-x-auto overflow-y-hidden w-full  items-center gap-1 md:gap-6
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
  );
}
