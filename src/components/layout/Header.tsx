"use client";

import ChangeLanguage from "../ChangeLanguage";
import HeaderAccountDropdownInfo from "../HeaderComponent/HeaderAccountDropdownInfo";
import HeaderChangeTheme from "../HeaderComponent/HeaderChangeTheme";
import HeaderNotification from "../HeaderComponent/HeaderNotification";
import HeaderSearchBar from "../HeaderComponent/HeaderSearchBar";

const Header = (): JSX.Element => {
  // const { t } = useTranslation();
  return (
    <header className="h-[80px] border-b">
      <div className="shadow-sm h-full">
        <div className="relative h-full flex w-full items-center bg-white px-[175px] py-2.5 dark:bg-black">
          <HeaderSearchBar />
          <div className="flex items-center justify-end gap-[5px] space-x-2.5 dark:text-[#d0d2d6] sm:flex-1 lg:space-x-2 ltr:ml-auto ltr:sm:ml-0 rtl:mr-auto rtl:space-x-reverse sm:rtl:mr-0">
            <HeaderChangeTheme />
            <HeaderNotification />
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
