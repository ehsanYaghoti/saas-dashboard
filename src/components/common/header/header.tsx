import HeaderDynamic from "./headerDynamic";
import HeaderStatic from "./headerStatic";



export default function Header() {

    return (
        <header className="w-full h-fit divide-y bg-[var(--background)] border-b border-b-gray-200 text-slate-500 dark:text-white dark:bg-[var(--background)] flex flex-col items-center justify-between  ">
            <HeaderStatic />
            <HeaderDynamic />
        </header>
    )

}
