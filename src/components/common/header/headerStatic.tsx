import Logo from "./logo";
import SearchInput from "./search";
import ToolbarAndTheme from "./toolbarAndTheme";
import UserMenu from "./userMenu";

export default function HeaderStatic() {
  return (
    <div className="w-full h-auto px-6 py-3 flex items-center justify-between  ">
      <Logo />
      <SearchInput sidebar={false} />
      <div className=" flex items-center divide-x ">
        <ToolbarAndTheme sidebar={false} />
        <UserMenu sidebar={false} />
      </div>
    </div>
  );
}
