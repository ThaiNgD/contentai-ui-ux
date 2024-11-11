import TextAreaField from "@/components/CustomField/TextAreaField";
import { Button } from "flowbite-react";

const FormInputAudio = () => {
  return (
    <div className="flex h-full flex-col bg-white shadow-lg rounded-xl p-[25px] gap-4">
      <div className="flex gap-2">
        <h1 className="text-lg font-bold">AI Speech To Text</h1>
      </div>
      <div className="rounded-xl px-4 p-3 items-center flex gap-3 border">
        <label className="text-sm mb-0 font-bold dark:text-white text-black">
          Số từ của nội dung:
        </label>
        <span className="text-sm mb-0 opacity-60">0/10000</span>
      </div>
      <TextAreaField
        name=""
        placeholder="Nhập nội dung"
        clsTextArea="min-h-[200px] max-h-[400px]"
      />
      <Button className="rounded-full border-blue-500 font-bold !text-xl bg-blue-500 shadow-lg hover:shadow-none hover:translate-y-0.5">
        Quét để Plagiarism
      </Button>
    </div>
  );
};

export default FormInputAudio;
