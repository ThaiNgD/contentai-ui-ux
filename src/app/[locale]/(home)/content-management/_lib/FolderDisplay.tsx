"use client";
import FolderDisplayComponent from "@/components/FolderComponent/FolderDisplayComponent";
import FolderDisplayLoading from "@/components/FolderComponent/FolderDisplayLoading";
import { CustomPaginate } from "@/components/layout/Pagnigation";
import { chunk, convertToVietnameseDate } from "@/helper/function";
import { useFetchFolder } from "@/service/content-management/useFetchFolder";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

interface FolderDisplayProps {
  shouldFetch?: boolean;
  setShouldFetch?: Dispatch<SetStateAction<boolean>>;
}

const FolderDisplay = ({ shouldFetch, setShouldFetch }: FolderDisplayProps) => {
  const { isPending, data: folder, refetch } = useFetchFolder();
  const [activePage, setPage] = useState(1);
  const chunkedData = useMemo(() => {
    return folder
      ? chunk(
          folder.data.map((f, index) => ({ id: index, ...f })),
          9
        )
      : [];
  }, [folder]);
  useEffect(() => {
    const handleRefetch = async () => {
      await refetch();
    };
    if (shouldFetch) {
      handleRefetch();
      setShouldFetch?.(false);
    }
  }, [shouldFetch, refetch]);

  return (
    <>
      <div className="md:grid md:grid-cols-3 justify-center flex items-center gap-5">
        {!isPending ? (
          <>
            {folder && folder.data.length > 0 ? (
              <>
                {chunkedData[activePage - 1]?.map((f, index) => (
                  <FolderDisplayComponent
                    folder_id={f.folder_id}
                    key={index}
                    title={f.folder_name}
                    time={convertToVietnameseDate(
                      f.created_at as unknown as string
                    )}
                    setShouldFetch={setShouldFetch}
                  />
                ))}
              </>
            ) : (
              <div className="flex w-full col-start-2 flex-col h-[150px] gap-2 items-center shadow-md justify-center bg-gray-200 rounded-xl">
                <div className="pl-3 py-2 pr-2 w-fit h-fit bg-white rounded-xl shadow-md relative mb-2">
                  <FaFolderOpen size={50} className="text-yellow-300" />
                  <FaInfoCircle
                    size={15}
                    className="text-blue-500 absolute right-0 top-0"
                  />
                </div>
                <span className="md:text-xl text-lg whitespace-nowrap be-vietnam-pro-light px-2">
                  Chưa có thư mục nào
                </span>
              </div>
            )}
          </>
        ) : (
          <>
            <FolderDisplayLoading />
            <FolderDisplayLoading />
            <FolderDisplayLoading />
          </>
        )}
      </div>
      {folder && (
        <div className="flex justify-end">
          <CustomPaginate
            setPage={setPage}
            activePage={activePage}
            data={chunkedData}
          />
        </div>
      )}
    </>
  );
};

export default FolderDisplay;
