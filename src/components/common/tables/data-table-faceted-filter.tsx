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
            after:w-full after:absolute after:bg-primary-1 text-nowrap
            after:rounded-full after:-bottom-[0px] after:left-0 after:z-30
            hover:bg-green-50 dark:hover:bg-dark-2  cursor-pointer py-2 px-2 h-full
        `}
        onClick={(e) =>
          filterFacetingHandler(e)
        }
      >
        {title}
        <span className="ml-auto hidden md:flex size-4 items-center justify-center font-mono md:text-sm bg-green-100 rounded-full p-3 text-primary-1">
          {options.tabIndexProp === 0 ? productsTableData.length : options.tabIndexProp === 4 ? lowStockCount : column?.getFacetedUniqueValues().get(options.valueProp) ? column?.getFacetedUniqueValues().get(options.valueProp) : 0}
        </span>
      </button>
  );
}
