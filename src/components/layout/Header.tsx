"use client";

import { AiOutlineSetting } from "react-icons/ai";
import ChangeLanguage from "../ChangeLanguage";
import HeaderAccountDropdownInfo from "../HeaderComponent/HeaderAccountDropdownInfo";
import HeaderChangeTheme from "../HeaderComponent/HeaderChangeTheme";
import HeaderNotification from "../HeaderComponent/HeaderNotification";
import HeaderSearchBar from "../HeaderComponent/HeaderSearchBar";
const Header = (): JSX.Element => {
  return (
    <header className="h-[65px] duration-300 dark:border-black border-b">
      <div className="shadow-sm h-full">
        <div className="relative h-full flex w-full items-center duration-300 2xl:px-[175px] px-[15px] py-2.5 dark:bg-black">
          <HeaderSearchBar />
          <div className="flex items-center duration-300 justify-end gap-[5px] space-x-2.5 dark:text-[#d0d2d6]  sm:flex-1 lg:space-x-2 ltr:ml-auto ltr:sm:ml-0 rtl:mr-auto rtl:space-x-reverse sm:rtl:mr-0">
            <HeaderChangeTheme />
            <HeaderNotification />
            <AiOutlineSetting size={22} role="button" />
            <ChangeLanguage />
            <div className="border-l-2 h-[30px]"></div>
            <HeaderAccountDropdownInfo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
