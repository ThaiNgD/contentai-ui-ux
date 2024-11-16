import CustomEditor from "@/components/CKEditorComponent/CustomEditor";

const FormReport = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white flex-auto shadow-lg p-[50px] flex flex-col items-center gap-2 rounded-xl">
        <h1 className="text-xl font-bold">Speech To Text</h1>
        <CustomEditor clsHeight="h-full" clsWidth="w-full" />
      </div>
    </div>
  );
};

export default FormReport;
