"use client";
import { cn } from "@/helper/utils";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { useDeleteFolder } from "@/service/content-management/useDeleteFolder";
import { useRouter } from "next/navigation";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaFolderOpen } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
export interface FolderDisplayComponentProps {
  title: string;
  time: string;
  folder_id: string;
  clsContainerWidth?: string;
  setShouldFetch?: Dispatch<SetStateAction<boolean>>
}
const FolderDisplayComponent = ({
  folder_id,
  title,
  time,
  clsContainerWidth,
  setShouldFetch
}: FolderDisplayComponentProps) => {
  const {mutate: mutateFn, isPending} = useDeleteFolder()
  const router = useRouter();
  const { pathWithoutLocale } = useGetPathComponent();
  const divRef = useRef<HTMLDivElement>(null);
  const [isSelected, setIsSelected] = useState(false);
  const [isOption, setIsOption] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOption = (e: any): void => {
    e.stopPropagation();
    setIsOption(true);
  };
  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click is outside the div
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsOption(false); // Close the div
    }
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa không? Hành động này không thể hoàn tác!");
    if (isConfirmed) 
        mutateFn(folder_id); // Thực hiện xóa
    // setShouldFetch?.(true)
  }

  useEffect(() => {
    // Attach the click event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className={cn(
        "rounded-xl  duration-100 px-4 py-3 items-center bg-gray-200 grid w-[full] ",
        clsContainerWidth,
        isSelected && "bg-yellow-400 text-white",
        !isOption && "hover:-translate-y-0.5 hover:shadow-lg"
      )}
      style={{
        gridTemplateColumns: "40px 1fr 50px",
        gap: "10px",
      }}
      role="button"
      onClick={(): void => {
        setIsSelected(true);
        sessionStorage.setItem("folderTitle", title);
        router.push(`${pathWithoutLocale}/folder/${folder_id}`,
        );
      }}
    >
      <FaFolderOpen
        size={30}
        className={cn("text-gray-400 opacity-85 ", isSelected && "text-white")}
      />
      <div className="flex flex-col">
        <h6 className="text-sm">{title}</h6>
        <span className="text-xs opacity-60">{time}</span>
      </div>
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
          <div className="p-1 group hover:text-yellow-300 text-sm grid grid-cols-[25%,75%]">
            <AiFillEdit
              size={18}
              className="text-gray-500 group-hover:text-yellow-300"
            />
            Sửa tên
          </div>
          <div className="p-1 text-sm  grid group hover:text-red-500 grid-cols-[25%,75%]"
               onClick={handleDelete}
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
    </div>
  );
};

export default FolderDisplayComponent;
