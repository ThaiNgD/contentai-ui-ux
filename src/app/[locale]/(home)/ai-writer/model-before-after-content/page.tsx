"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";

const page = () => {
  return (
    <>
      <ChildHeader
        title="Viết nội dung mô hình trước-sau"
        description="Quảng cáo mô hinh trước - sau: tư vấn đề đến giải pháp với sản phẩm/dịch vụ"
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
