import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import configSelectTone from "@/config/configSelectTone";
import { useAiArticle } from "@/service/article/useAiArticle";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";

interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}

const FormInputContent = ({ setCkData }: InputProps) => {
  const { mutate: mutateFn, data, isPending } = useAiArticle();
  const formik = useFormik<IFormAiArticle>({
    initialValues: {
      keyword: "",
      module: "",
      tone: "",
      language: "",
      range: 500,
    },
    onSubmit: (values) => {
      mutateFn(values);
    },
  });
  useEffect(() => {
    if (isPending) {
      setCkData('<p className="loader"></p>');
    }
    if (data?.result) {
      setCkData(data?.result);
    }
  }, [data, isPending]);
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
        {isPending ? (
          <div className="loading size-[24px]"></div>
        ) : (
          "Tạo bài viết"
        )}
      </Button>
    </form>
  );
};

export default FormInputContent;
