"use client";
import dynamic from "next/dynamic";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";
const CustomEditor = dynamic(
  () => import("@/components/CKEditorComponent/CustomEditor"),
  { ssr: false }
);

import SaveContentComponent from "@/components/ContentComponent/SaveContentComponent";
import { useState } from "react";
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
        title="Kịch bản Video giới thiệu"
        description="Viết kịch bản Video giới thiệu: câu chuyện, cảnh quay, lời dẫn, nhịp độ"
      />
      <div className="grid grid-cols-[35%,calc(65%-30px)] justify-between flex-auto bg-[#F5F9FC] px-[40px] py-[40px] gap-[30px] ">
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
