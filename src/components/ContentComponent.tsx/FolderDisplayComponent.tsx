import { cn } from "@/helper/utils";
import { FaFolderOpen } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
export interface FolderDisplayComponentProps {
  title: string;
  time: string;
  clsContainerWidth?: string;
}
const FolderDisplayComponent = ({
  title,
  time,
  clsContainerWidth,
}: FolderDisplayComponentProps) => {
  return (
    <div
      className={cn(
        "rounded-xl hover:shadow-lg hover:-translate-y-0.5 duration-100 px-4 py-3 items-center bg-gray-200 grid w-[420px] ",
        clsContainerWidth
      )}
      style={{
        gridTemplateColumns: "40px 1fr 50px",
        gap: "10px",
      }}
      role="button"
    >
      <FaFolderOpen size={30} className="text-gray-400 opacity-85 " />
      <div className="flex flex-col">
        <h6 className="text-sm">{title}</h6>
        <span className="text-xs opacity-60">{time}</span>
      </div>
      <HiOutlineDotsVertical size={24} />
    </div>
  );
};

export default FolderDisplayComponent;
