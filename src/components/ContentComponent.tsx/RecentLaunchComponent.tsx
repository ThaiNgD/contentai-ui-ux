import { COLORS } from "@/helper/const";
import { cn, getRandomColor } from "@/helper/utils";
import { HiOutlineDotsVertical } from "react-icons/hi";
export interface RecentLaunchComponentProps {
  image?: string;
  title: string;
  content?: string;
}
const RecentLaunchComponent = ({
  image,
  title,
  content,
}: RecentLaunchComponentProps) => {
  const color = getRandomColor(COLORS);
  console.log(image);
  return (
    <div
      role="button"
      className={cn(
        "shadow-lg rounded-xl p-3 hover:shadow-2xl h-[220px] w-[240px]",
        color && ""
      )}
    >
      <p
        className={cn("text-sm text-black opacity-90 px-2 w-fit rounded-lg")}
        style={{
          backgroundColor: color,
        }}
      >
        {title}
      </p>
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
