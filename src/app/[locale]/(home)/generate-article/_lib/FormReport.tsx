import dynamic from "next/dynamic";
const CustomEditor = dynamic(
  () => import("@/components/CKEditorComponent/CustomEditor"),
  { ssr: false }
);
// import SaveContentComponent from "@/components/ContentComponent/SaveContentComponent";
interface ResultsAi {
  ckData: string;
}
const FormReport = ({ ckData }: ResultsAi) => {
  return (
    <div className="bg-white flex-auto shadow-lg p-[30px] flex flex-col items-center rounded-xl gap-3">
      {/* <SaveContentComponent data={ckData} /> */}
      <CustomEditor data={ckData} clsHeight="h-full" clsWidth="w-full" />
    </div>
  );
};

export default FormReport;
