import { SidebarTrigger } from "../../ui/sidebar";

export function Logo({collapsed} : { collapsed : boolean }) {
  return (
    <article  className=" group" >
      <i className={`text-white  bg-gradient-to-br from-primary-1/50 to-primary-1 rounded-md !w-6 h-6 relative shadow-md flex ${collapsed ? 'group-hover:hidden' : "mr-2"}  `}>
        <hr className=" border-b border-white w-4 h-0 -rotate-45 bottom-[10px] right-[4px] absolute"></hr>
        <hr className=" border-b border-white w-3 h-0 -rotate-45 bottom-[8px] right-[3px] absolute"></hr>
        <hr className=" border-b border-white w-1 h-0 -rotate-45 bottom-[6px] right-[4px] absolute"></hr>
      </i>
      <SidebarTrigger className={`hidden ${collapsed && 'group-hover:flex' } `}  />
    </article>
  );
}
