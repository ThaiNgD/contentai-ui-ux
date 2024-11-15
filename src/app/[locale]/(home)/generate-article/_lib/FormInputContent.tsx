import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import configSelectTone from "@/config/configSelectTone";
import { aiArticle } from "@/service/axios/aiArticleApi";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";
import { AiFillEdit } from "react-icons/ai";

interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}

const FormInputContent = ({ setCkData }: InputProps) => {
  const formik = useFormik<IFormAiArticle>({
    initialValues: {
      keyword: "",
      module: "",
      tone: "",
      language: "",
      range: 500,
    },
    onSubmit: async (values) => {
      console.log(values);

      await aiArticle.create(values).then((values) => {
        setCkData(values.result);
        console.log(values);
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
        <h1 className="text-lg font-bold">Generate Article</h1>
      </div>

      {/* <div className="rounded-xl px-4 p-3 bg-[#F1F9FC] items-center flex gap-3 border">
        <label className="text-sm mb-0 font-bold dark:text-white text-black">
          Số từ của nội dung:
        </label>
        <span className="text-sm mb-0 opacity-60">0/10000</span>
      </div> */}
      <TextAreaField
        name="keyword"
        placeholder="Nhập từ khóa"
        clsTextArea="min-h-[200px] shadow-inner !bg-[#F1F9FC] max-h-[400px] "
        formik={formik}
      />
      <InputField
        name="range"
        type="number"
        min={500}
        max={3000}
        placeholder="Nhập độ dài bài viết (500-3000 từ) "
        className="h-[50px] shadow-inner !bg-[#F1F9FC] "
        formik={formik}
      />
      <SelectField
        clsLabelWrapper="font-bold italic"
        label="Tông giọng"
        name="tone"
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
        form="form-submit"
        type="submit"
        className="rounded-full self-center w-[300px] border-blue-500 font-bold !text-xl bg-blue-500 mt-1 shadow-lg hover:shadow-none hover:translate-y-0.5"
      >
        Tạo bài viết
      </Button>
    </form>
  );
};

export default FormInputContent;
