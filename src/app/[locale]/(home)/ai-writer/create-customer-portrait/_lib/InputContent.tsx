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
      product_description: "",
      total: 1,
      customer_portrait: "",
      module: "",
      language: "",
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });
  return (
    <form
      id="form-submit"
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4"
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
        name={"total"}
        placeholder="Số lượng"
        title="Số lượng"
        clsTitle="font-bold italic"
        className="h-[50px]"
        formik={formik}
      />
      <TextAreaField
        name={"product_description"}
        placeholder="Mô tả sản phẩm"
        title="Mô tả sản phẩm"
        clsTitle="font-bold italic"
        className="h-[125px]"
        formik={formik}
      />
      <TextAreaField
        name={"customer_portrait"}
        placeholder="Chân dung khách hàng"
        title="Chân dung khách hàng"
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
