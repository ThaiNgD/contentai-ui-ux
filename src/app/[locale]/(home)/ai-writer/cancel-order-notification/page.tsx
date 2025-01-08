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
        title="Email thông báo hủy đơn hàng"
        description="Viết email thông báo đơn hàng bị hủy với nội dung cụ thể"
      />
      <div className="flex flex-col md:grid md:grid-cols-[35%,calc(65%-30px)] justify-between flex-auto bg-[#F5F9FC] md:p-[40px] p-[10px] gap-[30px]">
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
