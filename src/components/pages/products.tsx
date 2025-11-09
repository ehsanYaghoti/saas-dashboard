import Header from "../common/header/header";
import Table from "../common/tables/table";
import DashboardLayout from "../layouts/dashbaordLayout";

export default function Products() {
  return (
    <DashboardLayout>
      <div className=" w-full overflow-hidden">
        <Header title="Products" buttons={["Filter" , "Share" , "Add Product"]} productsCount={10932} />
        <main className="w-full h-full overflow-hidden  bg-[#FAFCFE] flex flex-col gap-8 shrink grow basis-auto  dark:bg-gray-900 p-2 md:p-10 ">
            <Table />
        </main>
      </div>
    </DashboardLayout>
  );
}
