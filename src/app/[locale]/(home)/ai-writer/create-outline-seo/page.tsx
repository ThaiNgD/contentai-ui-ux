"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";

const page = () => {
  return (
    <>
      <ChildHeader
        title="Tạo Outline SEO - Tối ưu từ khóa"
        description="Tạo dàn bài với 9 tiêu đề phụ, mỗi tiêu đê phụ gồm 2-3 điểm phụ, sử dụng từ khóa để gg hiểu rõ cấu trúc nội dung"
      />
      <div className="grid grid-cols-[35%,1fr,65%] h-[calc(100%-200px)] px-[175px] py-[40px] gap-[30px] ">
        <InputContent />
        <div className="border-l"></div>
        <CustomEditor />
      </div>
    </>
  );
};

export default page;
