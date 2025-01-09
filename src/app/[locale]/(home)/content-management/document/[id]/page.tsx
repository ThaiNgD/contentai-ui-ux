"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import { useGetDocumentById } from "@/service/document/useGetDocumentById";
import { useEffect, useState } from "react";
import Header from "./_lib/Header";

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
