"use client";
import FolderDisplay from "./_lib/FolderDisplay";
import Header from "./_lib/Header";
import NoTextDocument from "./_lib/NoTextDocument";
import { useEffect, useState } from "react";
import { useGetDocumentByFolder } from "@/service/document/useGetDocumentByFolder";
import RecentLaunchComponent from "@/components/ContentComponent/RecentLaunchComponent";

export default function Page({
  params,
}: {
  params: Promise<{ id: string; title: string  }>;
}) {
  const [id, setId] = useState<string | undefined>(undefined);
  const { data } = useGetDocumentByFolder(String(id));
  const storedTitle = sessionStorage.getItem("folderTitle");
  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;
      setId(String(id));
    };
    fetchData();
  }, [params]);
  return (
    <>
      <Header title={`Folder ${storedTitle}`} />
      <hr />
      <div className="flex-auto flex flex-col my-[50px] 2xl:px-[175px] px-[15px]">
        <FolderDisplay />
    <div className="flex mt-[40px] flex-wrap justify-evenly gap-5">
{
   data?.map((document, index)=>(
  <RecentLaunchComponent key={index} aiModelName={document.aiModelName} title={document.document_name} content={document.content} date={document.created_at} documentId = {document.document_id}/>
  
))
}
</div>

        <div className="flex-auto flex flex-col mb-[40px] gap-3 items-center justify-center">
          {!data && <NoTextDocument />}
        </div>
      </div>
    </>
  );
}
