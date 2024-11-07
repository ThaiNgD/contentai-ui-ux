"use client";
import ChildHeader from "../_lib/ChildHeader";
import CKEditor from "./_lib/CKEditor";
import InputContent from "./_lib/InputContent";

const page = () => {
  return (
    <>
      <ChildHeader
        title="Phân tích ý định người dùng"
        description="Phân tích ý định người dùng, từ khóa, ý định, tiêu đề"
      />
      <div className="grid grid-cols-[35%,1fr,65%] h-[calc(100%-200px)] px-[175px] py-[40px] gap-[30px] ">
        <InputContent />
        <div className="border-l"></div>
        <CKEditor />
      </div>
    </>
  );
};

export default page;
