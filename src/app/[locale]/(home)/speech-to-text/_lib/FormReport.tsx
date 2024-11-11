import CustomEditor from "@/components/CKEditorComponent/CustomEditor";

const FormReport = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* <div className="bg-white shadow-lg p-[30px] flex flex-col items-center rounded-xl">
        <h1 className="text-xl font-bold">AI Content Report</h1>
      </div> */}
      <div className="bg-white flex-auto shadow-lg p-[50px] flex flex-col items-center rounded-xl">
        <CustomEditor clsHeight="h-full" clsWidth="w-full" />
      </div>
    </div>
  );
};

export default FormReport;
