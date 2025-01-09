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
      <div className="py-[40px] flex-auto bg-[#F5F9FC] px-[10px] md:px-[50px] flex flex-col gap-6 md:grid md:grid-cols-[35%,calc(65%-16px)] md:gap-4">
        <FormInputContent setCkData={setCkData} />
        <FormReport ckData={ckData} />
      </div>
    </>
  );
};

export default Page;
