import { Button, Modal } from "flowbite-react";
import { Dispatch, FC, SetStateAction } from "react";
import InputField from "../CustomField/InputField";
import TextAreaField from "../CustomField/TextAreaField";

interface ModalNewFolderProps {
  isShow: boolean;
  setIsShow?: Dispatch<SetStateAction<boolean>>;
}

const ModalNewFolder: FC<ModalNewFolderProps> = ({ isShow, setIsShow }) => {
  const handleClose = (): void => setIsShow && setIsShow(false);

  return (
    <Modal show={isShow} onClose={handleClose} className="modal-notifi modal">
      <Modal.Header className="px-5 py-3">Thêm thư mục mới</Modal.Header>
      <Modal.Body className="flex flex-col gap-[24px]">
        <InputField
          name="folder_name"
          label="Tên thư mục"
          clsLabelWrapper="text-lg self-start font-bold"
          isRequired
          placeholder="Nhập tên thư mục"
        />
        <TextAreaField
          name="folder_desc"
          label="Miêu tả"
          clsLabelWrapper="text-lg self-start font-bold"
          placeholder="Nhập miêu tả cho thư mục"
          clsTextArea="h-[150px]  min-h-[50px] max-h-[450px]"
        />
      </Modal.Body>
      <Modal.Footer className="flex justify-end gap-[16px] px-5 py-3">
        <Button className="bg-blue-500 hover:shadow-none shadow-md hover:translate-y-0.5 border-blue-500 duration-200">
          Thêm thư mục
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNewFolder;
