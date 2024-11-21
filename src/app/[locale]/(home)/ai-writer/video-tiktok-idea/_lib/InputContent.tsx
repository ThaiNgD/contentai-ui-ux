"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { aiTiktokVideoIdeas } from "@/service/axios/AIWriterApi";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";
interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}
const InputContent = ({ setCkData }: InputProps) => {
  const formik = useFormik<IFormTikTokVideoIdeas>({
    initialValues: {
      brandName: "",
      productDescription: "",
      module: "",
      language: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      await aiTiktokVideoIdeas.create(values).then((values) => {
        console.log(values);
        setCkData(values.result);
      });
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex p-[30px] shadow-md bg-white rounded-xl flex-col gap-4"
    >
      <InputField
        name={"brandName"}
        placeholder="Thương hiệu"
        title="Thương hiệu"
        clsTitle="font-bold italic"
        className="h-[50px]"
        formik={formik}
      />
      <TextAreaField
        name={"productDescription"}
        placeholder="Mô tả sản phẩm"
        title="Mô tả sản phẩm"
        clsTitle="font-bold italic"
        className="h-[125px]"
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
        className="bg-blue-500 mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
      >
        Tạo nội dung
      </Button>
    </form>
  );
};

export default InputContent;
