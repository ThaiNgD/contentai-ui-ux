import { COLORS } from "@/helper/const";
import { cn, getRandomColor } from "@/helper/utils";
import { FaRegStar } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
export interface RecentLaunchComponentProps {
  image?: string;
  title: string;
  content?: string;
  isFolderDisplay?: boolean;
}
const RecentLaunchComponent = ({
  image,
  title,
  content,
  isFolderDisplay = true,
}: RecentLaunchComponentProps) => {
  const color = getRandomColor(COLORS);
  console.log(image);
  return (
    <div
      role="button"
      className={cn(
        "shadow-lg rounded-xl dark:bg-[#0D0B0B] duration-200 hover:-translate-y-1 p-3 hover:shadow-2xl  h-[220px] w-[240px]",
        color && ""
      )}
    >
      <div className="flex justify-between h-[28px] items-center">
        <p
          className={cn("text-sm text-black opacity-90 px-2 w-fit rounded-lg")}
          style={{
            backgroundColor: color,
          }}
        >
          {title}
        </p>
        {isFolderDisplay && (
          <div className="p-[6px] hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-md duration-200 hover:text-white hover:shadow-blue-500 rounded-full shadow-md">
            <FaRegStar size={16} />
          </div>
        )}
      </div>

      <div className="py-5 border-b">
        <p className="whitespace-normal overflow-hidden overflow-ellipsis ">
          New Workbook : Certainly! Please provide me with the specific topic or
          focus you would like the arti...
          {content}
        </p>
      </div>
      <div className="flex py-2 items-center justify-between">
        <p>Oct 31 2024</p>
        <HiOutlineDotsVertical size={20} />
      </div>
    </div>
  );
};

export default RecentLaunchComponent;
