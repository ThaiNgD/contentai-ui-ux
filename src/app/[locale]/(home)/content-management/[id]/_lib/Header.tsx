"use client";

import ModalNewFolder from "@/components/Modal/ModaNewFolder";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  const [isShowModalAddFolder, setIsShowModalAddFolder] = useState(false);
  const handleClickAddNewFolder = (): void => {
    setIsShowModalAddFolder(true);
  };
  const router = useRouter();
  const handleClickBack = (): void => {
    router.push("/content-management");
  };
  return (
    <div className="px-[175px] py-[35px] h-[150px] flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <span
          role="button"
          onClick={handleClickBack}
          className="text-sm hover:underline hover:opacity-100 flex gap-2 opacity-70"
        >
          <MdOutlineKeyboardBackspace size={16} />
          Trở về
        </span>
        <h1 className="text-3xl font-extrabold">{title}</h1>
      </div>
      <div className="flex flex-col h-full justify-center">
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
