import {
  type ColumnDef,
  flexRender,
  type VisibilityState,
  getCoreRowModel,
  type ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

import { useState } from "react";
import { Search } from "lucide-react";
import { DataTablePagination } from "../table/pagination";
import { DataTableViewOptions } from "../table/columnToggle";

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
    <div className="flex flex-col">
      <div className="flex items-center gap-2 bg-[#F5F7F9] rounded-t-md  border border-b-0 p-4">
        <span className=" w-6 h-6 rounded-full bg-[#3CBEA9] border-[rgba(0,0,0,0.75)] border-1 shadow-[2px_0px_0px_0px_rgba(0,0,0,0.75)] "></span>
        <p className="text-base text-slate-500 font-base ">
          This dataTable show all of your product
        </p>
      </div>
      <div className=" bg-white flex items-center justify-between border px-4  overflow-visible h-16 z-10 ">
        <div
          className="h-full flex  items-center gap-6
            font-[600] text-base text-slate-400
        "
        >
          <span
            className="relative font-bold text-primary-1
            after:h-[3px]  after:content-[''] after:w-[110%] after:absolute after:bg-primary-1
            after:rounded-full after:-bottom-[18px] after:-left-[2px]
            "
          >
            All products
          </span>
          <span className="relative">Live</span>
          <span className="relative">Archive</span>
          <span className="relative">Out of Stock</span>
          <span className="relative">Low Stock</span>
        </div>

        <div className="flex items-center justify-center ">
            <DataTableViewOptions table={table} />
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="mx-3">
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu> */}
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
      <div className="overflow-hidden ">
        <Table >
          <TableHeader className=""  >
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="" >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className=" text-slate-500 font-semibold text-center !border-r-0 ">
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
                  className=" bg-white"
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
              <TableRow className=" bg-white">
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
