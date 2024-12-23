"use client";
import { useAddMessagePdfChat } from "@/service/ai-pdf-chat/useAddMessagePdfChat";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { PiOpenAiLogo } from "react-icons/pi";
import TextAreaField from "../CustomField/TextAreaField";
import ModalSelectModule from "../Modal/ModalSelectModule";

const PDFChatInput = ({
  setChat,
  threadId,
  setTyping,
}: {
  setChat?: Dispatch<SetStateAction<IConversationDetail | undefined>>;
  threadId: string;
  setTyping?: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const addMessageMutation = useAddMessagePdfChat(threadId);
  const formik = useFormik({
    initialValues: { message: "", chat_model: "", file: "" },
    onSubmit: (values) => {
      const questionTime = new Date().getTime();
      if (!values.message.trim()) return;
      console.log(values.message);
      setChat?.((prev) => {
        if (!prev?.conversation) {
          return prev;
        }
        return {
          threadId: prev?.threadId,
          conversation: [
            ...prev.conversation,
            {
              role: "user",
              message: values.message,
              timestamp: questionTime / 1000,
            },
          ],
        };
      });
      setTyping?.(true); // Đang nhập tin nhắn
      addMessageMutation.mutate(
        { message: values.message },
        {
          onSuccess: () => {
            setTyping?.(false);
          },
          onError: (error) => {
            setTyping?.(false);
            console.error("Failed to send message:", error);
          },
        }
      );
      formik.resetForm();
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex items-center p-2 px-4 h-fit gap-2 bg-gray-200 justify-between rounded-xl "
      >
        <div className="p-2 h-fit bg-blue-500 rounded-full">
          <GrAttachment size={20} className="text-white" />
        </div>
        <TextAreaField
          clsChildren="flex"
          name={"message"}
          classWapper="w-[calc(100%-150px)]"
          clsTextArea="max-h-[100px] h-[40px] min-h-[40px] bg-white rounded-l-xl"
          placeholder="Nhập tin nhắn"
          formik={formik}
        />
        <div className="flex gap-2 items-center">
          <div
            className="p-2 bg-white hover:scale-110 rounded-full"
            role="button"
            onClick={() => setIsShowModal(true)}
          >
            <PiOpenAiLogo size={20} className="text-blue-500" />
          </div>
          <Button
            className="ml-2 w-fit h-fit hover:scale-110 bg-blue-500 rounded-full"
            type="submit"
          >
            <IoSend size={20} className="-rotate-12 text-white" />
          </Button>
        </div>
      </form>
      <ModalSelectModule isShow={isShowModal} setIsShow={setIsShowModal} />
    </>
  );
};

export default PDFChatInput;
