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
    aiModelName: "",
  });

  if (ckData) {
    console.log(ckData);
  }
  return (
    <>
      <ChildHeader
        title="Ý tưởng quảng cáo"
        description="Viết ý tưởng quảng cáo sáng tạo, mục tiêu, khách hàng, thông điệp, kênh, kêu gọi"
      />
      <div className="md:grid flex flex-col md:grid-cols-[35%,calc(65%-30px)] justify-between flex-auto bg-[#F5F9FC] md:p-[40px] p-[10px] gap-[30px] ">
        <InputContent setCkData={setCkData} />
        <div className="bg-white flex flex-col gap-2 shadow-lg  p-[32px] rounded-xl">
          <SaveContentComponent data={ckData} />
          <CustomEditor data={ckData.result} />
        </div>
      </div>
    </>
  );
};

export default Page;
