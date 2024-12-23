import { useCreateFolder } from "@/service/content-management/useCreateFolder";
import { Button, Modal } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, FC, SetStateAction } from "react";
import InputField from "../CustomField/InputField";
import TextAreaField from "../CustomField/TextAreaField";

interface ModalNewFolderProps {
  isShow: boolean;
  setIsShow?: Dispatch<SetStateAction<boolean>>;
}

const ModalNewFolder: FC<ModalNewFolderProps> = ({ isShow, setIsShow }) => {
  const handleClose = (): void => setIsShow && setIsShow(false);
  const { mutate, isPending } = useCreateFolder();
  const formik = useFormik({
    initialValues: {
      folder_name: "",
      folder_desc: "",
    },
    onSubmit: (values) => {
      console.log(values);
      mutate(values);
      handleClose();
    },
  });
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-notifi modal">
      <Modal.Header className="px-5 py-3">Thêm thư mục mới</Modal.Header>
      <Modal.Body>
        <form
          id="new-folder-form"
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-[24px]"
        >
          <InputField
            name="folder_name"
            label="Tên thư mục"
            clsLabelWrapper="text-lg self-start font-bold"
            isRequired
            placeholder="Nhập tên thư mục"
            formik={formik}
          />
          <TextAreaField
            name="folder_desc"
            label="Miêu tả"
            clsLabelWrapper="text-lg self-start font-bold"
            placeholder="Nhập miêu tả cho thư mục"
            clsTextArea="h-[150px]  min-h-[50px] max-h-[450px]"
            formik={formik}
          />
        </form>
      </Modal.Body>
      <Modal.Footer className="flex justify-end gap-[16px] px-5 py-3">
        <Button
          className="bg-blue-500 hover:shadow-none shadow-md hover:translate-y-0.5 border-blue-500 duration-200"
          form="new-folder-form"
          type="submit"
        >
          {isPending ? (
            <div className="loading size-[24px]"></div>
          ) : (
            "Thêm thư mục"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNewFolder;
