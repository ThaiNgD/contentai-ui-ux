import { useFetchFolder } from "@/service/content-management/useFetchFolder";
import { Button, Modal } from "flowbite-react";
import { Dispatch, FC, SetStateAction, useMemo } from "react";
import InputField from "../CustomField/InputField";
import { SelectField } from "../CustomField/SelectField";

interface ModalChangeFolderProps {
  isShow: boolean;
  setIsShow?: Dispatch<SetStateAction<boolean>>;
}

const ModalChangeFolder: FC<ModalChangeFolderProps> = ({
  isShow,
  setIsShow,
}) => {
  const { data: folder } = useFetchFolder();
  const handleClose = (): void => setIsShow && setIsShow(false);
  const folder_option = useMemo(() => {
    return folder?.data.map((f) => {
      return { label: f.folder_name, value: f.folder_id };
    });
  }, [folder]);
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-notifi modal">
      <Modal.Header className="px-5 py-3">Thay đổi Folder</Modal.Header>
      <Modal.Body className="px-5 pt-[30px] overflow-visible pb-4">
        <form className="flex flex-col gap-5">
          <InputField
            name="old-folder"
            label="Folder cũ"
            clsLabelWrapper="font-bold text-lg"
            className="!bg-gray-200 pointer-events-none"
          />
          <SelectField
            name="module"
            label="Folder mới"
            clsLabelWrapper="font-bold text-lg"
            options={folder_option}
          />
          <Button
            className="btn btn-primary hover:shadow-none shadow-md hover:translate-y-0.5 bg-blue-500 border-blue-500 self-end w-fit"
            onClick={handleClose}
          >
            Xác nhận
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalChangeFolder;
