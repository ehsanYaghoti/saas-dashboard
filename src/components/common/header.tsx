import { ModeToggle } from "../theme/mode-toggle";



export default function Header() {

    return (
        <header className="w-full h-16 bg-[var(--background)] dark:bg-[var(--background)] flex items-center justify-between px-6 ">
            <div className="flex items-center gap-3" >
                {/* <SidebarTrigger /> */}
                <ModeToggle />

            </div>
        </header>
    )

}
