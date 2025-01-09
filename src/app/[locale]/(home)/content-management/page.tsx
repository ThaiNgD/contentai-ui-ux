"use client";
import { cn } from "@/helper/function";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import ContentDisplay from "./_lib/ContentDisplay";
import FolderDisplay from "./_lib/FolderDisplay";
import Header from "./_lib/Header";
const Page = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [contentDisplay, setContentDisplay] = useState<"grid" | "list">("grid");
  const [isSelectStarred, setIsSelectStarred] = useState(false);
  const handleClickStar = () => {
    setIsSelectStarred(!isSelectStarred);
  };
  return (
    <>
      <Header setShouldFetch={setShouldFetch} />
      <hr className="w-full" />
      <div className="2xl:px-[175px] px-[15px] my-[50px]">
        <FolderDisplay
          shouldFetch={shouldFetch}
          setShouldFetch={setShouldFetch}
        />
        <div className="border-b flex items-center justify-between pt-[50px] pb-[20px]">
          <p className="text-xl font-bold">Danh sách tài liệu</p>
          <div className="flex gap-2 justify-end pr-2">
            <div
              role="button"
              className={cn("p-[6px] rounded-md")}
              onClick={handleClickStar}
            >
              <FaStar
                className={cn(
                  "text-gray-500",
                  isSelectStarred && "text-yellow-300"
                )}
                size={18}
              />
            </div>
            <div
              role="button"
              className={cn(
                "p-[6px] rounded-md",
                contentDisplay === "list" && "bg-gray-200"
              )}
              onClick={(): void => {
                setContentDisplay("list");
              }}
            >
              <FaList
                className={cn(
                  "text-gray-500",
                  contentDisplay === "list" && "text-blue-500"
                )}
                size={18}
              />
            </div>
            <div
              role="button"
              className={cn(
                "p-[6px] rounded-md",
                contentDisplay === "grid" && "bg-gray-200"
              )}
              onClick={(): void => {
                setContentDisplay("grid");
              }}
            >
              <FiGrid
                className={cn(
                  "text-gray-500",
                  contentDisplay === "grid" && "text-blue-500"
                )}
                size={18}
              />
            </div>
          </div>
        </div>
        <ContentDisplay />
      </div>
    </>
  );
};

export default Page;
