import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filterSelectHandler } from "@/helpers/table";
import { lowStockThreshold } from "@/constants/data/table/products";
import type { TableProps } from "@/types";

type Values = {
  [key: string]: {
    column: string;
    options: {
      valueProp: undefined | string | boolean | number;
      type: "value" | "range";
    };
  };
};

const values: Values = {
  all: {
    column: "status",
    options: {
      valueProp: undefined,
      type: "value",
    },
  },
  live: {
    column: "status",
    options: {
      valueProp: true,
      type: "value",
    },
  },
  archive: {
    column: "status",
    options: {
      valueProp: false,
      type: "value",
    },
  },
  out: {
    column: "stock",
    options: {
      valueProp: 0,
      type: "range",
    },
  },
  low: {
    column: "stock",
    options: {
      valueProp: lowStockThreshold,
      type: "range",
    },
  },
};

export default function FilterSelect<TData>({ table }: TableProps<TData>) {
  return (
    <Select
      defaultValue="all"
      onValueChange={(value: string) =>
        filterSelectHandler(table, values[value].column, values[value].options)
      }
    >
      <SelectTrigger className="w-[180px] flex lg:hidden ">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>
          <SelectItem value="all">All Products</SelectItem>
          <SelectItem value="live">Live</SelectItem>
          <SelectItem value="archive">Archive</SelectItem>
          <SelectItem value="out">Out of Stock</SelectItem>
          <SelectItem value="low">Low Stock</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
