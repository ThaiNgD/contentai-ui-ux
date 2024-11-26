import { MdSaveAs } from "react-icons/md";
import InputField from "../CustomField/InputField";

const SaveContentComponent = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3">
        <InputField
          name=""
          placeholder="Tên document"
          className="border shadow-inner !bg-[#F1F9FC]"
        />
        <InputField
          name=""
          placeholder="Thư mục muốn lưu"
          className="border shadow-inner !bg-[#F1F9FC]"
        />
      </div>
      <div className="flex gap-3">
        {/* <div className="p-2 rounded-lg shadow-inner bg-[#F1F9FC]">
          <FaDownload size={20} className="text-black" />
        </div> */}
        <div
          className="p-2 hover:text-white duration-200 hover:-translate-y-0.5 hover:bg-blue-500 rounded-lg shadow-inner border bg-[#F1F9FC]"
          role="button"
        >
          <MdSaveAs size={20} />
        </div>
      </div>
    </div>
  );
};

export default SaveContentComponent;
