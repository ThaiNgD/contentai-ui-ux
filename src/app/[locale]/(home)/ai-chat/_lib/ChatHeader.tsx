import Account from "@/assets/images/account.png";
import { queryClient } from "@/provider/TanStackProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";

interface UserInfo {
  user: {
    email: string;
    name: string | null;
    userId: string;
    username: string;
  };
  message: string;
}

const ChatHeader = () => {
  const [userInfor, setUserInfor] = useState<UserInfo>();
  useEffect(() => {
    const data = queryClient.getQueryData<UserInfo>(["user"]);
    setUserInfor(data);
  });
  if (userInfor) {
    // const { user } = userInfo;
    // console.log("userInfo", userInfo);
    return (
      <div className="w-full flex gap-2 items-center justify-between px-5">
        <div className="flex gap-2 items-center">
          <Image
            src={Account}
            alt="Avatar"
            className="size-[40px] border rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg">{userInfor.user.username}</span>
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
  } else {
    return (
      <div className="w-full flex gap-2 items-center justify-between px-5">
        <div className="flex gap-2 items-center">
          <Image
            src={Account}
            alt="Avatar"
            className="size-[40px] border rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg">UserName</span>
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
  }
};

export default ChatHeader;
