import Header from "../common/header/header";
import Table from "../common/tables/table";
import DashboardLayout from "../layouts/dashbaordLayout";

export default function Products() {
  return (
    <DashboardLayout>
      <div className=" w-full overflow-hidden">
        <Header title="Products" buttons={["Filter" , "Share" , "Add Product"]} />
        <main className="w-full h-full bg-[#FAFCFE] flex flex-col gap-8 shrink grow basis-auto  dark:bg-gray-900 p-10 ">
            <Table />
        </main>
      </div>
    </DashboardLayout>
  );
}
