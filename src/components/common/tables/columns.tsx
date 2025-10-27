import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import type { Products } from "@/types";
import { ratingSectionGenerator, statusTokens } from "@/utils/style";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowDownWideNarrow } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Products>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "rank",
    header: "Rank",
    // cell : ({row}) => {
    //     return (<div className="w-1 flex items-center justify-center" >{row.getValue('rank')}</div>)
    // }
  },
  {
    accessorKey: "title",
    header: "Product",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 w-[75px]">
          <img
            src={undefined}
            alt="productImage"
            width={50}
            height={50}
            className="border rounded-sm"
          />
          <div className=" flex flex-col items-start gap-1 ">
            <span className="">{row.getValue("title")}</span>
            <p className="">IDS: #{row.original.id}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "totalBuyers",
    header: "Total Buyers",
    cell: ({ row }) => {
      return (
        <div className=" text-center font-bold ">
          {Number(row.getValue("totalBuyers")).toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowDownWideNarrow className="ml-2 h-4 w-4 " />
          Price
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className=" text-center font-bold ">{formatted}</div>;
    },
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => {
      return (
        <div className=" text-center font-bold ">{row.getValue("stock")}</div>
      );
    },
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => {
      const rate = row.getValue("rating") as number;

      return (
        <div className=" flex flex-col items-start gap-2 w-[50px]">
          <p className="font-bold text-slate-400 w-fit text-xs ">
            Status :{" "}
            <span className="font-extrabold text-slate-600">
              {statusTokens(rate).title}
            </span>
          </p>
          <div className="flex items-center gap-1">
            {ratingSectionGenerator(rate)}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "status",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="flex items-center justify-center gap-2">
          <Switch
            className="data-[state=checked]:bg-primary-1"
            checked={product.status}
          />
          <span>Active</span>
        </div>
      );
    },
  },
];
