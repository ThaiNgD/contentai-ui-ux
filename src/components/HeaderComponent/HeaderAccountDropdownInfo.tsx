"use client";
import Avatar from "@/assets/images/avatar.jpg";
import { removeAuthToken } from "@/config";
import { cn } from "@/helper/utils";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { useGetProfile } from "@/service/auth/useGetProfile";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaAngleDoubleUp } from "react-icons/fa";
const HeaderAccountDropdownInfo = () => {
  const [isShowAccountInfo, setIsShowAccountInfo] = useState(false);
  const { data: user } = useGetProfile(true);
  const { locale } = useGetPathComponent();
  const handleToggleOpenAccountInfo = (): void => {
    setIsShowAccountInfo(true);
  };
  const handleToggleCloseAccountInfo = (): void => {
    setIsShowAccountInfo(false);
  };
  const router = useRouter();
  // const path = useGetPathComponent();

  const logout = (): void => {
    removeAuthToken();
    router.push(`/${locale}/login`);
  };
  return (
    <div className="relative">
      <Image
        className="size-[40px] rounded-full border"
        src={Avatar}
        alt="Avatar"
        onMouseOver={handleToggleOpenAccountInfo}
        role="button"
      />
      <div
        className={cn(
          "flex-col absolute right-0 top-[50px] z-50 border rounded-lg shadow-lg h-fit w-[260px] bg-white",
          isShowAccountInfo ? "flex" : "hidden"
        )}
        onMouseLeave={handleToggleCloseAccountInfo}
      >
        <div className="w-full flex items-center pl-4 border-b  justify-between">
          <Image
            className="size-[40px] rounded-full"
            src={Avatar}
            alt="Avatar"
            onMouseOver={handleToggleOpenAccountInfo}
          />
          <div className="p-2 flex flex-col items-end">
            <p className="text-base font-bold">{user?.[0].username}</p>
            <span className="text-sm opacity-70">{user?.[0].email}</span>
          </div>
        </div>
        <div
          role="button"
          className="p-2 w-full flex gap-4 pr-4 justify-end items-center font-semibold hover:bg-gray-200 hover:text-blue-500"
        >
          Upgrade API <FaAngleDoubleUp size={16} />
        </div>
        <div
          role="button"
          className="p-2 w-full flex gap-4 pr-4  justify-end items-center font-semibold hover:bg-gray-200 hover:text-red-500"
          onClick={logout}
        >
          Logout <BiLogOut size={20} />
        </div>
      </div>
    </div>
  );
};

export default HeaderAccountDropdownInfo;
