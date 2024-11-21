"use client";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { aiRephraseContent } from "@/service/axios/AIWriterApi";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";

interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}

const InputContent = ({ setCkData }: InputProps) => {
  const formik = useFormik<IFormRephraseContent>({
    initialValues: {
      rewrite: "",
      module: "",
      language: "",
    },
    onSubmit: async (values) => {
      await aiRephraseContent.create(values).then((values) => {
        console.log(values);
        setCkData(values.result);
      });
    },
  });
  return (
    <div className="flex flex-col h-full p-[30px] shadow-md bg-white rounded-xl">
      <form
        id="form-submit"
        onSubmit={formik.handleSubmit}
        className="flex flex-col overflow-y-auto  gap-4"
      >
        <TextAreaField
          name={"rewrite"}
          placeholder="Đoạn văn cần viết lại"
          title="Đoạn văn cần viết lại"
          clsTitle="font-bold italic"
          className="h-[150px]"
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
        Tạo nội dung
      </Button>
    </div>
  );
};

export default InputContent;
