"use client";
import FolderDisplayComponent from "@/components/ContentComponent.tsx/FolderDisplayComponent";
import { convertToVietnameseDate } from "@/helper/function";
import { useFetchFolder } from "@/service/content-management/useFetchFolder";

const FolderDisplay = () => {
  const { data } = useFetchFolder();
  console.log(typeof data, data);
  return (
    <div className="grid grid-cols-3 gap-5">
      {data?.map((folder, index) => (
        <FolderDisplayComponent
          folder_id={folder.folder_id}
          key={index}
          title={folder.folder_name}
          time={convertToVietnameseDate(folder.created_at as unknown as string)}
        />
      ))}
    </div>
  );
};

export default FolderDisplay;
