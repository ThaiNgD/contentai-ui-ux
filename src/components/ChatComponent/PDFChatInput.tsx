"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { PiOpenAiLogo } from "react-icons/pi";
import TextAreaField from "../CustomField/TextAreaField";
import ModalSelectModule from "../Modal/ModalSelectModule";
import { useAddMessagePdfChat } from "@/service/ai-pdf-chat/useAddMessagePdfChat";

const PDFChatInput = ({
  threadId,
  setShouldFetch,
}: {
  threadId: string;
  setShouldFetch?: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const addMessageMutation = useAddMessagePdfChat(message, threadId);

  const handleSendMessage = () => {
    if (!message.trim()) return; // Không gửi tin nhắn rỗng
    addMessageMutation.mutate(message, {
      onSuccess: () => {
        setMessage(""); // Xóa nội dung text sau khi gửi thành công
        setShouldFetch?.(true);
      },
      onError: (error) => {
        console.error("Failed to send message:", error);
      },
    });
  };

  return (
    <>
      <div className="flex items-center p-2 px-4 h-fit gap-2 bg-gray-200 justify-between rounded-xl ">
        <div className="p-2 h-fit bg-blue-500 rounded-full">
          <GrAttachment size={20} className="text-white" />
        </div>
        <TextAreaField
          clsChildren="flex"
          name={""}
          classWapper="w-[calc(100%-150px)]"
          clsTextArea="max-h-[100px] h-[40px] min-h-[40px] bg-white rounded-l-xl"
          placeholder="Nhập tin nhắn"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
        />
        <div className="flex gap-2 items-center">
          <div
            className="p-2 bg-white hover:scale-110 rounded-full"
            role="button"
            onClick={() => setIsShowModal(true)}
          >
            <PiOpenAiLogo size={20} className="text-blue-500" />
          </div>
          <div
            className="p-2 ml-2 h-fit hover:scale-110 bg-blue-500 rounded-full"
            role="button"
            onClick={handleSendMessage}
          >
            <IoSend size={20} className="-rotate-12 text-white" />
          </div>
        </div>
      </div>
      <ModalSelectModule isShow={isShowModal} setIsShow={setIsShowModal} />
    </>
  );
};

export default PDFChatInput;
