import { lowStockCount, productsTableData } from "@/constants/data/table/products";
import type { Column, Table } from "@tanstack/react-table";
import { type Dispatch, type MouseEvent, type SetStateAction } from "react";


interface DataTableFacetedFilterProps<TData, TValue> {
  table : Table<TData>
  tabIndex : number
  setTabIndex: Dispatch<SetStateAction<number>>
  title ?: string
  column ?: Column<TData , TValue>
  options : {
    tabIndexProp : number,
    valueProp : number | string | boolean | undefined,
    type: "range" | "value",
  }
}

export default function DataTableFacetedFilter<TData , TValue>({
  table,
  tabIndex,
  setTabIndex,
  title,
  column,
  options
}: DataTableFacetedFilterProps<TData , TValue>) {

  let filterFacetingHandler = (
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    setTabIndex(options.tabIndexProp);

    table.resetColumnFilters();

    column?.setFilterValue(undefined);

    if (options.type === "value") {
      column?.setFilterValue(options.valueProp);
    } else if (options.type === "range") {
      column?.setFilterValue([1 , options.valueProp]);
    }
  };

  return (

      <button
        type="button"
        className={`
            relative flex items-center gap-2
            font-bold
            ${
              tabIndex === options.tabIndexProp &&
              "text-primary-1 after:h-[3px]  after:content-['']"
            }
            after:w-full after:absolute after:bg-primary-1
            after:rounded-full after:-bottom-[1px] after:left-0
            hover:bg-green-50 dark:hover:bg-dark-2  cursor-pointer px-2 h-full
        `}
        onClick={(e) =>
          filterFacetingHandler(e)
        }
      >
        {title}
        <span className="ml-auto flex size-4 items-center justify-center font-mono text-sm bg-green-100 rounded-full p-3 text-primary-1">
          {options.tabIndexProp === 0 ? productsTableData.length : options.tabIndexProp === 4 ? lowStockCount : column?.getFacetedUniqueValues().get(options.valueProp) ? column?.getFacetedUniqueValues().get(options.valueProp) : 0}
        </span>
      </button>
  );
}
