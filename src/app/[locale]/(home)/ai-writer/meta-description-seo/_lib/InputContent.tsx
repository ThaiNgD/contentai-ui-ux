"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { cn } from "@/helper/function";
import { useAiMetaDescription } from "@/service/aiwriter/seo_optimization/useAiMetaDescription";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect } from "react";

interface InputProps {
  setCkData: Dispatch<SetStateAction<IResult>>;
}

const InputContent = ({ setCkData }: InputProps) => {
  const { mutate, isPending, data } = useAiMetaDescription();
  const formik = useFormik<IFormMetaDescription>({
    initialValues: {
      brandName: "",
      keywords: "",
      module: "",
      language: "",
    },
    onSubmit: (values) => {
      mutate(values);
    },
  });
  useEffect(() => {
    if (data) {
      setCkData(data);
    }
  }, [data]);
  return (
    <div className="flex flex-col h-full p-[30px] shadow-md bg-white rounded-xl">
      <form
        id="form-submit"
        onSubmit={formik.handleSubmit}
        className="flex flex-col overflow-y-auto  gap-4"
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
    </div>
  );
};

export default InputContent;
