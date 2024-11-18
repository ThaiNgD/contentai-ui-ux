"use client";
import Avatar from "@/assets/images/avatar.jpg";
import { cn } from "@/helper/utils";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
const HeaderAccountDropdownInfo = () => {
  const [isShowAccountInfo, setIsShowAccountInfo] = useState(false);
  const handleToggleOpenAccountInfo = (): void => {
    setIsShowAccountInfo(true);
  };
  const handleToggleCloseAccountInfo = (): void => {
    setIsShowAccountInfo(false);
  };
  const router = useRouter();
  const path = useGetPathComponent();

  const logout = (): void => {
    router.push(`/${path.locale}/login`);
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
          "flex-col absolute right-0 top-[50px] z-50 border rounded-lg shadow-lg h-fit w-[225px] bg-white",
          isShowAccountInfo ? "flex" : "hidden"
        )}
        onMouseLeave={handleToggleCloseAccountInfo}
      >
        <div className="p-2 border-b flex flex-col items-end">
          <p className="text-base font-bold">Nguyễn Đình Thái</p>
          <span className="text-sm opacity-70">dinhthai1905@gmail.com</span>
        </div>
        <div className="flex flex-col items-end">
          {/* <div role="button" className="p-2 w-full text-end hover:bg-gray-200">
            Help
          </div> */}
          <div
            role="button"
            className="p-2 w-full text-end hover:bg-gray-200"
            onClick={logout}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAccountDropdownInfo;
