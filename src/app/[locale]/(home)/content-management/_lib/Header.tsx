"use client";

import ModalNewFolder from "@/components/Modal/ModalNewFolder";
import { Button } from "flowbite-react";
import { useState } from "react";

const Header = () => {
  const [isShowModalAddFolder, setIsShowModalAddFolder] = useState(false);
  const handleClickAddNewFolder = (): void => {
    setIsShowModalAddFolder(true);
  };
  return (
    <div className="2xl:px-[175px] px-[15px] py-[35px] h-[150px] flex items-center justify-between">
      <h1 className="text-3xl font-extrabold">Tài liệu của tôi</h1>
      <div className="flex flex-col h-full items-center justify-center">
        <div className="flex gap-4">
          <Button
            onClick={handleClickAddNewFolder}
            className="bg-white text-black rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white"
          >
            + Thư mục mới
          </Button>
          <Button className="bg-blue-500 font-bold rounded-2xl text-white hover:shadow-blue-400 hover:shadow-md duration-200 hover:-translate-y-0.5">
            + Bài viết mới
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
