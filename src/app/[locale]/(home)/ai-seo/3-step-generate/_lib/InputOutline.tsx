"use client";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { useAiCreateOutlineSEO } from "@/service/aiseo/3-step/useAiCreateOutlineSeo";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect } from "react";

interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
  title: string;
}

const InputOutline = ({ setCkData, title }: InputProps) => {
  const { data, isPending, mutate: setOutline } = useAiCreateOutlineSEO();
  const formik = useFormik({
    initialValues: {
      title: title,
      module: "",
      language: "",
    },
    onSubmit: async (values) => {
      setOutline(values);
      // Handle form submission
    },
  });

  useEffect(() => {
    if (data?.result) {
      setCkData(data.result);
    }
  }, [data]);
  return (
    <form
      id="form-submit"
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 bg-white p-[20px] shadow-xl rounded-xl"
    >
      <TextAreaField
        name={"title"}
        placeholder="Nhập tiêu đề"
        title="Tiêu đề bài viết"
        clsTitle="font-bold italic"
        className="h-[150px] !bg-[#F5F9FC] shadow-inner"
        clsTextArea="min-h-[50px]"
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
        className="bg-blue-500 w-fit mx-auto px-[50px] mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
      >
        {isPending ? (
          <div className="loading size-[24px]"></div>
        ) : (
          "Tạo Outline"
        )}
      </Button>
    </form>
  );
};

export default InputOutline;
