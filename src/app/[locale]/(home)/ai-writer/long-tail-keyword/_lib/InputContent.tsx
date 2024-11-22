"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { aiLongTailKeyword } from "@/service/axios/AIWriterApi";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";
interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}
const InputContent = ({ setCkData }: InputProps) => {
  const formik = useFormik<IFormLongTailKeywords>({
    initialValues: {
      brandName: "",
      keywords: "",
      customerPortrait: "",
      module: "",
      language: "",
    },
    onSubmit: async (values) => {
      await aiLongTailKeyword.create(values).then((values) => {
        setCkData(values.result);
        console.log(values);
      });
      // Handle form submission
    },
  });
  return (
    <div className="flex p-[30px] overflow-y-auto  shadow-md bg-white rounded-xl flex-col h-full">
      <form
        id="form-submit"
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4"
      >
        <InputField
          name={"brandName"}
          placeholder="Thương hiệu"
          title="Thương hiệu"
          clsTitle="font-bold mb-1 italic"
          className="h-[50px] !bg-[#F5F9FC] shadow-inner"
          formik={formik}
        />
        <InputField
          name={"keywords"}
          placeholder="Từ khóa"
          title="Từ khóa"
          clsTitle="font-bold mb-1 italic"
          className="h-[50px] !bg-[#F5F9FC] shadow-inner"
          formik={formik}
        />
        <TextAreaField
          name={"customerPortrait"}
          placeholder="Chân dung khách hàng"
          title="Chân dung khách hàng"
          clsTitle="font-bold mb-1 italic"
          className="h-[100px] !bg-[#F5F9FC] shadow-inner"
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
