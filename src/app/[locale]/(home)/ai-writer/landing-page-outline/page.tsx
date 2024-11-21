"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import { useState } from "react";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";
const Page = () => {
  const [ckData, setCkData] = useState("");
  return (
    <>
      <ChildHeader
        title="Dàn ý Landing Page"
        description="Tạo dan ý Landing Page giới thiệu, đặc điểm, đấnh giá, kêu gọi"
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
