"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { useAiContentBlogLongForm } from "@/service/aiwriter/useAiContentBlogLongForm";
import { Button } from "flowbite-react";
import { useFormik } from "formik";

const InputContent = () => {
  const { mutate: mutateFn, isPending } = useAiContentBlogLongForm();
  const formik = useFormik<IFormContentBlogLongForm>({
    initialValues: {
      title: "",
      keywords: "",
      outline: "",
      module: "",
      language: "",
    },
    onSubmit: async (values) => {
      mutateFn(values);
      // await aiContentBlogLongForm.create(values).then((values) => {
      //   console.log(values);
      //   setCkData(values.result);
      // });
    },
  });
  return (
    <div className="flex flex-col h-full">
      <form
        id="form-submit"
        onSubmit={formik.handleSubmit}
        className="flex flex-col overflow-y-auto  gap-4"
      >
        <InputField
          name={"keywords"}
          placeholder="Từ khóa"
          title="Từ khóa"
          clsTitle="font-bold italic"
          className="h-[50px]"
          formik={formik}
        />
        <InputField
          name={"title"}
          placeholder="Tiêu đề"
          title="Tiêu đề"
          clsTitle="font-bold italic"
          className="h-[50px]"
          formik={formik}
        />
        <TextAreaField
          name={"outline"}
          placeholder="Outline"
          title="Ounline"
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
        {isPending ? "Tạo nội dung" : "Đang tao"}
      </Button>
    </div>
  );
};

export default InputContent;
