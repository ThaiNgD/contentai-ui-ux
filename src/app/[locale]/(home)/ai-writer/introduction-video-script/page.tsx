"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";

import { useState } from "react";
const Page = () => {
  const [ckData, setCkData] = useState("");
  return (
    <>
      <ChildHeader
        title="Kịch bản Video giới thiệu"
        description="Viết kịch bản Video giới thiệu: câu chuyện, cảnh quay, lời dẫn, nhịp độ"
      />
      <div className="grid grid-cols-[35%,calc(65%-30px)] justify-between flex-auto bg-[#F5F9FC] px-[40px] py-[40px] gap-[30px] ">
        <InputContent setCkData={setCkData} />
        <div className="bg-white shadow-lg  p-[32px] rounded-xl">
          <CustomEditor data={ckData} />
        </div>
      </div>
    </>
  );
};

export default Page;
