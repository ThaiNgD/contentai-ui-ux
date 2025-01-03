"use client";

import ModalNewFolder from "@/components/Modal/ModalNewFolder";
import { Button } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { FaFolderPlus } from "react-icons/fa6";
import { RiFileAddFill } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
interface HeaderProps {
  setShouldFetch?: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setShouldFetch }: HeaderProps) => {
  const [isShowModalAddFolder, setIsShowModalAddFolder] = useState(false);
  const handleClickAddNewFolder = (): void => {
    setIsShowModalAddFolder(true);
  };
  return (
    <div className="2xl:px-[175px] px-[15px] py-[35px] h-[150px] flex items-center justify-between">
      <h1 className="md:text-2xl lg:text-3xl text-xl font-extrabold">
        Tài liệu của tôi
      </h1>
      <div className="flex flex-col h-full items-center justify-center">
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
          setShouldFetch={setShouldFetch}
          isShow={isShowModalAddFolder}
          setIsShow={setIsShowModalAddFolder}
        />
      )}
    </div>
  );
};

export default Header;
