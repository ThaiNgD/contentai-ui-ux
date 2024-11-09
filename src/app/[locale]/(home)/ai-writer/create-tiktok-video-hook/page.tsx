"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";

const page = () => {
  return (
    <>
      <ChildHeader
        title="Tạo câu Hook cho video Tiktok"
        description="Đề xuất 10 câu Hook cho Video quảng cáo dựa trên thông tin thương hiệu và từ khóa mong muốn. Điều chỉnh các tiêu đề để thu hút và gây tò mò cho người xem thoe gợi ý đã cho"
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
