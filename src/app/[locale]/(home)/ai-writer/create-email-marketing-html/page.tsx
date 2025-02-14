"use client";
import dynamic from "next/dynamic";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";
const CustomEditor = dynamic(
  () => import("@/components/CKEditorComponent/CustomEditor"),
  { ssr: false }
);

const page = () => {
  return (
    <>
      <ChildHeader
        title="Tạo Email marketing HTML tùy chỉnh"
        description="Tạo mẫu email marketing HTML, tùy chỉnh với màu sắc, font, hình ảnh, và nội dung đáp ứng với mobile, desktop"
      />
      <div className="grid grid-cols-[35%,1fr,65%] h-[calc(100%-200px)] 2xl:px-[175px] px-[15px] py-[40px] gap-[30px] ">
        <InputContent />
        <div className="border-l"></div>
        <CustomEditor />
      </div>
    </>
  );
};

export default page;
