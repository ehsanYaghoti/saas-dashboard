import type { Products } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function Table() {
  const data : Products[] = [
    {
      id: "728ed52f",
      rank : 1,
      title : "Givench Sweater 1",
      totalBuyers : 12990,
      price : 1235.82,
      stock : 231,
      rating : 1,
      status : false
    },
    {
      id: "728ed52g",
      rank : 2,
      title : "Givench Sweater 2",
      totalBuyers : 12990,
      price : 1234.82,
      stock : 231,
      rating : 3,
      status : true
    },
    {
      id: "728ed52h",
      rank : 3,
      title : "Givench Sweater 3",
      totalBuyers : 12990,
      price : 1235.82,
      stock : 231,
      rating : 5,
      status : false
    },
    {
      id: "728ed52h",
      rank : 4,
      title : "Givench Sweater 3",
      totalBuyers : 12990,
      price : 1234.82,
      stock : 231,
      rating : 2,
      status : false
    },
    {
      id: "728ed52h",
      rank : 5,
      title : "Givench Sweater 3",
      totalBuyers : 12990,
      price : 1237.82,
      stock : 231,
      rating : 5,
      status : false
    },
    {
      id: "728ed52h",
      rank : 6,
      title : "Givench Sweater 3",
      totalBuyers : 12990,
      price : 1234.82,
      stock : 231,
      rating : 5,
      status : false
    },
    {
      id: "728ed52h",
      rank : 7,
      title : "Givench Sweater 3",
      totalBuyers : 12990,
      price : 1238.82,
      stock : 231,
      rating : 4,
      status : false
    },
    {
      id: "728ed52h",
      rank : 8,
      title : "Givench Sweater 3",
      totalBuyers : 12990,
      price : 1234.82,
      stock : 231,
      rating : 5,
      status : true
    },
    {
      id: "728ed52h",
      rank : 9,
      title : "Givench Sweater 3",
      totalBuyers : 12990,
      price : 1231.82,
      stock : 231,
      rating : 5,
      status : true
    },
    {
      id: "728ed52c",
      rank : 10,
      title : "Givench Sweater 9",
      totalBuyers : 12990,
      price : 1231.82,
      stock : 4,
      rating : 3,
      status : false
    },
    {
      id: "728ed52h",
      rank : 11,
      title : "Givench Sweater 3",
      totalBuyers : 12990,
      price : 1234.82,
      stock : 0,
      rating : 5,
      status : false
    },
    {
      id: "728ed52d",
      rank : 12,
      title : "Givench Sweater 5",
      totalBuyers : 12990,
      price : 1234.82,
      stock : 0,
      rating : 4,
      status : false
    },
    {
      id: "728ed52h",
      rank : 13,
      title : "Givench Sweater 3",
      totalBuyers : 12990,
      price : 1234.82,
      stock : 231,
      rating : 5,
      status : false
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
