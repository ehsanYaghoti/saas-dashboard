import type { Table } from "@tanstack/react-table";
import { useState, type MouseEvent } from "react";

export default function DataTableFacetedFilter<TData>({
  table,
}: {
  table: Table<TData>;
}) {
  const [tabIndex, setTabIndex] = useState(0);

  let filterFacetingHandler = (
    e: MouseEvent<HTMLButtonElement>,
    columnKey: string,
    value: number | string | boolean | undefined,
    type: "range" | "value",
    tab: number
  ) => {
    e.preventDefault();

    setTabIndex(tab);

    const column = table.getColumn(columnKey);
    console.log(column);
    if (type === "value") {
      column?.setFilterValue(value);
    } else if (type === "range") {
      // function updater (value : number , treshhold : number) : Updater<any> {
      //     return value < treshhold
      // }
      column?.setFilterValue([0, value]);
    }
  };

  return (
    <div
      className="h-full flex  items-center gap-6
                    font-[600] text-base text-slate-400
                "
    >
      <button
        type="button"
        className={`
            relative flex items-center gap-2
            font-bold
            ${tabIndex === 0 && "text-primary-1 bg-white after:h-[3px]  after:content-['']"}
            after:w-full after:absolute after:bg-primary-1
            after:rounded-full after:-bottom-[1px] after:left-0
            hover:bg-green-50  cursor-pointer px-2 h-full
        `}
        onClick={(e) =>
          filterFacetingHandler(e, "status", undefined, "value", 0)
        }
      >
        All products
        <span className="ml-auto flex size-4 items-center justify-center font-mono text-sm bg-green-100 rounded-full p-3 text-primary-1">
          {table?.getRowCount()}
        </span>
      </button>
      <button
        type="button"
        className={`
            relative flex items-center gap-2 font-bold
            ${tabIndex === 1 && "text-primary-1 bg-white after:h-[3px]  after:content-['']"}
            after:w-full after:absolute after:bg-primary-1
            after:rounded-full after:-bottom-[1px] after:left-0
            hover:bg-green-50  cursor-pointer px-2 h-full
        `}
        onClick={(e) => filterFacetingHandler(e, "status", true, "value", 1)}
      >
        Live
        <span className="ml-auto flex size-4 items-center justify-center font-mono text-sm bg-green-100 rounded-full p-3 text-primary-1">
          {table?.getColumn("status")?.getFacetedUniqueValues().get(true)}
        </span>
      </button>
      <button
        type="button"
        className={`
            relative flex items-center gap-2
            font-bold
            ${tabIndex === 2 && "text-primary-1 bg-white after:h-[3px]  after:content-['']"}
            after:w-full after:absolute after:bg-primary-1
            after:rounded-full after:-bottom-[1px] after:left-0
            hover:bg-green-50  cursor-pointer px-2 h-full
        `}
        onClick={(e) => filterFacetingHandler(e, "status", false, "value", 2)}
      >
        Archive
        <span className="ml-auto flex size-4 items-center justify-center font-mono text-sm bg-green-100 rounded-full p-3 text-primary-1">
          {table?.getColumn("status")?.getFacetedUniqueValues().get(false)}
        </span>
      </button>
      <button
        type="button"
        className={`
            relative flex items-center gap-2 font-bold
            ${tabIndex === 3 && "text-primary-1 bg-white after:h-[3px]  after:content-['']"}
            after:w-full after:absolute after:bg-primary-1
            after:rounded-full after:-bottom-[1px] after:left-0
            hover:bg-green-50  cursor-pointer px-2 h-full
        `}
        onClick={(e) => filterFacetingHandler(e, "stock", 0, "range", 3)}
      >
        Out of Stock
        <span className="ml-auto flex size-4 items-center justify-center font-mono text-sm bg-green-100 rounded-full p-3 text-primary-1">
          {table?.getColumn("stock")?.getFacetedUniqueValues().get(0)}
        </span>
      </button>
      <button
        type="button"
        className={`
            relative flex items-center gap-2 font-bold
            ${tabIndex === 4 && "text-primary-1 bg-white after:h-[3px]  after:content-['']"}
            after:w-full after:absolute after:bg-primary-1
            after:rounded-full after:-bottom-[1px] after:left-0
            hover:bg-green-50  cursor-pointer px-2 h-full
        `}
        onClick={(e) => filterFacetingHandler(e, "stock", 5, "range", 4)}
      >
        Low Stock
        <span className="ml-auto flex size-4 items-center justify-center font-mono text-sm bg-green-100 rounded-full p-3 text-primary-1">
          {table?.getColumn("stock")?.getFacetedUniqueValues().get(4)}
        </span>
      </button>
    </div>
  );
}
