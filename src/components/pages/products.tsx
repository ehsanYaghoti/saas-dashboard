import Header from "../common/header/header";
import DashboardLayout from "../layouts/dashbaordLayout";

export default function Products() {
  return (
    <DashboardLayout>
      <div className=" w-full overflow-hidden">
        <Header title="Products" buttons={["Filter" , "Share" , "Add Product"]} />
        <main className="w-full h-full bg-[#FAFCFE] flex flex-col gap-8 shrink grow basis-auto  dark:bg-gray-900 p-10 ">
            <span>products</span>
        </main>
      </div>
    </DashboardLayout>
  );
}
