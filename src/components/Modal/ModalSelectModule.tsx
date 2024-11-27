import configModuleSelector from "@/config/configModule";
import { Button, Modal } from "flowbite-react";
import { Dispatch, FC, SetStateAction } from "react";
import { SelectField } from "../CustomField/SelectField";

interface ModalSelectModuleProps {
  isShow: boolean;
  setIsShow?: Dispatch<SetStateAction<boolean>>;
}

const ModalSelectModule: FC<ModalSelectModuleProps> = ({
  isShow,
  setIsShow,
}) => {
  const handleClose = (): void => setIsShow && setIsShow(false);

  return (
    <Modal show={isShow} onClose={handleClose} className="modal-notifi modal">
      <Modal.Header className="px-5 py-3">Chọn Module</Modal.Header>
      <Modal.Body className="px-5 pt-[30px] overflow-visible pb-4">
        <form className="flex flex-col gap-5">
          <SelectField
            name="module"
            label="Module"
            clsLabelWrapper="font-bold text-lg"
            options={configModuleSelector}
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

export default ModalSelectModule;
