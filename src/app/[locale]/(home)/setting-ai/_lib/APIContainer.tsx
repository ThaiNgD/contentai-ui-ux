"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import ModalShowAPI from "@/components/Modal/ModalShowAPI";
import configAccessAllow from "@/config/configAccessAllow";
import configUsageModel from "@/config/configUsageModel";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { useState } from "react";
import { AiFillOpenAI } from "react-icons/ai";
const APIContainer = () => {
  const [isShowModalAPI, setIsShowModalAPI] = useState(false);
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
          label="Khóa OpenAI"
          isRequired
          isVertical
          clsLabelWrapper="italic font-bold mb-1"
          name="api_key"
          placeholder="Nhập Khóa API"
          className="!bg-[#F5F9FC] h-[42px] !shadow-inner"
          formik={formik}
        />
        <SelectField
          label="Sử dụng API cá nhân"
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
      <div className="flex gap-2 self-end">
        <Button
          className="rounded-full  w-fit px-[40px] bg-blue-500 shadow-md duration-200 hover:shadow-none font-bold hover:translate-y-0.5 border-blue-500"
          onClick={(): void => {
            setIsShowModalAPI(true);
          }}
        >
          Kho API
        </Button>
        <Button className="rounded-full duration-200 w-fit px-[40px] bg-blue-500 shadow-md hover:shadow-none font-bold hover:translate-y-0.5 border-blue-500">
          Áp dụng
        </Button>
      </div>
      {isShowModalAPI && (
        <ModalShowAPI isShow={isShowModalAPI} setIsShow={setIsShowModalAPI} />
      )}
    </form>
  );
};

export default APIContainer;
