"use client";
import { cn } from "@/helper/utils";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
export interface FolderDisplayComponentProps {
  title: string;
  time: string;
  folder_id: string;
  clsContainerWidth?: string;
}
const FolderDisplayComponent = ({
  title,
  time,
  folder_id,
  clsContainerWidth,
}: FolderDisplayComponentProps) => {
  const router = useRouter();
  const { pathWithoutLocale } = useGetPathComponent();
  const [isSelected, setIsSelected] = useState(false);
  console.log(folder_id);
  return (
    <div
      className={cn(
        "rounded-xl hover:shadow-lg hover:-translate-y-0.5 duration-100 px-4 py-3 items-center bg-gray-200 grid w-[full] ",
        clsContainerWidth,
        isSelected && "bg-yellow-400 text-white"
      )}
      style={{
        gridTemplateColumns: "40px 1fr 50px",
        gap: "10px",
      }}
      role="button"
      onClick={(): void => {
        setIsSelected(true);
        router.push(`${pathWithoutLocale}/folder/${title}`);
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
      <HiOutlineDotsVertical size={24} />
    </div>
  );
};

export default FolderDisplayComponent;
