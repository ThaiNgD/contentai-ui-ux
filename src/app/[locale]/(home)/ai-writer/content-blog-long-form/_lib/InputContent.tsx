"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { useAiContentBlogLongForm } from "@/service/aiwriter/seo_optimization/useAiContentBlogLongForm";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect } from "react";
interface InputProps {
setCkData: Dispatch<SetStateAction<IResult>>;
}
const InputContent = ({ setCkData }: InputProps) => {
    const { data, mutate: mutateFn, isPending } = useAiContentBlogLongForm();
  
  const formik = useFormik<IFormContentBlogLongForm>({
    initialValues: {
      title: "",
      keywords: "",
      outline: "",
      module: "",
      language: "",
    },
    onSubmit: (values) => {
      mutateFn(values);
    },
  });

    useEffect(() => {
      if (data) {
        setCkData(data);
      }
    }, [data]);

  return (
    <div className="flex p-[30px] shadow-md bg-white rounded-xl flex-col h-full">
      <form
        id="form-submit"
        onSubmit={formik.handleSubmit}
        className="flex flex-col overflow-y-auto  gap-4"
      >
        <InputField
          name={"keywords"}
          placeholder="Từ khóa"
          title="Từ khóa"
          clsTitle="font-bold mb-1 italic"
          className="h-[50px] shadow-inner !bg-[#F5F9FC]"
          formik={formik}
        />
        <InputField
          name={"title"}
          placeholder="Tiêu đề"
          title="Tiêu đề"
          clsTitle="font-bold mb-1 italic"
          className="h-[50px] shadow-inner !bg-[#F5F9FC]"
          formik={formik}
        />
        <TextAreaField
          name={"outline"}
          placeholder="Outline"
          title="Ounline"
          clsTitle="font-bold mb-1 italic"
          className="h-[150px] shadow-inner !bg-[#F5F9FC] min-h-[50px] max-h-[400px]"
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
      </form>
      <Button
        form="form-submit"
        type="submit"
        className="bg-blue-500 mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
      >
        {isPending ? (
          <div className="size-[24px] loading"></div>
        ) : (
          "Tạo nội dung"
        )}
      </Button>
    </div>
  );
};

export default InputContent;
