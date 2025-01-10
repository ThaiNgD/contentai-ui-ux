"use client";
import { cn } from "@/helper/utils";
import hotkeys from "hotkeys-js";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
const HeaderSearchBar = () => {
  const [isFocus, setIsFocus] = useState(false);
  const onClickInput = (): void => {
    setIsFocus((prev) => !prev);
  };
  useEffect(() => {
    const inputSearch = document.getElementById("input-search");
    hotkeys("ctrl+k", function (event) {
      // Prevent the default refresh event under WINDOWS system
      event.preventDefault();
      inputSearch?.focus();
    });
  });

  return (
    <div className="hidden lg:flex relative rounded-2xl w-[400px] h-[35px] bg-gray-200 ">
      <input
        id="input-search"
        type="text"
        placeholder="Search"
        className="h-full px-[40px] bg-gray-100 focus:bg-white w-full rounded-2xl focus:!shadow-inner !shadow-blue-600 !border-none focus:!border-none"
        onFocus={onClickInput}
        onBlur={onClickInput}
      />
      <IoSearchOutline size={20} className="absolute top-[7.5px] left-[10px]" />
      <div
        className={cn(
          "bg-white text-[12px] absolute border right-2 top-[7px] px-2 rounded-lg",
          isFocus && "hidden"
        )}
      >
        ctrl + k
      </div>
    </div>
  );
};

export default HeaderSearchBar;
