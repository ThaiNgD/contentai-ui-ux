"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import SaveContentComponent from "@/components/ContentComponent/SaveContentComponent";
import { useState } from "react";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";
const Page = () => {
  const [ckData, setCkData] = useState<IResult>({
    message: "",
    statusCode: "",
    active: false,
    result: "",
    tokenInput: "",
    tokenOutput: "",
    aiModelName:"",
  });
  return (
    <>
      <ChildHeader
        title="Công thức FAB - Tối ưu hóa nội dung tiếp thị"
        description="Tạo bài viết Facebook cho thương hiệu, nhấn mạnh đặc điểm, ưu điểm và lợi ích của sản phẩm/dịch vụ"
      />
      <div className="grid grid-cols-[35%,calc(65%-30px)] justify-between flex-auto bg-[#F5F9FC] px-[40px] py-[40px] gap-[30px] ">
        <InputContent setCkData={setCkData} />
        <div className="bg-white flex flex-col gap-2 shadow-lg  p-[32px] rounded-xl">
        <SaveContentComponent data={ckData}/>
        <CustomEditor data={ckData.result} />
        </div>
      </div>
    </>
  );
};

export default Page;
