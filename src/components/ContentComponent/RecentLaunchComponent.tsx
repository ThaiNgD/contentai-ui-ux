"use client";
import { COLORS } from "@/helper/const";
import { cn, getRandomColor } from "@/helper/utils";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { useRouter } from "next/navigation";
import { HiOutlineDotsVertical } from "react-icons/hi";
export interface RecentLaunchComponentProps {
  aiModelName?: string;
  image?: string;
  title: string;
  content?: string;
  date?:string
  documentId?:string
}
const RecentLaunchComponent = ({
  aiModelName,
  title,
  content,
  date,
  documentId
}: RecentLaunchComponentProps) => {
  const color = getRandomColor(COLORS);
  const router = useRouter();
  const { locale } = useGetPathComponent();
  const handleGetDocument = () => {
    router.push(`/${locale}/content-management/document/${documentId}`);
  };
  return (
    <div
      role="button"
      className={cn(
        "shadow-lg rounded-xl p-3 hover:shadow-2xl h-[220px] w-[240px]",
        color && ""
      )}
      onClick={handleGetDocument}
    >
      <p
        className={cn("text-sm text-black opacity-90 px-2 w-fit rounded-lg")}
        style={{
          backgroundColor: color,
        }}
      >
        {aiModelName}
      </p>
        <p
          className={cn("text-sm text-black opacity-90 px-2 mt-1 w-fit rounded-lg")}
          style={{
            backgroundColor: color,
          }}
        >
          {title}
        </p>
      <div className="py-5 border-b">
        <p className="whitespace-normal overflow-hidden overflow-ellipsis ">
          {content
          ||
          "New Workbook : Certainly! Please provide me with the specific topic or focus you would like the arti..."
          }
        </p>
      </div>
      <div className="flex py-2 items-center justify-between">
        <p>{date}</p>
        <HiOutlineDotsVertical size={20} />
      </div>
    </div>
  );
};

export default RecentLaunchComponent;
