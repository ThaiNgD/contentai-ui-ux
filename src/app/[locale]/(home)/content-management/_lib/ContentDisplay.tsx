import RecentLaunchComponent from "@/components/FolderComponent/RecentLaunchComponent";
import { useGetAllDocument } from "@/service/document/useGetAllDocument";

const ContentDisplay = () => {
  const { isPending, data: documents } = useGetAllDocument();

  return (
    <div className="flex mt-[40px] justify-normal mx-auto flex-wrap gap-5">
      {!isPending ? (
        documents?.data.map((document, index) => (
          <RecentLaunchComponent
            key={index}
            aiModelName={document.aiModelName}
            title={document.document_name}
            content={document.content}
            date={document.created_at}
            documentId={document.document_id}
            isFolderDisplay
            tooltip={{
              tooltip_content: document.document_name,
              tooltip_id: document.document_id,
            }}
          />
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
