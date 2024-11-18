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
        title="Outline Trang chủ - Tăng thứ hạng SEO một cách hiệu quả"
        description="Xây dụng cấu trúc SILO chi tiết cho trang web với từ khóa dành cho doanh nghiệp, tối ưu hóa SEO để leo vị trí hàng đầu trên Google"
      />
      <div className="grid grid-cols-[35%,1fr,65%] h-[calc(100%-200px)] 2xl:px-[175px] px-[15px] py-[40px] gap-[30px] ">
        <InputContent setCkData={setCkData} />
        <div className="border-l"></div>
        <CustomEditor data={ckData} />
      </div>
    </>
  );
};

export default Page;
