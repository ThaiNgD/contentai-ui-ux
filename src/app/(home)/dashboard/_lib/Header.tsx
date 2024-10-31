"use client";
import { TbLayoutDashboardFilled } from "react-icons/tb";
const Header = () => {
  return (
    <div className="flex items-center gap-5 mb-5">
      <TbLayoutDashboardFilled className="text-[#18164C]" size={40} />
      <span className="text-[#18164C] text-2xl font-bold">Dashboard</span>
    </div>
  );
};

export default Header;
