"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { cn } from "@/helper/utils";
import { useAiWebsiteIntroduction } from "@/service/aiwriter/content_website/useAiWebsiteIntroduction";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect } from "react";

interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}
const InputContent = ({ setCkData }: InputProps) => {
  const { mutate, isPending, data } = useAiWebsiteIntroduction();
  const formik = useFormik<IFormWebsiteIntroduction>({
    initialValues: {
      brandName: "",
      description: "",
      keyword: "",
      module: "",
      language: "",
    },
    onSubmit: (values) => {
      mutate(values);
    },
  });
  useEffect(() => {
    if (data && data.result) {
      setCkData(data.result);
    }
  }, [data]);
  return (
    <form
      id="form-submit"
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 p-[30px] shadow-md bg-white rounded-xl"
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
        name={"keyword"}
        placeholder="Từ khóa về web"
        title="Từ khóa về web"
        clsTitle="font-bold mb-1 italic"
        className="h-[50px] !bg-[#F5F9FC] shadow-inner"
        formik={formik}
      />
      <TextAreaField
        name={"description"}
        placeholder="Mô tả Web"
        title="Mô tả Web"
        clsTitle="font-bold mb-1 italic"
        className="h-[150px] !bg-[#F5F9FC] shadow-inner"
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
        className={cn(
          "bg-blue-500 mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5",
          isPending && "pointer-events-none"
        )}
      >
        {isPending ? (
          <div className="loading size-[24px]"></div>
        ) : (
          "Tạo nội dung"
        )}
      </Button>
    </form>
  );
};

export default InputContent;
