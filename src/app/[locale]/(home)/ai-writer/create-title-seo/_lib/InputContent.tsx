"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { aiCreateTitleSeo } from "@/service/axios/AIWriterApi";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";

interface Inputprops {
  setCkData: Dispatch<SetStateAction<string>>;
}
const InputContent = ({ setCkData }: Inputprops) => {
  const formik = useFormik<IFormCreateTitleSeo>({
    initialValues: {
      searchIntent: "",
      keywords: "",
      currentYear: "2024",
      module: "",
      language: "",
    },
    onSubmit: async (values) => {
      await aiCreateTitleSeo.create(values).then((values) => {
        // Handle form submission
        console.log(values);
        setCkData(values.result);
      });
    },
  });
  return (
    <div className="flex flex-col p-[30px] shadow-md bg-white rounded-xl h-full">
      <form
        id="form-submit"
        onSubmit={formik.handleSubmit}
        className="flex flex-col overflow-y-auto  gap-4"
      >
        <InputField
          name={"total_creating_title"}
          placeholder="Số tiêu đề tạo ra"
          title="Số tiêu đề tạo ra"
          clsTitle="font-bold italic"
          className="h-[50px]"
          type="number"
          formik={formik}
        />
        <InputField
          name={"keywords"}
          placeholder="Từ khóa"
          title="Từ khóa"
          clsTitle="font-bold italic"
          className="h-[50px]"
          formik={formik}
        />
        <InputField
          name={"currentYear"}
          placeholder="2024"
          title="Năm tìm kiếm"
          clsTitle="font-bold italic"
          className="h-[50px]"
          type="number"
          formik={formik}
        />
        <InputField
          name={"searchIntent"}
          placeholder="Ý định tìm kiếm"
          title="Tiêu đề"
          clsTitle="font-bold italic"
          className="h-[50px]"
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
        className="bg-blue-500 mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
      >
        Tạo nội dung
      </Button>
    </div>
  );
};

export default InputContent;
