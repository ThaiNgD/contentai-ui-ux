/* eslint-disable @typescript-eslint/no-explicit-any */
import languageImage from "@/assets/flags";
import configLanguage from "@/config/configLanguage";
import { Menu } from "@mantine/core";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const ChangeLanguage = (): JSX.Element => {
  const { lang } = useTranslation();
  const keyLang = lang.toLocaleUpperCase();

  return (
    <div className="dropdown shrink-0 text-sm">
      <Menu shadow="md">
        <Menu.Target>
          <Image
            className="size-[33px] cursor-pointer rounded-full bg-[#E3E8EF] object-cover p-[5px]"
            // src={`${languageImage[keyLang]}`}
            src={""}
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
                      keyLang === keyCode
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-primary/10"
                    }`}
                    onClick={(): void => {
                      setLanguage(item.code);
                    }}
                  >
                    <Image
                      src={`${languageImage[keyCode]}`}
                      alt="flag"
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    <span className="text-sm ltr:ml-3 rtl:mr-3">
                      {item.name}
                    </span>
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
