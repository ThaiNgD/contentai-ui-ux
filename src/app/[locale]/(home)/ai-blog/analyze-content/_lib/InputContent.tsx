"use client";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { useAiContentAnalysis } from "@/service/aiblog/useAiContentAnalysis";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect } from "react";

interface InputProps {
  setCkData: Dispatch<SetStateAction<IResult>>;
}

const InputContent = ({ setCkData }: InputProps) => {
  const { mutate: aiContentAnalysis, data, isPending } = useAiContentAnalysis();
  const formik = useFormik<IFormContentAnalys>({
    initialValues: {
      content: "",
      module: "",
      language: "",
    },
    onSubmit: (values) => {
      aiContentAnalysis(values);
    },
  });

  useEffect(() => {
    if (data) {
      setCkData(data);
    }
  }, [data]);

  return (
    <form
      id="form-submit"
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 p-[30px] shadow-md bg-white rounded-xl"
    >
      <TextAreaField
        name={"content"}
        placeholder="Nhập nội dung"
        title="Nội dung cần kiểm tra"
        clsTitle="font-bold italic"
        className="h-[150px] !bg-[#F5F9FC] shadow-inner"
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
        className="bg-blue-500 mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
      >
        {isPending ? (
          <div className="loading size-[24px]"></div>
        ) : (
          "Phân tích nội dung"
        )}
      </Button>
    </form>
  );
};

export default InputContent;
