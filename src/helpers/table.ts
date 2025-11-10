import type { Table } from "@tanstack/react-table";
// import type { MouseEvent } from "react";

export function filterSelectHandler<TData>(
  //   e: MouseEvent<HTMLButtonElement>,
  table: Table<TData>,
//   column: Column<TData, TValue>,
 columnName : string,
  options: {
    valueProp: number | string | boolean | undefined;
    type: "range" | "value";
  }
) {

  table.resetColumnFilters();

  table?.getColumn(columnName)?.setFilterValue(undefined);

  if (options.type === "value") {
    table?.getColumn(columnName)?.setFilterValue(options.valueProp);
  } else if (options.type === "range") {
    table?.getColumn(columnName)?.setFilterValue([1, options.valueProp]);
  }
}
