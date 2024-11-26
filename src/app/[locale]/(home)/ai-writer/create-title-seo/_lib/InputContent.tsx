"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { cn } from "@/helper/function";
import { useAiCreateTitle } from "@/service/aiseo/useAiCreateTitle";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Inputprops {
  setCkData: Dispatch<SetStateAction<string>>;
}
const InputContent = ({ setCkData }: Inputprops) => {
  const { mutate, data, isPending } = useAiCreateTitle();
  const formik = useFormik<IFormCreateTitleSeo>({
    initialValues: {
      searchIntent: "",
      keywords: "",
      currentYear: "2024",
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
    <div className="flex flex-col p-[30px] shadow-md bg-white rounded-xl h-full">
      <form
        id="form-submit"
        onSubmit={formik.handleSubmit}
        className="flex flex-col overflow-y-auto  gap-4"
      >
        <InputField
          name={"keywords"}
          placeholder="Từ khóa"
          title="Từ khóa"
          clsTitle="font-bold mb-1 italic"
          className="h-[50px] !bg-[#F5F9FC] shadow-inner"
          formik={formik}
        />
        <InputField
          name={"currentYear"}
          placeholder="2024"
          title="Năm tìm kiếm"
          clsTitle="font-bold mb-1 italic"
          className="h-[50px] !bg-[#F5F9FC] shadow-inner"
          type="number"
          formik={formik}
        />
        <InputField
          name={"searchIntent"}
          placeholder="Ý định tìm kiếm"
          title="Tiêu đề"
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
