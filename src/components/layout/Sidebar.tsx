"use client";
import Logo from "@/assets/images/Table-Logo.png";
import LongLogo from "@/assets/images/livestream.png";
import { sidebarList } from "@/config/configSidebar";
import { cn } from "@/helper/function";
import Image from "next/image";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import NavbarLinkComponent from "../SidebarComponent/NavbarLinkComponent";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleArrow = (): void => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className={cn("relative w-fit", isOpen ? "w-[64px]" : "w-[256px]")}>
      <div
        className={cn(
          "absolute rounded-full p-1 left-[256px] transition-all duration-300 bg-gray-200 z-50 top-[10%]",
          isOpen ? "left-[56px]" : "left-[248px]"
        )}
        role="button"
      >
        <FaAngleRight
          className={cn(!isOpen && "rotate-180", "duration-400 transition-all")}
          onClick={handleToggleArrow}
          size={20}
        />
      </div>
      <div
        // style={{ width: "inherit" }}
        className={cn(
          `bg-gray-800 text-white 
                    fixed h-screen transition-all 
                    duration-300 z-10`,
          isOpen ? "w-16" : "w-64 overflow-hidden"
        )}
      >
        {/* Sidebar content */}
        <div className="flex flex-col items-center">
          <div className="h-[80px] flex items-center">
            {isOpen ? (
              <Image src={Logo} alt="Logo" className="mt-4 size-[40px]" />
            ) : (
              <Image src={LongLogo} alt="Logo" className="mt-4 px-3" />
            )}
          </div>

          {sidebarList.map((sidebar, index) => {
            return (
              <NavbarLinkComponent
                icon={sidebar.icon}
                title={sidebar.title}
                link={sidebar.link}
                key={index}
                isOpen={!isOpen}
              />
            );
          })}
          {/* Add more sidebar items here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
