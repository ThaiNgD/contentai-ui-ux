"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { aiWebsiteDescription } from "@/service/axios/AIWriterApi";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";

interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}

const InputContent = ({ setCkData }: InputProps) => {
  const formik = useFormik<IFormWebsiteDescription>({
    initialValues: {
      brandName: "",
      description: "",
      module: "",
      language: "",
    },
    onSubmit: async (values) => {
      await aiWebsiteDescription.create(values).then((values) => {
        console.log(values);
        setCkData(values.result);
      });
    },
  });
  return (
    <form
      id="form-submit"
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 p-[30px] shadow-md bg-white rounded-xl"
    >
      <InputField
        name={"brandName"}
        placeholder="Tên thương hiệu"
        title="Tên thương hiệu"
        clsTitle="font-bold mb-1 italic"
        className="h-[50px]"
        formik={formik}
      />
      <TextAreaField
        name={"description"}
        placeholder="Mô tả Web"
        title="Mô tả Web"
        clsTitle="font-bold mb-1 italic"
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
      <Button
        form="form-submit"
        type="submit"
        className="bg-blue-500 mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
      >
        Tạo nội dung
      </Button>
    </form>
  );
};

export default InputContent;
