"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";

const page = () => {
  return (
    <>
      <ChildHeader
        title="Tạo bài Blog chi tiết"
        description="Tạo bài blog dài và phần FAQ, bao gồm tiêu đề, bảng, hình ảnh (marksdown), với từ khóa chính"
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
