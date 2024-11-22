"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { cn } from "@/helper/function";
import { useAiContentStrategy } from "@/service/aiwriter/business/useAiContentStrategy";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect } from "react";

interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}
const InputContent = ({ setCkData }: InputProps) => {
  const { mutate, isPending, data } = useAiContentStrategy();
  const formik = useFormik<IFormContentStrategy>({
    initialValues: {
      goals: "",
      targetAudience: "",
      contentGeneration: "",
      product: "",
      contentPurpose: "",
      otherContent: "",
      module: "",
      language: "",
    },
    onSubmit: (values) => {
      // Handle form submission
      mutate(values);
    },
  });
  useEffect(() => {
    if (data?.result) {
      setCkData(data?.result);
    }
  }, [data]);
  return (
    <div className="flex flex-col p-[40px] rounded-lg shadow-lg  bg-white h-full">
      <form
        id="form-submit"
        onSubmit={formik.handleSubmit}
        className="flex flex-col overflow-y-auto  gap-4"
      >
        <InputField
          name={"goals"}
          placeholder="Mục tiêu kinh doanh"
          title="Mục tiêu kinh doanh"
          clsTitle="font-bold italic mb-1"
          className="h-[50px] !bg-[#F5F9FC] shadow-inner"
          formik={formik}
        />
        <InputField
          name={"targetAudience"}
          placeholder="Khách hàng mục tiêu"
          title="Khách hàng mục tiêu"
          clsTitle="font-bold italic mb-1"
          className="h-[50px] !bg-[#F5F9FC] shadow-inner"
          formik={formik}
        />
        <InputField
          name={"contentGeneration"}
          placeholder="Thể loại content"
          title="Thể loại content "
          clsTitle="font-bold italic mb-1"
          className="h-[50px] !bg-[#F5F9FC] shadow-inner"
          formik={formik}
        />
        <TextAreaField
          name={"product"}
          placeholder="Thông tin sản phẩm"
          title="Mô tả sản phẩm"
          clsTextArea="h-[125px] min-h-[50px] max-h-[400px] mt-1 !bg-[#F5F9FC] shadow-inner"
          formik={formik}
        />
        <TextAreaField
          name={"contentPurpose"}
          title="Mục đích của content"
          placeholder="Nhập nội dung"
          clsTextArea="h-[125px] mt-1 min-h-[50px] max-h-[400px] !bg-[#F5F9FC] shadow-inner"
          formik={formik}
        />
        <TextAreaField
          name={"otherContent"}
          title="Nội dung khác"
          placeholder="Nhập nội dung"
          clsTextArea="h-[125px] mt-1 !bg-[#F5F9FC] shadow-inner"
          formik={formik}
        />
        <SelectField
          clsLabelWrapper="font-bold italic"
          label="Model"
          name={"module"}
          options={configModuleSelector}
          formik={formik}
        />
        <SelectField
          clsLabelWrapper="font-bold italic"
          label="Ngôn ngữ"
          name={"language"}
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
