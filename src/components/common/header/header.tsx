import HeaderDynamic from "./headerDynamic";
import HeaderStatic from "./headerStatic";

export default function Header({title , buttons , productsCount} : {title : string , buttons ?: string[] , productsCount ?: number}) {

    return (
        <header className=" sticky w-full h-fit divide-y dark:divide-white bg-[var(--background)] border-b border-b-gray-200 text-slate-500 dark:text-white dark:bg-[var(--background)] flex flex-col items-center justify-between  ">
            <HeaderStatic />
            <HeaderDynamic title={title} buttons={buttons} productsCount={productsCount} />
        </header>
    )

}
