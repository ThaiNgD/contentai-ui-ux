"use client";

import { cn } from "@/helper/function";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons";

export interface NavbarLinkComponentProps {
  link: string;
  classLink?: string;
  classWrapper?: string;
  icon: IconType;
  title?: string;
  isOpen?: boolean;
  isDisable?: boolean;
}

const NavbarLinkComponent = ({
  link,
  classLink,
  classWrapper,
  icon,
  title,
  isOpen,
  isDisable,
}: NavbarLinkComponentProps) => {
  const Icon = icon;
  const [visible, setVisible] = useState(false);
  const pathName = usePathname();
  const path = pathName?.split("/").slice(0, 2).join("/");
  return (
    <>
      <div
        className={cn(
          "mt-1 w-full inset-0 group hover:bg-gray-200 relative flex items-center justify-center h-[40px]",
          classWrapper,
          isOpen && "relative pl-[30px] justify-start",
          isDisable && "!pointer-events-none !opacity-60"
        )}
        onMouseEnter={(): void => {
          setVisible(true);
        }}
        onMouseLeave={(): void => {
          setVisible(false);
        }}
        role="button"
      >
        <Link
          href={`${path}/${link}`}
          className={cn(
            "text-black w-full h-full items-center dark:text-white flex font-googleSans justify-between group-hover:text-blue-500 ",
            classLink,
            !isOpen && "justify-center",
            isDisable && "!pointer-events-none !opacity-50"
          )}
        >
          <Icon size={20} />{" "}
          {isOpen && (
            <p className=" whitespace-nowrap font-bold w-[calc(100%-36px)]">
              {title}
            </p>
          )}
        </Link>
        {!isOpen && visible && (
          <div className="absolute left-[75px] text-sm whitespace-nowrap w-fit flex items-center justify-center p-2 min-w-[125px] h-[40px] rounded-lg dark:bg-white bg-white shadow-md z-[9999] font-bold ">
            {title}
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarLinkComponent;
