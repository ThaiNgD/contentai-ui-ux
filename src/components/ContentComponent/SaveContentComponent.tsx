"use client";
import { useFetchFolder } from "@/service/content-management/useFetchFolder";
import { useSaveDocument } from "@/service/document/useSaveDocument";
import { useFormik } from "formik";
import { useMemo } from "react";
import { MdSaveAs } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import InputField from "../CustomField/InputField";
import { SelectField } from "../CustomField/SelectField";

interface InputProps {
  data: IResult;
}

const SaveContentComponent = ({ data }: InputProps) => {
  const { data: folder } = useFetchFolder();
  const { mutate: mutateFn } = useSaveDocument();

  const formik = useFormik({
    initialValues: {
      document_name: "",
      folderId: "",
    },
    onSubmit: (values) => {
      mutateFn({
        document_name: values.document_name,
        folderId: values.folderId,
        aiModelName: data.aiModelName,
        content: data.result,
      });
    },
  });

  const folder_option = useMemo(() => {
    return folder?.data.map((f) => {
      return { label: f.folder_name, value: f.folder_id };
    });
  }, [folder]);

  // Validation schema
  // const validationSchema = Yup.object({
  //   document_name: Yup.string().required("Tên document không được để trống"),
  //   folderId: Yup.string().required("Vui lòng chọn thư mục"),
  // });

  return (
    <form
      id="form-submit-save"
      className="flex w-full justify-between"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex md:flex-row flex-col gap-3">
        <InputField
          name="document_name"
          placeholder="Tên document"
          className="border shadow-inner !bg-[#F1F9FC]"
          formik={formik}
        />
        <SelectField
          options={folder_option}
          name="folderId"
          placeholder="Thư mục muốn lưu"
          height="37.81px"
          className="rounded-xl shadow-inner !w-[235.63px] !bg-[#F1F9FC]"
          formik={formik}
        />
      </div>
      <div className="gap-3">
        <button type="submit">
          <div
            className="p-2 save-button hover:text-white duration-200 hover:-translate-y-0.5 hover:bg-blue-500 rounded-lg shadow-inner bg-[#F1F9FC]"
            role="button"
          >
            <MdSaveAs size={20} />
          </div>
        </button>
        <Tooltip anchorSelect=".save-button" place="top">
          Lưu Document
        </Tooltip>
      </div>
    </form>
  );
};

export default SaveContentComponent;
