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
        title="Từ khóa dài"
        description="Tạo bảng từ khóa: từ khóa, lượt tìm kiếm, tiêu đề, ghi chú"
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
