"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import { SelectField } from "@/components/CustomField/SelectField";
import DragnDropImage from "@/components/DragnDropFile";
import configLanguageSelector from "@/config/configLanguageSelector";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { useState } from "react";

const VisionContainer = () => {
  const [ckData, setCkData] = useState("");
  const formik = useFormik({
    initialValues: {
      vision_description: "",
      language: "",
    },
    onSubmit: (values) => {
      setCkData(values.vision_description);
    },
  });
  return (
    <>
      <form
        className="bg-white flex items-center flex-col gap-4 shadow-md rounded-lg p-[20px]"
        onSubmit={formik.handleSubmit}
      >
        <DragnDropImage />
        <div className="flex items-center gap-4">
          <SelectField
            name="language"
            formik={formik}
            placeholder="Ngôn ngữ"
            className="!w-[200px]"
            options={configLanguageSelector}
          />
          <Button
            className="border-blue-500 bg-blue-500 rounded-full
      px-[50px] font-semibold shadow-md hover:shadow-none hover:translate-y-0.5 w-fit duration-200 h-fit"
          >
            Phân tích ảnh
          </Button>
        </div>
        {ckData && <CustomEditor data={ckData} />}
      </form>
    </>
  );
};

export default VisionContainer;
