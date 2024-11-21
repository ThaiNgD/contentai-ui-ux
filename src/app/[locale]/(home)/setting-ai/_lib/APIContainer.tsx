"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import configAccessAllow from "@/config/configAccessAllow";
import configUsageModel from "@/config/configUsageModel";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { AiFillOpenAI } from "react-icons/ai";
const APIContainer = () => {
  const formik = useFormik({
    initialValues: {
      api_key: "",
      personal_api_allowance: "",
      api_usage_mode: "",
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });
  return (
    <form className="bg-white flex flex-col gap-[30px] p-[50px] rounded-lg shadow-md">
      <div className="flex items-center font-bold gap-2">
        <AiFillOpenAI size={24} />
        Open AI
      </div>
      <div className="grid grid-cols-2 gap-[30px]">
        <InputField
          label="OpenAI Secret Key"
          isRequired
          isVertical
          clsLabelWrapper="italic font-bold mb-1"
          name="api_key"
          placeholder="Nhập Khóa API"
          className="!bg-[#F5F9FC] h-[42px] !shadow-inner"
          formik={formik}
        />
        <SelectField
          label="Personal OpenAI API Key "
          isRequired
          isVertical
          clsLabelWrapper="italic font-bold mb-1"
          options={configAccessAllow}
          name="personal_api_allowance"
          className="!bg-[#F5F9FC] !shadow-inner"
          formik={formik}
        />
        <SelectField
          label="Openai API Key Usage Mode"
          isRequired
          clsLabelWrapper="italic font-bold mb-1"
          isVertical
          name="api_usage_mode"
          className="!bg-[#F5F9FC] !shadow-inner"
          options={configUsageModel}
          formik={formik}
        />
      </div>
      <Button className="rounded-full self-end w-fit px-[40px] bg-blue-500 shadow-md hover:shadow-none font-bold hover:translate-y-0.5 border-blue-500">
        Kho API
      </Button>
    </form>
  );
};

export default APIContainer;
