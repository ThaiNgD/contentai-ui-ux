"use client";
import { COLORS } from "@/helper/const";
import { convertToVietnameseDate } from "@/helper/function";
import { cn, getRandomColor } from "@/helper/utils";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { TbArrowsExchange } from "react-icons/tb";
import ModalChangeFolder from "../Modal/ModalChangeFolder";
import ModalConfirm from "../Modal/ModalConfirm";
export interface RecentLaunchComponentProps {
  aiModelName?: string;
  image?: string;
  title: string;
  content?: string;
  date?: string;
  isFolderDisplay?: boolean;
  documentId?: string;
}
const RecentLaunchComponent = ({
  aiModelName,
  title,
  content,
  isFolderDisplay = true,
  date,
  documentId,
}: RecentLaunchComponentProps) => {
  const color = getRandomColor(COLORS);
  const router = useRouter();
  const [isOption, setIsOption] = useState(false);
  const { locale } = useGetPathComponent();
  const handleGetDocument = (): void => {
    if (isOption) {
      return;
    }
    router.push(`/${locale}/content-management/document/${documentId}`);
  };
  const [isShowModalChangeFolder, setIsShowModalChangeFolder] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const specificRef = useRef<HTMLDivElement>(null);
  const [showModalDelete, setShowModalDelete] = useState(false);

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
      setIsShowModalChangeFolder(true);
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
    // mutateFn(folder_id);
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
        role="button"
        className={cn(
          "shadow-lg rounded-xl dark:bg-[#0D0B0B] duration-200 p-3  h-[220px] w-[240px]",
          color && "",
          !isOption &&
            "hover:cursor-pointer  hover:-translate-y-0.5 hover:hover:shadow-2xl "
        )}
        onClick={handleGetDocument}
      >
        <div className="flex justify-between h-[28px] items-center">
          <p
            className={cn(
              "text-sm text-black opacity-90 px-2 w-fit rounded-lg mt-1"
            )}
            style={{
              backgroundColor: color,
            }}
          >
            {aiModelName ? aiModelName : "null"} - {title}
          </p>
          {isFolderDisplay && (
            <div className="p-[6px] hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-md duration-200 hover:text-white hover:shadow-blue-500 rounded-full shadow-md">
              <FaRegStar size={16} />
            </div>
          )}
        </div>
        <div className="py-5 border-b">
          <p className="whitespace-normal overflow-hidden overflow-ellipsis limit-three-lines">
            {content ||
              "New Workbook : Certainly! Please provide me with the specific topic or focus you would like the artitttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt..New Workbook : Certainly! Please provide me with the specific topic or focus you would like the artitttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt..."}
          </p>
        </div>
        <div className="flex pt-1 items-center justify-between">
          <p>{date ? convertToVietnameseDate(date) : ""}</p>
          <div
            ref={divRef}
            className={`${
              isOption && "bg-gray-300"
            } p-2 relative rounded-full w-fit hover:bg-gray-300`}
            onClick={handleOption}
          >
            <div
              className={`${
                isOption ? "block !z-[999]" : "hidden"
              } w-[150px] h-[60px] flex flex-col shadow-lg bg-white p-1 rounded-xl absolute bottom-[40px] right-[0] `}
            >
              <div
                className="p-1 text-sm  grid group hover:text-yellow-300 grid-cols-[25%,75%]"
                ref={specificRef}
              >
                <TbArrowsExchange
                  size={18}
                  className="text-gray-500 group-hover:text-yellow-300"
                />
                Đổi thư mục
              </div>
              <div
                className="p-1 text-sm  grid group hover:text-red-500 grid-cols-[25%,75%]"
                onClick={handleDelete}
              >
                <IoMdTrash
                  size={18}
                  className="text-gray-500 group-hover:text-red-500"
                />
                Xóa bài viết
              </div>
            </div>
            <HiOutlineDotsVertical size={20} />
          </div>
        </div>
      </div>
      <ModalChangeFolder
        isShow={isShowModalChangeFolder}
        setIsShow={setIsShowModalChangeFolder}
      />
      <ModalConfirm
        isShow={showModalDelete}
        setIsShow={setShowModalDelete}
        content="Bạn có chắc chắn muốn xóa không? Hành động này không thể hoàn tác!"
        action={deleteAction}
      />
    </>
  );
};

export default RecentLaunchComponent;
