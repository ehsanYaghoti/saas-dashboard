import type { Table } from "@tanstack/react-table";
import type { JSX } from "react";

export type buttonsListType = {
  title: string;
  icon: JSX.Element;
  style?: string;
}[];

export type Products = {
  id: string;
  rank ?: number;
  title: string;
  totalBuyers: number;
  price: number;
  stock: number;
  rating: number;
  status: boolean;
};


export interface TableProps<TData> {
  table: Table<TData>;
}
