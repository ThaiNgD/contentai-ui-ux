"use client";
import { useGetDocumentById } from "@/service/document/useGetDocumentById";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Header from "./_lib/Header";
const CustomEditor = dynamic(
  () => import("@/components/CKEditorComponent/CustomEditor"),
  { ssr: false }
);

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  // const [documentDetail, setDocumentDetail] = useState<IDocument | undefined>(undefined);
  const [id, setId] = useState<string | undefined>(undefined);

  // Khi params có sẵn, set id
  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;
      setId(id);
    };
    fetchData();
  }, [params]);

  // Lấy dữ liệu tài liệu khi id đã có
  const { data } = useGetDocumentById(id || "1");

  return (
    <>
      <Header title={`${data?.document_name}`} />
      <hr />
      <div className="flex-auto flex flex-col my-[50px] 2xl:px-[175px] px-[15px]">
        {/* <FolderDisplay /> */}
        <CustomEditor data={data?.content} clsHeight="h-[700px]" />
      </div>
    </>
  );
}
