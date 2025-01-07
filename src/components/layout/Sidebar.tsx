"use client";
import Logo from "@/assets/images/Table-Logo.png";
import LongLogo from "@/assets/images/logo-mkt.png";
import { sidebarList } from "@/config/configSidebar";
import { cn } from "@/helper/function";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import NavbarLinkComponent from "../SidebarComponent/NavbarLinkComponent";
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const { pathArray } = useGetPathComponent();
  const handleToggleArrow = (): void => {
    setIsOpen((prevState) => !prevState);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsOpen(true); // Close sidebar
      } else {
        setIsOpen(false); // Open sidebar
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={cn(
        "hidden md:block relative shadow-md w-fit z-[50]",
        isOpen ? "w-[64px]" : "w-[256px]"
      )}
    >
      <div
        className={cn(
          `border-r dark:border-black text-black dark:text-white
                    fixed h-screen dark:bg-black bg-white transition-all 
                    duration-300 z-[49]`,
          isOpen ? "w-16" : "w-64"
        )}
      >
        <div
          className={cn(
            "absolute rounded-full p-1 left-[256px] transition-all duration-300 dark:bg-white bg-gray-200 z-50 top-[50px]",
            isOpen ? "left-[50px]" : "left-[242px]"
          )}
          role="button"
          onClick={handleToggleArrow}
        >
          <FaAngleRight
            className={cn(
              !isOpen && "rotate-180",
              "duration-400 transition-all"
            )}
            size={20}
          />
        </div>
        {/* Sidebar content */}
        <div className="flex flex-col items-center">
          <div className="h-[50px] mb-[30px] flex items-center">
            {isOpen ? (
              <Image
                src={Logo}
                alt="Logo"
                className="mt-4 border rounded-full size-[40px]"
              />
            ) : (
              <Image src={LongLogo} alt="Logo" className="mt-4  px-3" />
            )}
          </div>
          <div className="w-full  scrollbar-none h-[calc(100vh-80px)]">
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
                  isOpen={!isOpen}
                  isDisable={sidebar.isDisable}
                />
              );
            })}
          </div>
          {/* Add more sidebar items here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
