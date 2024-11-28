"use client";
import PackagePriceComponents from "@/components/UpdateApi/PackagePriceComponents";
import { RiVipCrown2Fill, RiVipDiamondFill } from "react-icons/ri";
const APIPackageDisplay = () => {
  return (
    <div className="flex min-h-[calc(100%-150px)] items-center gap-[60px] 2xl:px-[175px] px-[20px] py-[30px] justify-center bg-[#F5F9FC]">
      <PackagePriceComponents
        price={"1.500.000"}
        titleCls="glow-word-blue"
        packageTitle="PRO"
        icon={RiVipCrown2Fill}
        buttonCls="gradient-blue-button"
      />
      <PackagePriceComponents
        price={"3.000.000"}
        titleCls="glow-word-purple"
        packageTitle="PREMIUM"
        isBestChoice
        icon={RiVipDiamondFill}
        buttonCls="gradient-pink-button"
      />
    </div>
  );
};

export default APIPackageDisplay;
