import { productsTableData } from "@/constants/data/table/products";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function Table() {

  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={productsTableData} />
    </div>
  );
}
