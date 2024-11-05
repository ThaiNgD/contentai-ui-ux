"use client";
import useTranslation from "next-translate/useTranslation";
import { TbLayoutDashboardFilled } from "react-icons/tb";
const Header = () => {
  const { t } = useTranslation();
  const hello = t("hello");
  return (
    <div className="flex items-center gap-5 mb-5">
      <TbLayoutDashboardFilled className="text-[#18164C]" size={40} />
      <span className="text-[#18164C] text-2xl font-bold">
        Dashboard {hello}
      </span>
    </div>
  );
};

export default Header;
