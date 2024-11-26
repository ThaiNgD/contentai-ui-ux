"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { cn } from "@/helper/function";
import { useAiCompetior } from "@/service/aiwriter/business/useAiCompetior";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect } from "react";

interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}
const InputContent = ({ setCkData }: InputProps) => {
  const { data, mutate: mutateFn, isPending } = useAiCompetior();
  const formik = useFormik<IFormCompetiorAnalysis>({
    initialValues: {
      brandName: "",
      productDescription: "",
      adCopy: "",
      module: "",
      language: "",
    },
    onSubmit: (values) => {
      mutateFn(values);
    },
  });
  useEffect(() => {
    if (data?.result) {
      setCkData(data?.result);
    }
  }, [data]);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex bg-white p-[32px] flex-col gap-4 rounded-xl shadow-lg"
    >
      <InputField
        name={"brandName"}
        placeholder="Tên thương hiệu"
        title="Tên thương hiệu"
        clsTitle="font-bold italic mb-1"
        className="h-[50px] shadow-inner !bg-[#F5F9FC]"
        formik={formik}
      />
      <TextAreaField
        name="productDescription"
        placeholder="Nhập mô tả"
        title="Mô tả sản phẩm"
        clsTitle="mb-1"
        clsTextArea="min-h-[50px] !bg-[#F5F9FC] shadow-inner h-[150px] max-h-[400px]"
        formik={formik}
      />
      <TextAreaField
        name="adCopy"
        title="Nội dung quảng cáo của đối thủ"
        placeholder="Nhập nội dung"
        clsTitle="mb-1"
        clsTextArea="min-h-[50px] shadow-inner !bg-[#F5F9FC] h-[150px] max-h-[400px]"
        formik={formik}
      />
      <SelectField
        clsLabelWrapper="font-bold italic"
        label="Mô hình"
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
        type="submit"
        className={cn(
          "bg-blue-500 mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5",
          isPending && "hover:cursor-not-allowed"
        )}
      >
        {isPending ? (
          <span className="loading size-[20px]"></span>
        ) : (
          "Tạo nội dung"
        )}
      </Button>
    </form>
  );
};

export default InputContent;
