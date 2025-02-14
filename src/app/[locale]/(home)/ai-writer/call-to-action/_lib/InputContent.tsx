"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useAiBlogCallAction } from "@/service/aiwriter/aiblog_v2/useAiBlogCallAction";
interface InputProps {
  setCkData: Dispatch<SetStateAction<IResult>>;
}
const InputContent = ({ setCkData }: InputProps) => {
  const { data, mutate: mutateFn } = useAiBlogCallAction();
  const formik = useFormik<IFormBlogCallAction>({
    initialValues: {
      brandName: "",
      keyword: "",
      module: "",
      language: "",
    },
    onSubmit: async (values) => {
      mutateFn(values);
    },
  });

  useEffect(() => {
    if (data) {
      setCkData(data);
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
      <Button
        form="form-submit"
        type="submit"
        className="bg-blue-500 mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
      >
        Tạo nội dung
      </Button>
    </form>
  );
};

export default InputContent;
