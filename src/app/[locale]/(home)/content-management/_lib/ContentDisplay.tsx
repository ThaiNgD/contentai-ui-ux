import RecentLaunchComponent from "@/components/FolderComponent/RecentLaunchComponent";
import { useGetAllDocument } from "@/service/document/useGetAllDocument";

const ContentDisplay = () => {
  const { isPending, data: documents } = useGetAllDocument();

  return (
    <div className="flex mt-[40px] flex-wrap justify-evenly gap-5">
    {!isPending ? (
      documents?.data.map((document, index) => (
        <RecentLaunchComponent key={index} aiModelName={document.aiModelName} title={document.document_name} content={document.content} date={document.created_at} documentId={document.document_id} isFolderDisplay />
      ))
    ) : (
      <>
        <RecentLaunchComponent title="Folder" isFolderDisplay />
        <RecentLaunchComponent title="Folder" isFolderDisplay />
        <RecentLaunchComponent title="Folder" isFolderDisplay />
        <RecentLaunchComponent title="Folder" isFolderDisplay />
        <RecentLaunchComponent title="Folder" isFolderDisplay />
        <RecentLaunchComponent title="Folder" isFolderDisplay />
        <RecentLaunchComponent title="Folder" isFolderDisplay />
        <RecentLaunchComponent title="Folder" isFolderDisplay />
        <RecentLaunchComponent title="Folder" isFolderDisplay />
      </>
    )}
  </div>
  
  );
};

export default ContentDisplay;
