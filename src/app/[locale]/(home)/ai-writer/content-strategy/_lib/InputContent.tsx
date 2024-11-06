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
      goals: "",
      targetAudience: "",
      product: "",
      product_info: "",
      competitor_ads_content: "",
      another_content: "",
      content_type: "",
      language: "",
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });
  return (
    <div className="flex flex-col h-full">
      <form
        id="form-submit"
        onSubmit={formik.handleSubmit}
        className="flex flex-col overflow-y-auto  gap-4"
      >
        <InputField
          name={"goals"}
          placeholder="Mục tiêu kinh doanh"
          title="Mục tiêu kinh doanh"
          clsTitle="font-bold italic"
          className="h-[50px]"
          formik={formik}
        />
        <InputField
          name={"targetAudience"}
          placeholder="Khách hàng mục tiêu"
          title="Khách hàng mục tiêu"
          clsTitle="font-bold italic"
          className="h-[50px]"
          formik={formik}
        />
        <InputField
          name="product"
          placeholder="Thể loại content"
          title="Thể loại content"
          className="h-[50px]"
          formik={formik}
        />
        <TextAreaField
          name="product_info"
          placeholder="Thông tin sản phẩm"
          title="Mô tả sản phẩm"
          clsTextArea="h-[125px]"
          formik={formik}
        />
        <TextAreaField
          name="competitor_ads_content"
          title="Mục đích của content"
          placeholder="Nhập nội dung"
          clsTextArea="h-[125px]"
          formik={formik}
        />
        <TextAreaField
          name="another_content"
          title="Nội dung khác"
          placeholder="Nhập nội dung"
          clsTextArea="h-[125px]"
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
