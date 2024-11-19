"use client";
import { useState } from "react";
import FormInputContent from "./_lib/FormInputContent";
import FormReport from "./_lib/FormReport";
import Header from "./_lib/Header";

const Page = () => {
  const [ckData, setCkData] = useState<string>("");

  return (
    <>
      <Header />
      <div className="py-[40px] flex-auto bg-[#F5F9FC] px-[50px] grid grid-cols-[35%,calc(65%-16px)] gap-4">
        <FormInputContent setCkData={setCkData} />
        <FormReport ckData={ckData} />
      </div>
    </>
  );
};

export default Page;
