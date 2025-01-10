"use client";

import { sidebarList } from "@/config/configSidebar";
import { cn } from "@/helper/function";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import ChangeLanguage from "../ChangeLanguage";
import HeaderAccountDropdownInfo from "../HeaderComponent/HeaderAccountDropdownInfo";
import HeaderChangeTheme from "../HeaderComponent/HeaderChangeTheme";
import HeaderTokenLeft from "../HeaderComponent/HeaderTokenLeft";
import ResponsiveHeaderRoute from "../HeaderComponent/ResponsiveHeaderRoute";
import NavbarLinkComponent from "../SidebarComponent/NavbarLinkComponent";

const HeaderSearchBar = dynamic(
  () => import("../HeaderComponent/HeaderSearchBar"),
  {
    ssr: false,
  }
);

const Header = (): JSX.Element => {
  const router = useRouter();
  const { locale, pathArray } = useGetPathComponent();
  const [isOpenDiv, setIsOpenDiv] = useState(false);
  const handleOnclick = (): void => {
    setIsOpenDiv(!isOpenDiv);
  };

  return (
    <>
      <header
        className="h-[65px] relative shadow-xl duration-300 dark:border-black border-b"
        suppressHydrationWarning
      >
        <div className="shadow-sm h-full">
          <div className="relative justify-between h-full flex w-full items-center duration-300 2xl:px-[175px] px-[15px] py-2.5 dark:bg-black">
            <div>
              <HeaderSearchBar />
              <ResponsiveHeaderRoute onClickDiv={handleOnclick} />
            </div>
            <div className="flex items-center duration-300 justify-end gap-[5px] space-x-2.5 dark:text-[#d0d2d6]  sm:flex-1 lg:space-x-2 ltr:ml-auto ltr:sm:ml-0 rtl:mr-auto rtl:space-x-reverse sm:rtl:mr-0">
              <HeaderTokenLeft />
              <HeaderChangeTheme />
              {/* <HeaderNotification /> */}
              <AiOutlineSetting
                size={22}
                role="button"
                className="hidden md:block"
                onClick={(): void => {
                  router.push(`/${locale}/setting-ai`);
                }}
              />
              <ChangeLanguage />
              <div className="border-l-2 h-[30px]"></div>
              <HeaderAccountDropdownInfo />
            </div>
          </div>
        </div>
        <div
          className={cn(
            `absolute duration-200 rounded-b-md transition-all w-full h-0 top-100 bg-white border-b overflow-y-auto `,
            isOpenDiv && "h-[60vh] shadow-lg pb-2 z-[100]"
          )}
        >
          {sidebarList.map((sidebar, index) => {
            return (
              <NavbarLinkComponent
                classWrapper={
                  pathArray?.includes(sidebar.link)
                    ? "bg-gray-100 border-blue-500 border-l-[3px]"
                    : ""
                }
                classLink={
                  pathArray?.includes(sidebar.link) ? "text-blue-500" : ""
                }
                icon={sidebar.icon}
                title={sidebar.title}
                link={sidebar.link}
                key={index}
                isOpen={isOpenDiv}
                isDisable={sidebar.isDisable}
              />
            );
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
