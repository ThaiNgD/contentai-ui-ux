"use client";
import { useAddMessage } from "@/service/ai-chat/useAddMessage";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { PiOpenAiLogo } from "react-icons/pi";
import TextAreaField from "../CustomField/TextAreaField";
import ModalSelectModule from "../Modal/ModalSelectModule";

const ChatInput = ({
  threadId,
  setIsTypingText,
  setChat,
}: {
  threadId: string;
  setIsTypingText?: Dispatch<SetStateAction<boolean>>;
  setChat?: Dispatch<SetStateAction<IConversationDetail | undefined>>;
}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const addMessageMutation = useAddMessage(threadId);
  const chatFormik = useFormik({
    initialValues: { message: "", chat_model: "", file: "" },
    onSubmit: (values) => {
      const questionTime = new Date().getTime();
      if (!values.message.trim()) return;
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
      setIsTypingText?.(true); // Đang nhập tin nhắn
      addMessageMutation.mutate(
        { message: values.message },
        {
          onSuccess: () => {
            setIsTypingText?.(false);
          },
          onError: (error) => {
            setIsTypingText?.(false);
            console.error("Failed to send message:", error);
          },
        }
      );
      chatFormik.resetForm();
    },
  });
  return (
    <>
      <form
        id="chat-form"
        onSubmit={chatFormik.handleSubmit}
        className="flex items-center p-2 px-4 h-fit gap-2 bg-gray-200 justify-between rounded-xl "
      >
        <div className="p-2 h-fit bg-blue-500 rounded-full">
          <GrAttachment size={20} className="text-white" />
        </div>
        <TextAreaField
          clsChildren="flex"
          name={"message"}
          autoFocus
          classWapper="w-[calc(100%-150px)]"
          clsTextArea="max-h-[100px] h-[40px] min-h-[40px] bg-white rounded-l-xl"
          placeholder="Nhập tin nhắn"
          formik={chatFormik}
        />
        <div className="flex gap-2 items-center">
          <div
            className="p-2 duration-200 bg-white hover:scale-110 rounded-full"
            role="button"
            onClick={() => setIsShowModal(true)}
          >
            <PiOpenAiLogo size={20} className="text-blue-500" />
          </div>
          <Button
            className="p-0 w-fit ml-2 h-fit  hover:scale-110 bg-blue-500 duration-200 rounded-full"
            type="submit"
            form="chat-form"
          >
            <IoSend size={20} className="-rotate-12 text-white" />
          </Button>
        </div>
      </form>
      <ModalSelectModule isShow={isShowModal} setIsShow={setIsShowModal} />
    </>
  );
};

export default ChatInput;
