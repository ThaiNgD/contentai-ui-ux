"use client";
import { TbLayoutDashboardFilled } from "react-icons/tb";
const Header = () => {
  return (
    <div className="flex items-center gap-5 my-[30px]">
      <TbLayoutDashboardFilled
        className="text-[#18164C] dark:text-white"
        size={40}
      />
      <span className="text-[#18164C] text-2xl dark:text-white font-bold">
        Dashboard
      </span>
    </div>
  );
};

export default Header;
