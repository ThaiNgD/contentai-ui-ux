import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import SaveContentComponent from "@/components/ContentComponent/SaveContentComponent";
interface ResultsAi {
  ckData: string;
}
const FormReport = ({ ckData }: ResultsAi) => {
  return (
    <form className="bg-white flex-auto shadow-lg p-[30px] flex flex-col items-center rounded-xl gap-3">
      <SaveContentComponent />
      <CustomEditor data={ckData} clsHeight="h-full" clsWidth="w-full" />
    </form>
  );
};

export default FormReport;
