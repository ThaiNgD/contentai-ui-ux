/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import languageImage from "@/assets/flags";
import configLanguage from "@/config/configLanguage";
import { Menu } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";
import { useMemo } from "react";

const ChangeLanguage = (): JSX.Element => {
  const router = useRouter();
  const pathName = usePathname();
  const pathObjs = useMemo(() => {
    const arrayPath = pathName?.split("/");
    return {
      locale: arrayPath?.[1],
      path: arrayPath?.slice(2).join("/"),
    };
  }, [pathName]);
  const handleLanguageChange = (locale: string) => {
    console.log(pathName);
    router.push(`/${locale}/${pathObjs.path}`);
  };
  return (
    <div className="dropdown shrink-0 text-sm">
      <Menu classNames={{ dropdown: "border" }} shadow="md">
        <Menu.Target>
          <Image
            width={33}
            height={33}
            className="size-[33px] cursor-pointer rounded-full bg-[#E3E8EF] object-cover p-[5px]"
            src={
              languageImage[
                pathObjs.locale?.toUpperCase() as keyof typeof languageImage
              ]
            }
            alt="flag"
          />
        </Menu.Target>

        <Menu.Dropdown>
          <ul className="dropdown_menu grid w-[280px] grid-cols-2 gap-2 p-1 font-semibold text-dark">
            {configLanguage.languageList.map((item: any) => {
              const keyCode =
                item.code.toUpperCase() as keyof typeof languageImage;
              return (
                <Menu.Item
                  className="!bg-transparent !p-0"
                  component="li"
                  key={item.code}
                >
                  <button
                    type="button"
                    className={`flex w-full select-none items-center rounded-lg p-2 hover:text-primary ${
                      pathObjs.locale === item.code && "bg-blue-500 text-white"
                    }`}
                    onClick={(): void => {
                      handleLanguageChange(item.code);
                    }}
                  >
                    <Image
                      src={languageImage[keyCode]}
                      alt="flag"
                      width={20}
                      height={20}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    <span className="text-sm ml-3">{item.name}</span>
                  </button>
                </Menu.Item>
              );
            })}
          </ul>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default ChangeLanguage;
