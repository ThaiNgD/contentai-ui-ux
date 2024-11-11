import TextAreaField from "@/components/CustomField/TextAreaField";
import { Button } from "flowbite-react";

const FormInputContent = () => {
  return (
    <div className="flex flex-col px-[50px] gap-4">
      <div className="rounded-xl px-4 p-2 items-center flex gap-4 border">
        <label className="text-lg mb-0  font-bold dark:text-white text-black">
          Số từ của nội dung:
        </label>
        <span className="text-sm mb-0 opacity-60">0/10000</span>
      </div>
      <TextAreaField
        name=""
        placeholder="Nhập nội dung"
        clsTextArea="min-h-[200px] max-h-[500px]"
      />
      <Button className="rounded-full font-bold !text-xl bg-blue-500 shadow-lg hover:shadow-none hover:translate-y-0.5">
        Quét để Plagiarism
      </Button>
    </div>
  );
};

export default FormInputContent;
