"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import { useState } from "react";
import InputPost from "./InputPost";

const InputPostForm = () => {
  const [ckData, setCkData] = useState("");

  return (
    <div className="grid grid-cols-[35%,65%] h-[calc(100%-200px)] px-[100px] pr-[125px] py-[40px] gap-[30px] ">
      <InputPost setCkData={setCkData} />
      <div className="flex flex-col justify-between bg-white p-[20px] shadow-xl rounded-xl">
        <CustomEditor data={ckData} />
      </div>
    </div>
  );
};

export default InputPostForm;
