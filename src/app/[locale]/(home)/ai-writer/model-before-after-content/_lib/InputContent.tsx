"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { cn } from "@/helper/function";
import { useAiModalBeforeAfterPost } from "@/service/aiwriter/web-sale-content/useAiModelBeforeAfterPost";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect } from "react";
interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}
const InputContent = ({ setCkData }: InputProps) => {
  const { mutate, isPending, data } = useAiModalBeforeAfterPost();
  const formik = useFormik<IFormBeforeAfterPost>({
    initialValues: {
      brandName: "",
      productBenefitsDescription: "",
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
      <TextAreaField
        name={"productBenefitsDescription"}
        placeholder="Mô tả lợi ích sản phẩm/dịch vụ"
        title="Mô tả lợi ích sản phẩm/dịch vụ"
        clsTitle="font-bold mb-1 italic"
        className="h-[125px] !bg-[#F5F9FC] shadow-inner min-h-[50px] max-h-[400px]"
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
