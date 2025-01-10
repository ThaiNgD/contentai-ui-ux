import FolderDisplayComponent from "@/components/FolderComponent/FolderDisplayComponent";
import { MdKeyboardBackspace } from "react-icons/md";
const FolderDisplay = () => {
  return (
    <div className="flex items-center gap-4">
      <div
        className="p-3 h-fit text-gray-100 bg-blue-400 rounded-lg hover:bg-blue-600"
        role="button"
      >
        <MdKeyboardBackspace size={30} />
      </div>
      <FolderDisplayComponent
        folder_id=""
        title="Folder"
        time="1 tháng trước"
        clsContainerWidth="w-full"
        inFolderDisplay={true}
      />
    </div>
  );
};

export default FolderDisplay;
