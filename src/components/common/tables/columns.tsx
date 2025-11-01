import { Switch } from "@/components/ui/switch";
import type { Products } from "@/types";
import { ratingSectionGenerator, statusTokens } from "@/utils/style";
import { type ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import img from "@/assets/products/product.jpg";
import SortBtnHeader from "./data-table-column-sort-btn";

export const columns: ColumnDef<Products>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="text-center pl-2">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="data-[state=checked]:bg-primary-1 data-[state=checked]:border-primary-1 "
        />
      </div>
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="data-[state=checked]:bg-primary-1 data-[state=checked]:border-primary-1"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "rank",
    header: "Rank",
    cell: ({ row }) => {
      return (
        <div className="text-center text-slate-700 font-bold">
          {row.getValue("rank")}
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return <SortBtnHeader title="Product" column={column} />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 min-w-[75px] px-2">
          <img
            src={img}
            alt="productImage"
            width={50}
            height={50}
            className="border rounded-sm"
          />
          <div className=" flex flex-col items-start gap-1  ">
            <span className="font-[600] text-slate-700">
              {row.getValue("title")}
            </span>
            <p className="text-slate-400 font-[500]">IDS: #{row.original.id}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "totalBuyers",
    header: ({ column }) => {
      return <SortBtnHeader title="Total Buyers" column={column} />;
    },
    cell: ({ row }) => {
      return (
        <div className=" text-center font-bold text-slate-700 w-fit px-2 ">
          {Number(row.getValue("totalBuyers")).toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return <SortBtnHeader title="Price" column={column} />;
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return (
        <div className=" text-center font-bold text-slate-700 w-fit px-2">
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return <SortBtnHeader title="Stock" column={column} />;
    },
    cell: ({ row }) => {
      return (
        <div className=" text-center font-bold text-slate-700 w-fit px-2">
          {row.getValue("stock")}
        </div>
      );
    },
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return <SortBtnHeader title="Rating" column={column} />;
    },
    cell: ({ row }) => {
      const rate = row.getValue("rating") as number;

      return (
        <div className=" flex flex-col items-start gap-2 min-w-[50px] w-fit px-2">
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
    header: () => <div className="text-left w-full pl-1 ">Status</div>,
    meta: {
      filterVariant: "select",
    },
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="flex items-center justify-start gap-2">
          <Switch
            className="data-[state=checked]:bg-primary-1"
            defaultChecked={product.status}
          />
          <span className=" font-semibold text-slate-400">Active</span>
        </div>
      );
    },
  },
];
