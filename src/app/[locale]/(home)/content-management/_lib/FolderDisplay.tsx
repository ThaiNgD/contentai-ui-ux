"use client";
import FolderDisplayComponent from "@/components/ContentComponent.tsx/FolderDisplayComponent";
import FolderDisplayLoading from "@/components/ContentComponent.tsx/FolderDisplayLoading";
import { convertToVietnameseDate } from "@/helper/function";
import { useFetchFolder } from "@/service/content-management/useFetchFolder";
import { Dispatch, SetStateAction, useEffect } from "react";

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
    </div>
  );
};

export default FolderDisplay;
