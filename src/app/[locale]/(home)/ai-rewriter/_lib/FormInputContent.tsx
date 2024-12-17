import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import configSelectTone from "@/config/configSelectTone";
import { aiRewriter } from "@/service/axios/aiRewriterApi";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";
import { AiFillEdit } from "react-icons/ai";

interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}

const FormInputContent = ({ setCkData }: InputProps) => {
  //const { mutate: mutateFN, data } = useAiBlogCallAction();
  const formik = useFormik<IFormAiReWriter>({
    initialValues: {
      request: "",
      content: "",
      language: "",
      module: "",
    },
    onSubmit: async (values) => {
      await aiRewriter.create(values).then((values) => {
        setCkData(values.result);
      });
    },
  });

  return (
    <form
      id="form-submit"
      onSubmit={formik.handleSubmit}
      className="flex h-full flex-col bg-white shadow-lg rounded-xl p-[25px] gap-4"
    >
      <div className="flex gap-2 items-center">
        <div className="p-2 rounded-lg bg-gray-200">
          <AiFillEdit size={20} className="text-black" />
        </div>
        <h1 className="text-lg font-bold">AI Rewriter</h1>
      </div>

      <div className="rounded-xl px-4 p-3 bg-[#F1F9FC] items-center flex gap-3 border">
        <label className="text-sm mb-0 font-bold dark:text-white text-black">
          Số từ của nội dung:
        </label>
        <span className="text-sm mb-0 opacity-60">
          {formik.values.content.length}
        </span>
      </div>
      <TextAreaField
        name="content"
        placeholder="Nhập nội dung"
        clsTextArea="min-h-[200px] !bg-[#F1F9FC] shadow-inner max-h-[400px] "
        formik={formik}
      />
      <SelectField
        clsLabelWrapper="font-bold italic"
        label="Tông giọng"
        name="request"
        options={configSelectTone}
        formik={formik}
      />
      <SelectField
        clsLabelWrapper="font-bold italic"
        label="Model"
        name="module"
        options={configModuleSelector}
        formik={formik}
      />
      <SelectField
        clsLabelWrapper="font-bold italic"
        label="Ngôn ngữ"
        name="language"
        options={configLanguageSelector}
        formik={formik}
      />
      <Button
        type="submit"
        className="rounded-full self-center w-[300px] border-blue-500 font-bold !text-xl bg-blue-500 mt-1 shadow-lg hover:shadow-none hover:translate-y-0.5"
      >
        Rewrite
      </Button>
    </form>
  );
};

export default FormInputContent;
