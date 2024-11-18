import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import InputField from "@/components/CustomField/InputField";
import { FaDownload } from "react-icons/fa";
import { MdSaveAs } from "react-icons/md";
interface ResultsAi {
  ckData: string;
}
const FormReport = ({ ckData }: ResultsAi) => {
  return (
    <form className="bg-white flex-auto shadow-lg p-[30px] flex flex-col items-center rounded-xl gap-3">
      <div className="flex w-full justify-between">
        <div className="flex gap-3">
          <InputField
            name=""
            className="border-none shadow-inner !bg-[#F1F9FC]"
          />
          <InputField
            name=""
            className="border-none shadow-inner !bg-[#F1F9FC]"
          />
        </div>
        <div className="flex gap-3">
          <div className="p-2 rounded-lg shadow-inner bg-[#F1F9FC]">
            <FaDownload size={20} className="text-black" />
          </div>
          <div className="p-2 rounded-lg shadow-inner bg-[#F1F9FC]">
            <MdSaveAs size={20} className="text-black" />
          </div>
        </div>
      </div>
      <CustomEditor data={ckData} clsHeight="h-full" clsWidth="w-full" />
    </form>
  );
};

export default FormReport;
