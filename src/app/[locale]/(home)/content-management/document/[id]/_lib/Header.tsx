"use client";
import InputField from "@/components/CustomField/InputField";
import ModalNewFolder from "@/components/Modal/ModalNewFolder";
import { cn } from "@/helper/function";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheck, FaPenClip, FaXmark } from "react-icons/fa6";
import { MdOutlineKeyboardBackspace, MdSave } from "react-icons/md";
import { RiFileAddFill } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  const [isShowModalAddFolder, setIsShowModalAddFolder] = useState(false);
  const [editDocumentName, setEditDocumentName] = useState(false);
  const router = useRouter();
  const { locale } = useGetPathComponent();
  const handleClickBack = (): void => {
    router.push(`/${locale}/content-management`);
  };
  const handleEditDocumentName = () => {
    setEditDocumentName(true);
  };
  const handleEditDone = (): void => {
    setEditDocumentName(false);
  };

  const handleEditCancel = (): void => {
    setEditDocumentName(false);
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
        {editDocumentName ? (
          <form className={cn("relative w-full")}>
            <InputField
              name="edit-title"
              className={cn("!border-blue-400 !border-2")}
              placeholder={title}
            />
            <div
              role="button"
              className="p-[4px] rounded-full group hover:bg-green-400 border-green-400 border h-fit absolute top-2 right-2"
              onClick={handleEditDone}
            >
              <FaCheck
                size={12}
                className="group-hover:text-white text-green-400"
              />
            </div>
            <div
              role="button"
              className="p-[4px] rounded-full group hover:bg-red-600 border-red-600 border h-fit absolute top-2 right-10"
              onClick={handleEditCancel}
            >
              <FaXmark
                size={12}
                className="group-hover:text-white text-red-600"
              />
            </div>
          </form>
        ) : (
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-3xl font-extrabold">{title}</h1>
            <div
              role="button"
              className="p-2 h-fit rounded-full hover:translate-y-0.5 bg-gray-200"
              onClick={handleEditDocumentName}
            >
              <FaPenClip size={16} />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col h-full justify-center">
        <div className="flex gap-4">
          <Button className="bg-blue-500  md:block hidden font-bold rounded-2xl text-white hover:shadow-blue-400 hover:shadow-md duration-200 hover:-translate-y-0.5">
            Lưu lại
          </Button>
          <Tooltip anchorSelect=".save-document" place={"top"}>
            Lưu lại
          </Tooltip>
          <Button className="bg-blue-500 save-document md:hidden font-bold rounded-2xl text-white hover:shadow-blue-400 hover:shadow-md duration-200 hover:-translate-y-0.5">
            <MdSave size={20} />
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
