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
          "mt-4 w-[85%] h-[30px] overflow-hidden",
          classWrapper,
          isOpen && "relative"
        )}
      >
        <Link
          href={`${path}/${link}`}
          className={cn(
            "text-black dark:text-white flex font-googleSans justify-between hover:text-gray-300",
            classLink,
            !isOpen && "justify-center"
          )}
        >
          <Icon size={20} />{" "}
          {isOpen && <p className="w-[calc(100%-36px)]">{title}</p>}
        </Link>
        {isOpen && <div className="absolute "></div>}
      </div>
    </>
  );
};

export default NavbarLinkComponent;
