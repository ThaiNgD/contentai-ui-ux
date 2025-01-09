"use client";
import { SelectField } from "@/components/CustomField/SelectField";
import DragnDropImage from "@/components/DragnDropFile";
import configLanguageSelector from "@/config/configLanguageSelector";
import { useAnalyzeImage } from "@/service/ai-vision/useAnalyzeImage";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const CustomEditor = dynamic(
  () => import("@/components/CKEditorComponent/CustomEditor"),
  { ssr: false }
);

const VisionContainer = () => {
  const [file, setFile] = useState<File | null>();

  const { mutate, data, isPending } = useAnalyzeImage();

  const [ckData, setCkData] = useState("");
  const formik = useFormik({
    initialValues: {
      // vision_description: "",
      language: "",
    },
    onSubmit: () => {
      if (file) {
        mutate(file);
      }
      // setCkData(values.vision_description);
    },
  });

  useEffect(() => {
    if (data && data.data) {
      setCkData(data.data);
    }
  }, [data]);

  return (
    <>
      <form
        id="form-submit"
        className="bg-white flex items-center flex-col gap-4 shadow-md rounded-lg p-[20px]"
        onSubmit={formik.handleSubmit}
      >
        <DragnDropImage setFile={setFile} />
        <div className="flex items-center gap-4">
          <SelectField
            name="language"
            formik={formik}
            placeholder="Ngôn ngữ"
            className="!w-[200px]"
            options={configLanguageSelector}
          />
          <Button
            form="form-submit"
            type="submit"
            className="border-blue-500 bg-blue-500 rounded-full
      px-2 md:px-[50px]  font-semibold shadow-md hover:shadow-none hover:translate-y-0.5 w-fit duration-200 h-fit"
          >
            {isPending ? (
              <div className="loading size-[24px]"></div>
            ) : (
              "Phân tích ảnh"
            )}
          </Button>
        </div>
        {ckData && <CustomEditor data={ckData} />}
      </form>
    </>
  );
};

export default VisionContainer;
