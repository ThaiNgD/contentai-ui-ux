"use client";
import { useFetchFolder } from "@/service/content-management/useFetchFolder";
import { useSaveDocument } from "@/service/document/useSaveDocument";
import { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import { MdSaveAs } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../CustomField/InputField";
import { SelectField } from "../CustomField/SelectField";
import { useFormik } from "formik";
import { Button } from "flowbite-react";

interface InputProps {
  data: string;
}

const SaveContentComponent = ({ data }: InputProps) => {
  const { data: folder } = useFetchFolder();
  const { mutate: mutateFn, isPending } = useSaveDocument();
  const formik = useFormik({
    initialValues: {
      document_name: "",
      folderId: "",
    },
    onSubmit: (values) => {
      mutateFn(
          {
            document_name: values.document_name,
            folderId: values.folderId,
            aiModelId: "2003e07f-1966-4610-9d3f-c4c8fbd3695a",
            content: data
          },
        )
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
        <form id="form-submit" onSubmit={formik.handleSubmit}>
          <div className="flex w-full justify-between">
            <div className="flex gap-3">
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
            <div className="flex gap-3">
              <Button
          form="form-submit"
          type="submit">
              <div
          className="p-2 save-button hover:text-white duration-200 hover:-translate-y-0.5 hover:bg-blue-500 rounded-lg shadow-inner border bg-[#F1F9FC]"
          role="button"
          >
                <MdSaveAs size={20} />
              </div>
        </Button>
              <Tooltip anchorSelect=".save-button" place="top">
                Lưu Document
              </Tooltip>
            </div>
                
          </div>
        </form>
      )}
    // </Formik>
//   );
// };

export default SaveContentComponent;
