"use client";

import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdCreateNewFolder, MdOutlineKeyboardBackspace } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const router = useRouter();
  const { locale } = useGetPathComponent();
  const handleClickBack = (): void => {
    router.push(`/${locale}/dashboard`);
  };

  return (
    <div className="2xl:px-[175px] px-[15px] py-[35px] h-[150px] flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <span
          role="button"
          className="md:text-sm text-xs hover:underline hover:opacity-100 flex gap-2 opacity-70"
          onClick={handleClickBack}
        >
          <MdOutlineKeyboardBackspace size={16} />
          Trở về
        </span>
        <h1 className="md:text-3xl text-xl font-extrabold">AI Writer</h1>
        <span className="text-sm opacity-70">
          Text Generator & AI Copywriting Assistant
        </span>
      </div>
      <div className="flex flex-col h-full justify-center">
        <div className="flex gap-4">
          <Button className="bg-white md:block hidden text-black rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white">
            + Tài liệu của tôi
          </Button>
          <Button className="bg-white my-document md:hidden text-black rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white">
            <FaRegFolderOpen size={20} />
          </Button>
          <Tooltip anchorSelect=".my-document" place={"top"}>
            + Tài liệu của tôi
          </Tooltip>
          <Button className="bg-blue-500 md:block hidden font-bold rounded-2xl text-white hover:shadow-blue-400 hover:shadow-md hover:-translate-y-0.5">
            + Tạo Template
          </Button>
          <Button className="bg-white create-template md:hidden text-black rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white">
            <MdCreateNewFolder size={20} />
          </Button>
          <Tooltip anchorSelect=".create-template" place={"top"}>
            + Tạo Template
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Header;
