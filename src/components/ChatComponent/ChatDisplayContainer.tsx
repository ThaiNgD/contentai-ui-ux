"use client";
import { cn } from "@/helper/function";
import { useFetchConversationById } from "@/service/ai-chat/useFetchConversationById";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaLink, FaTrash } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
interface ChatDisplayContainerProps {
  isPdfChat?: boolean;
  chat: IConversationResult;
  setChat: Dispatch<SetStateAction<IConversationDetail | undefined>>;
}
const ChatDisplayContainer = ({
  chat,
  isPdfChat,
  setChat,
}: ChatDisplayContainerProps) => {
  console.log("chat: ", chat);
  const [isEnable, setIsEnable] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { data } = useFetchConversationById(chat.id, isEnable);
  console.log("data nay:", data);
  useEffect(() => {
    if (data) {
      setChat(data);
    }
  }, [data]);
  return (
    <div
      className={cn(
        "w-full group relative border-b items-center shadow-inner flex gap-2 p-[20px] h-[80px]",
        isClicked && "border-l-2 border-l-blue-500"
      )}
      role="button"
      onClick={(): void => {
        setIsEnable(true);
        setIsClicked(true);
      }}
    >
      <div
        className={cn("p-2 shadow-inner bg-gray-100 rounded-full h-fit w-fit")}
      >
        {isPdfChat ? (
          <BsFileEarmarkPdfFill className="text-orange-400" size={20} />
        ) : (
          <IoChatboxEllipses size={20} />
        )}
      </div>
      <div className="flex flex-col justify-center ">
        <span>{chat?.conversationName}</span>
        {isPdfChat && (
          <div className="flex gap-2 w-full">
            <FaLink size={20} />
            <span
              role="button"
              className="text-xs leading-5 hover:text-blue-700 hover:opacity-100 overflow-hidden line-clamp-1 text-wrap break-all text-ellipsis opacity-50 text-black"
            >
              https://davinci.berkine.me/storage/h9XK8QmDEo.pdf
            </span>
          </div>
        )}
        <p className="text-xs opacity-50 text-black w-fit whitespace-nowrap overflow-hidden">
          {chat?.createdAt}
        </p>
      </div>
      <div className="absolute invisible group-hover:visible top-2 duration-200 right-0 group-hover:right-2 z-50 p-2 rounded-full hover:text-red-500 border">
        <FaTrash className="bg-gray-100" />
      </div>
    </div>
  );
};

export default ChatDisplayContainer;
