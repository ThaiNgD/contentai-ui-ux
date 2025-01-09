"use client";

import ModalNewFolder from "@/components/Modal/ModalNewFolder";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Tooltip } from "react-tooltip";
const Header = () => {
  const router = useRouter();
  const { locale } = useGetPathComponent();
  const handleClickBack = (): void => {
    router.push(`/${locale}/dashboard`);
  };
  const [isShowModalAddFolder, setIsShowModalAddFolder] = useState(false);
  const handleClickFolderManagement = (): void => {
    router.push(`/${locale}/content-management`);
  };
  return (
    <div className="2xl:px-[175px] px-[15px] py-[35px] h-[150px] flex items-center justify-between border-b">
      <div className="flex flex-col gap-2">
        <span
          role="button"
          className="text-xs md:text-sm hover:underline hover:opacity-100 flex gap-2 opacity-70"
          onClick={handleClickBack}
        >
          <MdOutlineKeyboardBackspace size={16} />
          Trở về
        </span>
        <h1 className="text-xl md:text-3xl font-extrabold">Generate Article</h1>
        <span className="hidden md:block text-sm opacity-70">
          • Tạo một bài viết hoàn chỉnh chỉ với một vài từ khóa hoặc câu gợi ý.
          <br />
          • Chọn phong cách viết, giọng điệu và độ dài mong muốn cho bài viết.
          <br />• Xem trước và chỉnh sửa bài viết trước khi lưu hoặc xuất bản.
        </span>
      </div>
      <div className="flex flex-col h-full justify-center">
        <div className="flex gap-4">
          <Button
            onClick={handleClickFolderManagement}
            className="bg-white md:block hidden text-black rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white"
          >
            + Tài liệu của tôi
          </Button>
          <Button className="bg-white my-document md:hidden text-black rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white">
            <FaRegFolderOpen size={20} />
          </Button>
          <Tooltip anchorSelect=".my-document" place={"top"}>
            + Tài liệu của tôi
          </Tooltip>
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
