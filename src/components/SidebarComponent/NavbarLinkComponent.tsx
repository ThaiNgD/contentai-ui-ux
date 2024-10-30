"use client";

import { cn } from "@/helper/function";
import Link from "next/link";
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
          href={link}
          className={cn(
            "text-white flex justify-between hover:text-gray-300",
            classLink,
            !isOpen && "justify-center"
          )}
        >
          <Icon size={24} />{" "}
          {isOpen && <p className="w-[calc(100%-36px)]">{title}</p>}
        </Link>
        {isOpen && <div className="absolute "></div>}
      </div>
    </>
  );
};

export default NavbarLinkComponent;
