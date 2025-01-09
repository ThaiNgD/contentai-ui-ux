"use client";
import { cn } from "@/helper/utils";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { useDeleteFolder } from "@/service/content-management/useDeleteFolder";
import { useRouter } from "next/navigation";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaFolderOpen } from "react-icons/fa";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import InputField from "../CustomField/InputField";
import ModalConfirm from "../Modal/ModalConfirm";
export interface FolderDisplayComponentProps {
  title: string;
  time: string;
  folder_id: string;
  clsContainerWidth?: string;
  setShouldFetch?: Dispatch<SetStateAction<boolean>>;
}
const FolderDisplayComponent = ({
  folder_id,
  title,
  time,
  clsContainerWidth,
  setShouldFetch,
}: FolderDisplayComponentProps) => {
  const { mutate: mutateFn } = useDeleteFolder();
  const router = useRouter();
  const { pathWithoutLocale } = useGetPathComponent();
  const divRef = useRef<HTMLDivElement>(null);
  const specificRef = useRef<HTMLDivElement>(null);
  const [isSelected, setIsSelected] = useState(false);
  const [isOption, setIsOption] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleEdit = (): void => {
    console.log(showEdit);
    setIsOption(false);
  };

  const handleEditDone = (): void => {
    setIsOption(false);
    setShowEdit(false);
  };

  const handleEditCancel = (): void => {
    setIsOption(false);
    setShowEdit(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOption = (e: any): void => {
    e.stopPropagation();
    setIsOption(true);
  };
  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click is outside the div
    event.stopPropagation();
    if (
      specificRef.current &&
      specificRef.current.contains(event.target as Node)
    ) {
      setShowEdit(true);
      setIsOption(false);
      return;
    }
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsOption(false); // Close the div
    }
  };

  const handleDelete = (): void => {
    setIsOption(false);
    setShowModalDelete(true);
  };

  const deleteAction = (): void => {
    setShowModalDelete(false);
    mutateFn(folder_id);
    setShouldFetch?.(true);
  };

  useEffect(() => {
    // Attach the click event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        className={cn(
          "rounded-xl  duration-100 px-4 py-3 items-center bg-gray-200 grid w-[full] ",
          clsContainerWidth,
          isSelected && "bg-yellow-400 text-white",
          !isOption &&
            !showEdit &&
            "hover:cursor-pointer hover:-translate-y-0.5 hover:shadow-lg"
        )}
        style={{
          gridTemplateColumns: "40px 1fr 50px",
          gap: "10px",
        }}
        onClick={(): void => {
          if (showEdit) {
            return;
          }
          setIsSelected(true);
          sessionStorage.setItem("folderTitle", title);
          router.push(`${pathWithoutLocale}/folder/${folder_id}`);
        }}
      >
        <FaFolderOpen
          size={30}
          className={cn(
            "text-gray-400 opacity-85 ",
            isSelected && "text-white"
          )}
        />
        {showEdit ? (
          <form className={cn("relative w-full", showEdit && "col-span-2")}>
            <InputField
              name="edit-title"
              className={cn(showEdit && "!border-blue-400 !border-2")}
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
          <div className="flex flex-col">
            <h6 className="text-sm">{title}</h6>
            <span className="text-xs opacity-60">{time}</span>
          </div>
        )}
        {!showEdit && (
          <div
            className={`${
              isOption && "bg-white"
            } p-2 relative rounded-full w-fit hover:bg-white`}
            onClick={handleOption}
          >
            <div
              ref={divRef}
              className={`${
                isOption ? "block !z-[999]" : "hidden"
              } w-[150px] h-[60px] flex flex-col shadow-lg bg-white p-1 rounded-xl absolute -bottom-[65px] right-[0px] `}
            >
              <div
                className="p-1 group hover:text-yellow-300 text-sm grid grid-cols-[25%,75%]"
                onClick={handleEdit}
                ref={specificRef}
              >
                <AiFillEdit
                  size={18}
                  className="text-gray-500 group-hover:text-yellow-300"
                />
                Sửa tên
              </div>
              <div
                className="p-1 text-sm  grid group hover:text-red-500 grid-cols-[25%,75%]"
                onClick={handleDelete}
                // ref={specificRef}
              >
                <IoMdTrash
                  size={18}
                  className="text-gray-500 group-hover:text-red-500"
                />
                Xóa thư mục
              </div>
            </div>
            <HiOutlineDotsVertical size={20} />
          </div>
        )}
      </div>
      <ModalConfirm
        isShow={showModalDelete}
        setIsShow={setShowModalDelete}
        content="Bạn có chắc chắn muốn xóa không? Hành động này không thể hoàn tác!"
        action={deleteAction}
      />
    </>
  );
};

export default FolderDisplayComponent;
