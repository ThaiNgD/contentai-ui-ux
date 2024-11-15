import { cn } from "@/helper/function";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
interface ChatDisplayContainerProps {
  isPdfChat?: boolean;
  chat: IConversationResult;
}
const ChatDisplayContainer = ({
  chat,
  isPdfChat,
}: ChatDisplayContainerProps) => {
  return (
    <div className="w-full group border-b items-center shadow-inner flex gap-2 p-[20px] h-[80px]">
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
    </div>
  );
};

export default ChatDisplayContainer;
