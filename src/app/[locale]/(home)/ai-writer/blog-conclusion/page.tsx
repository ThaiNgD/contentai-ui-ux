"use client";
import SaveContentComponent from "@/components/ContentComponent/SaveContentComponent";
import dynamic from "next/dynamic";
import { useState } from "react";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";
const CustomEditor = dynamic(
  () => import("@/components/CKEditorComponent/CustomEditor"),
  { ssr: false }
);

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
  return (
    <>
      <ChildHeader
        title="Kết bài Blog"
        description="Viết đoạn kết bài blog: tóm tắt, nhấn mạnh, kêu gọi hành động, > 300 từ"
      />
      <div className="flex flex-col md:grid md:grid-cols-[35%,calc(65%-30px)] justify-between flex-auto bg-[#F5F9FC] p-[10px] md:p-[40px] gap-[30px] ">
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
