"use client";

import ModalNewFolder from "@/components/Modal/ModalNewFolder";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaFolderPlus } from "react-icons/fa6";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiFileAddFill } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  const [isShowModalAddFolder, setIsShowModalAddFolder] = useState(false);
  const handleClickAddNewFolder = (): void => {
    setIsShowModalAddFolder(true);
  };
  const router = useRouter();
  const { locale } = useGetPathComponent();
  const handleClickBack = (): void => {
    router.push(`/${locale}/content-management`);
  };
  return (
    <div className="2xl:px-[175px] px-[15px] py-[35px] h-[150px] flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <span
          role="button"
          onClick={handleClickBack}
          className="text-xs md:text-sm hover:underline hover:opacity-100 flex gap-2 opacity-70"
        >
          <MdOutlineKeyboardBackspace size={16} />
          Trở về
        </span>
        <h1 className="text-xl md:text-3xl font-extrabold">{title}</h1>
      </div>
      <div className="flex flex-col h-full justify-center">
        <div className="flex gap-4">
          <Button
            onClick={handleClickAddNewFolder}
            className="bg-white text-black md:block hidden rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white"
          >
            + Thư mục mới
          </Button>
          <Tooltip anchorSelect=".folder-plus" place={"top"}>
            + Thư mục mới
          </Tooltip>
          <Button
            onClick={handleClickAddNewFolder}
            className="bg-white folder-plus md:hidden text-black rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white"
          >
            <FaFolderPlus size={20} />
          </Button>
          <Button className="bg-blue-500  md:block hidden font-bold rounded-2xl text-white hover:shadow-blue-400 hover:shadow-md duration-200 hover:-translate-y-0.5">
            + Bài viết mới
          </Button>
          <Tooltip anchorSelect=".document-plus" place={"top"}>
            + Bài viết mới
          </Tooltip>
          <Button className="bg-blue-500 document-plus md:hidden font-bold rounded-2xl text-white hover:shadow-blue-400 hover:shadow-md duration-200 hover:-translate-y-0.5">
            <RiFileAddFill size={20} />
          </Button>
        </div>
      </div>
      {isShowModalAddFolder && (
        <ModalNewFolder
          isShow={isShowModalAddFolder}
          setIsShow={setIsShowModalAddFolder}
        />
      )}
    </div>
  );
};

export default Header;
