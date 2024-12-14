"use client";

import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

interface ChildHeaderProps {
  title: string;
  description?: string;
}
const ChildHeader = ({ title, description }: ChildHeaderProps) => {
  const router = useRouter();
  const { locale } = useGetPathComponent();
  const handleClickBack = () => {
    router.push(`/${locale}/ai-seo`);
  };
  return (
    <div className="2xl:px-[175px] px-[15px] py-[35px] h-[150px] flex items-center justify-between border-b dark:text-white">
      <div className="flex flex-col gap-2">
        <span
          role="button"
          className="text-sm hover:underline hover:opacity-100 flex gap-2 opacity-70"
          onClick={handleClickBack}
        >
          <MdOutlineKeyboardBackspace size={16} />
          Trở về
        </span>
        <h1 className="text-3xl font-extrabold">{title}</h1>
        {description && (
          <span className="text-sm opacity-70">{description}</span>
        )}
      </div>
      <div className="flex flex-col h-full justify-center">
        <div className="flex gap-4">
          <Button className="bg-white text-black rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white">
            + Tài liệu của tôi
          </Button>
          <Button className="bg-blue-500 font-bold rounded-2xl text-white hover:shadow-blue-400 hover:shadow-md hover:-translate-y-0.5">
            + Tạo Template
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChildHeader;
