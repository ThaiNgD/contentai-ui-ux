"use client";

import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import ModalNotification from "../Modal/ModalNotification";
const HeaderNotification = () => {
  const [showModalNotification, setShowModalNotification] = useState(false);
  const handleClick = (): void => {
    setShowModalNotification(true);
  };
  return (
    <>
      <IoNotificationsOutline
        role="button"
        className="pointer-events-none opacity-50"
        size={20}
        onClick={handleClick}
      />
      {showModalNotification && (
        <ModalNotification
          isShow={showModalNotification}
          setIsShow={setShowModalNotification}
        />
      )}
    </>
  );
};

export default HeaderNotification;
