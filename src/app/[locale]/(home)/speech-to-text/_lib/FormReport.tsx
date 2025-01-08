import CustomEditor from "@/components/CKEditorComponent/CustomEditor";

const FormReport = ({ transcribedText }: { transcribedText: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white flex-auto shadow-lg p-[20px] md:p-[50px] flex flex-col items-center gap-2 rounded-xl">
        {/* <h1 className="text-xl font-bold">Speech To Text</h1> */}
        <CustomEditor
          clsHeight="h-full"
          clsWidth="w-full"
          data={transcribedText}
        />
        <div></div>
      </div>
    </div>
  );
};

export default FormReport;
