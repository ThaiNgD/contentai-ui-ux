"use client";
import { cn } from "@/helper/utils";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
const InputEmailField = () => {
  const [isFocus, setIsFocus] = useState(false);
  const onClickInput = (): void => {
    setIsFocus((prev) => !prev);
  };
  return (
    <div className="flex relative border rounded-lg w-[full] h-[50px]  ">
      <input
        id="input-search"
        type="text"
        placeholder="Nhập địa chỉ email"
        className="h-full px-[40px] bg-white focus:bg-white w-full rounded-lg focus:!shadow-inner !shadow-blue-600 !border-none focus:!border-none"
        onFocus={onClickInput}
        onBlur={onClickInput}
      />
      <div
        className={cn(
          "bg-white absolute right-4 top-[14px] ",
          isFocus && "hidden"
        )}
      >
        <HiOutlineMail size={22} />
      </div>
    </div>
  );
};

export default InputEmailField;
