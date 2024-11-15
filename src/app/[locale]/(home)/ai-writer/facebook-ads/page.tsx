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
        title="Quảng cáo Facebook"
        description="Tạo nội dung quảng cái trên Facebook 600 từ, tuyên tải giá trị thương hiệu và mô tả sản phẩm"
      />
      <div className="grid grid-cols-[35%,1fr,65%] h-[calc(100%-200px)] px-[175px] py-[40px] gap-[30px] ">
        <InputContent setCkData={setCkData} />
        <div className="border-l"></div>
        <CustomEditor data={ckData} />
      </div>
    </>
  );
};

export default Page;
