"use client";
import FolderDisplayComponent from "@/components/ContentComponent.tsx/FolderDisplayComponent";
import FolderDisplayLoading from "@/components/ContentComponent.tsx/FolderDisplayLoading";
import { convertToVietnameseDate } from "@/helper/function";
import { useFetchFolder } from "@/service/content-management/useFetchFolder";
import { Dispatch, SetStateAction, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

interface FolderDisplayProps {
  shouldFetch?: boolean;
  setShouldFetch?: Dispatch<SetStateAction<boolean>>;
}

const FolderDisplay = ({ shouldFetch, setShouldFetch }: FolderDisplayProps) => {
  const { isPending, data, refetch } = useFetchFolder();
  useEffect(() => {
    if (shouldFetch) {
      refetch();
      setShouldFetch?.(false);
    }
  }, [shouldFetch, refetch]);

  return (
    <div className="grid grid-cols-3 gap-5">
      {data && data.length > 0 ? (
        <>
          {isPending ? (
            <>
              <FolderDisplayLoading />
              <FolderDisplayLoading />
              <FolderDisplayLoading />
            </>
          ) : (
            data?.map((folder, index) => (
              <FolderDisplayComponent
                folder_id={folder.folder_id}
                key={index}
                title={folder.folder_name}
                time={convertToVietnameseDate(
                  folder.created_at as unknown as string
                )}
              />
            ))
          )}
        </>
      ) : (
        <div className="flex col-start-2 flex-col h-[150px] w-full gap-2 items-center shadow-md justify-center bg-gray-200 rounded-xl">
          <div className="pl-3 py-2 pr-2 w-fit h-fit bg-white rounded-xl shadow-md relative mb-2">
            <FaFolderOpen size={50} className="text-yellow-300" />
            <FaInfoCircle
              size={15}
              className="text-blue-500 absolute right-0 top-0"
            />
          </div>
          <span className="text-xl be-vietnam-pro-light">
            Chưa có thư mục nào
          </span>
        </div>
      )}
    </div>
  );
};

export default FolderDisplay;
