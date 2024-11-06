import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import { Button } from "flowbite-react";
import { useFormik } from "formik";

const InputContent = () => {
  const formik = useFormik({
    initialValues: {
      brandName: "",
      productDescription: "",
      adCopy: "",
      module: "",
      language: "",
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      <InputField
        name={"brandName"}
        placeholder="Tên thương hiệu"
        title="Tên thương hiệu"
        clsTitle="font-bold italic"
        className="h-[50px]"
        formik={formik}
      />
      <TextAreaField
        name="productDescription"
        placeholder="Nhập mô tả"
        title="Mô tả sản phẩm"
        clsTextArea="h-[200px]"
        formik={formik}
      />
      <TextAreaField
        name="adCopy"
        title="Nội dung quảng cáo của đối thủ"
        placeholder="Nhập nội dung"
        clsTextArea="h-[200px]"
        formik={formik}
      />
      <SelectField
        clsLabelWrapper="font-bold italic"
        label="Mô hình"
        name="module"
        options={configLanguageSelector}
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
        className="bg-blue-500 mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
      >
        Tạo nội dung
      </Button>
    </form>
  );
};

export default InputContent;
