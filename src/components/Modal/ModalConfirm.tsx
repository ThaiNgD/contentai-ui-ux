import { Button, Modal } from "flowbite-react";
import { Dispatch, FC, SetStateAction } from "react";

interface ModalConfirmProps {
  isShow: boolean;
  content: string;
  setIsShow?: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: (e?: any) => void;
}

const ModalConfirm: FC<ModalConfirmProps> = ({
  isShow,
  content,
  setIsShow,
  action,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClose = (e: any): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.stopPropagation();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setIsShow && setIsShow(false);
  };

  return (
    <Modal show={isShow} className="modal-notifi z-[1000] modal">
      <Modal.Body className="">
        <div className="flex flex-col items-center gap-4">
          <p>{content}</p>
          <div className="flex gap-4">
            <Button
              className="bg-red-500 hover:shadow-none shadow-md hover:translate-y-0.5 border-red-500 be-vietnam-pro-regular"
              onClick={action}
            >
              Chắc chắn
            </Button>
            <Button
              className="text-red-500 hover:shadow-none shadow-md hover:translate-y-0.5 border-red-500 be-vietnam-pro-regular"
              onClick={handleClose}
            >
              Hủy bỏ
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalConfirm;
