"use client";

import ModalNewFolder from "@/components/Modal/ModaNewFolder";
import { Button } from "flowbite-react";
import { useState } from "react";
import { FaList } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";

const Header = () => {
  const [isShowModalAddFolder, setIsShowModalAddFolder] = useState(false);
  const handleClickAddNewFolder = (): void => {
    setIsShowModalAddFolder(true);
  };
  return (
    <div className="px-[175px] py-[35px] h-[150px] flex items-center justify-between">
      <h1 className="text-3xl font-extrabold">Tài liệu của tôi</h1>
      <div className="flex flex-col h-full justify-between">
        <div className="flex gap-4">
          <Button
            onClick={handleClickAddNewFolder}
            className="bg-white text-black rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white"
          >
            + Thư mục mới
          </Button>
          <Button className="bg-blue-500 font-bold rounded-2xl text-white hover:shadow-blue-400 hover:shadow-md hover:-translate-y-0.5">
            + Bài viết mới
          </Button>
        </div>
        <div className="flex gap-2 justify-end pr-2">
          <div role="button" className="p-[6px] rounded-md">
            <FaList className="text-gray-500" size={18} />
          </div>
          <div role="button" className="bg-gray-200 rounded-md p-[6px]">
            <FiGrid className="text-black" size={18} />
          </div>
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
