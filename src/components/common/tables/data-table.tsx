import {
  type ColumnDef,
  flexRender,
  type VisibilityState,
  getCoreRowModel,
  type ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  type SortingState,
  useReactTable,
//   type Updater,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";
import { DataTablePagination } from "./data-table-pagination";
import DataTableToolbar from "./data-table-toolbar";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues : getFacetedMinMaxValues(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });



  return (
    <div className="flex flex-col dark:text-white">

      <div className="flex items-center gap-2 bg-[#F5F7F9] p-4 rounded-t-md  border border-b-0 text-slate-500 dark:text-dark-text dark:border-white  dark:bg-dark-2 ">
        <span className=" w-6 h-6 rounded-full shrink-0 bg-[#3CBEA9] border-[rgba(0,0,0,0.75)] border-1 shadow-[2px_0px_0px_0px_rgba(0,0,0,0.75)] "></span>
        <p className=" text-sm md:text-base font-base ">
          This dataTable show all of your product
        </p>
      </div>

      <DataTableToolbar table={table} />

      <div className="overflow-hidden">
        <Table className="" >
          <TableHeader className=" bg-primary-5  dark:bg-dark-2">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className=" ">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className=" text-slate-500 dark:text-dark-text     font-semibold text-center !border-r-0 "
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className=" bg-white dark:bg-dark-1 hover:dark:bg-dark-2 dark:text-white text-slate-700"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className=" text-center">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className=" bg-white dark:bg-dark-1 dark:text-dark-text ">
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
