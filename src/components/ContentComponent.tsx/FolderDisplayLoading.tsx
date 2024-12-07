"use client";
import { cn } from "@/helper/utils";
import { FaFolderOpen } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
const FolderDisplayLoading = () => {
  return (
    <div
      className={cn(
        "rounded-xl skeleton-text hover:shadow-lg hover:-translate-y-0.5 duration-100 px-4 py-3 items-center bg-gray-200 grid w-[full] "
      )}
      style={{
        gridTemplateColumns: "40px 1fr 50px",
        gap: "10px",
      }}
      role="button"
    >
      <FaFolderOpen size={30} className={cn("text-gray-400 opacity-85 ")} />
      <div className="flex flex-col">
        <h6 className="text-sm skeleton-text"></h6>
        <span className="text-xs opacity-60 skeleton-text"></span>
      </div>
      <HiOutlineDotsVertical size={24} />
    </div>
  );
};

export default FolderDisplayLoading;
