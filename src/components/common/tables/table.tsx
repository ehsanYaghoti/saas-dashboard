import { columns, type Products } from "./columns";
import { DataTable } from "./data-table";

export default function Table() {
  const data : Products[] = [
    {
      id: "728ed52f",
      title : "Givench Sweater",
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
