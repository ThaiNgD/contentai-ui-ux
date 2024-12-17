import { Button, Modal } from "flowbite-react";
import { Dispatch, FC, SetStateAction } from "react";

interface ModalConfirmDeleteChatProps {
  isShow: boolean;
  setIsShow?: Dispatch<SetStateAction<boolean>>;
  handleDelete: (e: React.MouseEvent) => Promise<void>;
}

const ModalConfirmDeleteChat: FC<ModalConfirmDeleteChatProps> = ({
  isShow,
  setIsShow,
  handleDelete,
}) => {
  const handleClose = (): void => setIsShow && setIsShow(false);

  return (
    <Modal show={isShow} onClose={handleClose} className="modal-notifi modal">
      <Modal.Body className="">
        <div className="flex flex-col items-center gap-4">
          <p>Bạn có chắc chắn muốn xóa đoạn chat này?</p>
          <div className="flex gap-4">
            <Button
              className="bg-red-500 hover:shadow-none shadow-md hover:translate-y-0.5 border-red-500 be-vietnam-pro-regular"
              onClick={handleDelete}
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

export default ModalConfirmDeleteChat;
