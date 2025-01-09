"use client";
import { cn } from "@/helper/function";
import { Button } from "flowbite-react";
import { IconType } from "react-icons";

interface PackagePriceComponentsProps {
  packageTitle: string;
  titleCls?: string;
  buttonCls?: string;
  price: string;
  currency?: string;
  features?: string[];
  discount?: number;
  promotion?: string;
  icon?: IconType;
  isBestChoice?: boolean;
}

const PackagePriceComponents = ({
  packageTitle,
  titleCls,
  price,
  icon,
  isBestChoice,
  buttonCls,
}: // currency,
// features,
// discount,
// promotion,
PackagePriceComponentsProps) => {
  const PackageIcon = icon;
  const onClickPackage = (): void => {};
  return (
    <div className="w-[400px] relative h-[600px] flex flex-col gap-[20px] bg-white rounded-xl shadow-lg p-[40px] justify-between">
      {isBestChoice && (
        <div className="ribbon-wrapper-purple">
          <div className="ribbon-purple be-vietnam-pro-light">Tối ưu nhất</div>
        </div>
      )}
      <div className=" border-e-pink-50">
        <p
          className={cn(
            "!text-[35px] flex items-center gap-2 be-vietnam-pro-extrabold text-blue-600",
            titleCls
          )}
        >
          {packageTitle} {PackageIcon && <PackageIcon />}
        </p>
        <span className=" text-[25px] font-bold be-vietnam-pro-bold">
          {price} VNĐ<span className="text-sm font-light">/năm</span>
        </span>
        <p className="mt-[20px]">Bạn nhận được gì khi mua gói sản phẩm:</p>
      </div>
      <Button
        className={cn("gradient-button  be-vietnam-pro-extrabold", buttonCls)}
        onClick={onClickPackage}
      >
        <span className="!text-[18px]">Mua gói</span>
      </Button>
    </div>
  );
};

export default PackagePriceComponents;
