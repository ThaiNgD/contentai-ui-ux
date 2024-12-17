import { Modal } from "flowbite-react";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import { AiFillApi } from "react-icons/ai";

interface ModalShowAPIProps {
  isShow: boolean;
  setIsShow?: Dispatch<SetStateAction<boolean>>;
}

const ModalShowAPI: FC<ModalShowAPIProps> = ({ isShow, setIsShow }) => {
  const handleClose = (): void => setIsShow && setIsShow(false);

  return (
    <Modal show={isShow} onClose={handleClose} className="modal-notifi modal">
      <Modal.Header className="px-5 py-3 be-vietnam-pro-medium">
        Danh sách API
      </Modal.Header>
      <Modal.Body className="">
        <Link
          href="#"
          className="p-[150px] flex items-center justify-center flex-col"
        >
          <AiFillApi size={50} className="mx-auto" />
          <p className="text-[#9b9b9b] text-sm mt-1">
            Không có API nào. Bạn hãy thêm API vào
          </p>
        </Link>
      </Modal.Body>
    </Modal>
  );
};

export default ModalShowAPI;
