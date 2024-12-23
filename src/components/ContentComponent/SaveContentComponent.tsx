import { useFetchFolder } from "@/service/content-management/useFetchFolder";
import { useMemo } from "react";
import { MdSaveAs } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import InputField from "../CustomField/InputField";
import { SelectField } from "../CustomField/SelectField";

const SaveContentComponent = () => {
  const { data: folder } = useFetchFolder();
  const folder_option = useMemo(() => {
    return folder?.map((f) => {
      return { label: f.folder_name, value: f.folder_id };
    });
  }, [folder]);
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3">
        <InputField
          name=""
          placeholder="Tên document"
          className="border shadow-inner !bg-[#F1F9FC]"
        />
        <SelectField
          options={folder_option}
          name=""
          placeholder="Thư mục muốn lưu"
          height="37.81px"
          className="rounded-xl shadow-inner !w-[235.63px] !bg-[#F1F9FC]"
        />
      </div>
      <div className="flex gap-3">
        {/* <div className="p-2 rounded-lg shadow-inner bg-[#F1F9FC]">
          <FaDownload size={20} className="text-black" />
        </div> */}

        <div
          className="p-2 save-button hover:text-white duration-200 hover:-translate-y-0.5 hover:bg-blue-500 rounded-lg shadow-inner border bg-[#F1F9FC]"
          role="button"
        >
          <MdSaveAs size={20} />
        </div>
        <Tooltip anchorSelect=".save-button" place="top">
          Lưu Document
        </Tooltip>
      </div>
    </div>
  );
};

export default SaveContentComponent;
