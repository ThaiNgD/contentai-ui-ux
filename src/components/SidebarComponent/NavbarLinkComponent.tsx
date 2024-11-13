"use client";

import { cn } from "@/helper/function";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

export interface NavbarLinkComponentProps {
  link: string;
  classLink?: string;
  classWrapper?: string;
  icon: IconType;
  title?: string;
  isOpen?: boolean;
}

const NavbarLinkComponent = ({
  link,
  classLink,
  classWrapper,
  icon,
  title,
  isOpen,
}: NavbarLinkComponentProps) => {
  const Icon = icon;
  const pathName = usePathname();
  const path = pathName?.split("/").slice(0, 2).join("/");
  return (
    <>
      <div
        className={cn(
          "mt-1 w-full hover:bg-gray-200 flex items-center justify-center h-[40px] overflow-hidden",
          classWrapper,
          isOpen && "relative pl-[30px] justify-start"
        )}
      >
        <Link
          href={`${path}/${link}`}
          className={cn(
            "text-black dark:text-white flex font-googleSans justify-between hover:text-blue-500 ",
            classLink,
            !isOpen && "justify-center"
          )}
        >
          <Icon size={20} />{" "}
          {isOpen && (
            <p className="whitespace-nowrap font-bold w-[calc(100%-36px)]">
              {title}
            </p>
          )}
        </Link>
        {isOpen && <div className="absolute "></div>}
      </div>
    </>
  );
};

export default NavbarLinkComponent;
