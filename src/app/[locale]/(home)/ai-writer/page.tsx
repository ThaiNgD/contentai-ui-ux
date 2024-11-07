"use client";
import { useState } from "react";
import AISelector from "./_lib/AISelector";
import Header from "./_lib/Header";
import SelectorGroup from "./_lib/SelectorGroup";

export type SelectedType =
  | "all"
  | "business"
  | "seo-optimization"
  | "write-web-content"
  | "write-email";
const Page = () => {
  const [selectedType, setSelectedType] = useState<SelectedType>("all");
  return (
    <>
      <Header />
      <SelectorGroup setSelectedType={setSelectedType} />
      <AISelector type={selectedType} />
    </>
  );
};

export default Page;
