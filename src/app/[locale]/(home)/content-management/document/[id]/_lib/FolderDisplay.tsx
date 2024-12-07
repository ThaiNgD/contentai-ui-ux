import FolderDisplayComponent from "@/components/ContentComponent.tsx/FolderDisplayComponent";
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
        title="Folder"
        time="1 tháng trước"
        clsContainerWidth="w-full"
      />
    </div>
  );
};

export default FolderDisplay;
