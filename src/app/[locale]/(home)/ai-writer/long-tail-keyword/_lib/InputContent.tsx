"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { Button } from "flowbite-react";
import { useFormik } from "formik";

const InputContent = () => {
  const formik = useFormik({
    initialValues: {
      brand: "",
      keyword: "",
      customer_description: "",
      module: "",
      language: "",
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });
  return (
    <div className="flex p-[30px] shadow-md bg-white rounded-xl flex-col h-full">
      <form
        id="form-submit"
        onSubmit={formik.handleSubmit}
        className="flex flex-col overflow-y-auto  gap-4"
      >
        <InputField
          name={"brand"}
          placeholder="Thương hiệu"
          title="Thương hiệu"
          clsTitle="font-bold italic"
          className="h-[50px]"
          formik={formik}
        />
        <InputField
          name={"keyword"}
          placeholder="Từ khóa"
          title="Từ khóa"
          clsTitle="font-bold italic"
          className="h-[50px]"
          formik={formik}
        />
        <TextAreaField
          name={"customer_description"}
          placeholder="Chân dung khách hàng"
          title="Chân dung khách hàng"
          clsTitle="font-bold italic"
          className="h-[100px]"
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
