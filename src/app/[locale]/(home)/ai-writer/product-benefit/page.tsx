"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import SaveContentComponent from "@/components/ContentComponent/SaveContentComponent";
import { useState } from "react";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";
const Page = () => {
  const [ckData, setCkData] = useState("");
  return (
    <>
      <ChildHeader
        title="Lợi ích sản phẩm"
        description="Viết mô tả sản phẩm theo mô hình lợi ích, đặc tính, ưu điểm và thương hiệu và mô tả"
      />
      <div className="grid grid-cols-[35%,calc(65%-30px)] justify-between flex-auto bg-[#F5F9FC] px-[40px] py-[40px] gap-[30px] ">
        <InputContent setCkData={setCkData} />
        <div className="bg-white flex flex-col gap-2 shadow-lg  p-[32px] rounded-xl">
          <SaveContentComponent />
          <CustomEditor data={ckData} />
        </div>
      </div>
    </>
  );
};

export default Page;
