import Account from "@/assets/images/account.png";
import Image from "next/image";
import { FaShareFromSquare } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
const ChatHeader = () => {
  return (
    <div className="w-full flex gap-2 items-center justify-between px-5">
      <div className="flex gap-2 items-center">
        <Image
          src={Account}
          alt="Avatar"
          className="size-[40px] border rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold text-lg">Nguyễn Đình Thái</span>
          <span className="text-xs opacity-50">Developer</span>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="p-[13px] shadow-inner bg-gray-100 rounded-full h-fit w-fit">
          <FaShareFromSquare size={20} />
        </div>
        <div className="p-2 shadow-inner bg-gray-100 rounded-full h-fit w-fit">
          <TbFileExport size={30} />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
