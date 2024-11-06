import FolderDisplayComponent from "@/components/ContentComponent.tsx/FolderDisplayComponent";

const FolderDisplay = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <FolderDisplayComponent title="Folder" time="10 month ago" />
      <FolderDisplayComponent title="Folder" time="10 month ago" />
      <FolderDisplayComponent title="Folder" time="10 month ago" />
      <FolderDisplayComponent title="Folder" time="10 month ago" />
    </div>
  );
};

export default FolderDisplay;
