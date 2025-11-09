import { Input } from "@/components/ui/input";

import { SearchIcon } from "lucide-react";

export default function SearchInput({ sidebar }: { sidebar: boolean }) {
  return (
    <label
      className={`${
        sidebar ? "flex md:hidden max-w-full py-2" : "hidden md:flex max-w-[500px]"
      }
       flex-grow items-center gap-3  `}
    >
      <SearchIcon className=" w-5 " />
      <Input
        id="search"
        name="search"
        placeholder="Search anythig here..."
        className="border-none shadow-none focus-visible:shadow-md focus-visible:ring-[1px] transition-all duration-500"
      />
    </label>
  );
}
