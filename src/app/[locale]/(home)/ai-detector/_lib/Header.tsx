"use client";

import ModalNewFolder from "@/components/Modal/ModaNewFolder";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Header = () => {
  const [isShowModalAddFolder, setIsShowModalAddFolder] = useState(false);
  const handleClickAddNewFolder = (): void => {
    setIsShowModalAddFolder(true);
  };
  const router = useRouter();
  const { locale } = useGetPathComponent();
  const handleClickBack = (): void => {
    router.push(`/${locale}/dashboard`);
  };
  return (
    <div className="2xl:px-[175px] px-[15px] py-[35px] h-[150px] flex items-center justify-between border-b">
      <div className="flex flex-col gap-2">
        <span
          role="button"
          className="text-sm hover:underline hover:opacity-100 flex gap-2 opacity-70"
          onClick={handleClickBack}
        >
          <MdOutlineKeyboardBackspace size={16} />
          Trở về
        </span>
        <h1 className="text-3xl font-extrabold">AI Detector</h1>
        <span className="text-sm opacity-70">
          • Phân biệt nội dung do con người viết và nội dung do AI tạo ra.
          <br />• Giúp đánh giá chất lượng và độ tin cậy của nội dung
        </span>
      </div>
      <div className="flex flex-col h-full justify-center">
        <div className="flex gap-4">
          <Button
            onClick={handleClickAddNewFolder}
            className="bg-white text-black rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white"
          >
            Tài liệu của tôi
          </Button>
          <Button className="bg-blue-500 border-blue-500 font-bold rounded-2xl text-white hover:shadow-blue-400 hover:shadow-md hover:-translate-y-0.5">
            + Tạo mới
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
