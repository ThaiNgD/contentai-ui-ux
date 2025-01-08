"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { TbSettingsBolt } from "react-icons/tb";
const APIContainer = () => {
  const formik = useFormik({
    initialValues: {
      default_model: "",
      default_language: "",
      maximum_result_length: 0,
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });
  return (
    <form className="bg-white flex flex-col gap-[30px] p-[50px] rounded-lg shadow-md">
      <div className="flex items-center font-bold gap-2">
        <TbSettingsBolt size={24} />
        Cài đặt cấu hình khi chạy
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <SelectField
          label="Mô hình mặc định"
          isRequired
          isVertical
          clsLabelWrapper="italic font-bold mb-1"
          options={configModuleSelector}
          name="default_model"
          className="!bg-[#F5F9FC] !shadow-inner"
          formik={formik}
        />
        <SelectField
          label="Ngôn ngữ trả về mặc định"
          isRequired
          clsLabelWrapper="italic font-bold mb-1"
          isVertical
          name="default_language"
          className="!bg-[#F5F9FC] !shadow-inner"
          options={configLanguageSelector}
          formik={formik}
        />
        <InputField
          label="Độ dài câu trả lời mặc định"
          isRequired
          isVertical
          clsLabelWrapper="italic font-bold mb-1"
          name="maximum_result_length"
          type="number"
          placeholder="Nhập độ dài"
          className="!bg-[#F5F9FC] h-[42px] !shadow-inner"
          formik={formik}
        />
      </div>
      <Button className="rounded-full self-end w-fit px-[40px] bg-blue-500 shadow-md hover:shadow-none font-bold hover:translate-y-0.5 border-blue-500">
        <span className="md:!text-base whitespace-nowrap !text-xs">
          Áp dụng
        </span>
      </Button>
    </form>
  );
};

export default APIContainer;
