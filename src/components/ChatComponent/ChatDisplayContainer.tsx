"use client";
import { cn } from "@/helper/function";
import { useDeleteConversationById } from "@/service/ai-chat/useDeleteConversationById";
import { useFetchConversationById } from "@/service/ai-chat/useFetchConversationById";
import { conversationApi } from "@/service/axios/conversationApi";
import { useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { IoMdTrash } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

interface ChatDisplayContainerProps {
  isPdfChat?: boolean;
  chat: IConversationResult;
  setChat: Dispatch<SetStateAction<IConversationDetail | undefined>>;
  selectedChatId?: string | undefined;
  setSelectedChatId?: Dispatch<SetStateAction<string | undefined>>;
  refetch?: () => Promise<void>;
}
const ChatDisplayContainer = ({
  chat,
  isPdfChat,
  setChat,
  selectedChatId,
  setSelectedChatId,
}: ChatDisplayContainerProps) => {
  const queryClient = useQueryClient();
  const [isClicked, setIsClicked] = useState(false);
  const { data } = useFetchConversationById(chat.id);

  // Sử dụng mutation để xóa
  const deleteMutation = useDeleteConversationById(chat.id, () => {
    // Callback khi xóa thành công
    queryClient.invalidateQueries({
      queryKey: ["all-chat"], // Định nghĩa query key
    });
    // Xóa cache danh sách
    if (selectedChatId === chat.id) {
      setSelectedChatId?.(undefined);
    }
  });

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setChat(undefined);

    deleteMutation.mutate(chat.id);
    // await refetch();
    // e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
    // if (window.confirm("Bạn có chắc chắn muốn xóa cuộc hội thoại này không?")) {
    //   deleteMutation.mutate(chat.id); // Thực thi mutation để xóa
    //   refetch();
    //   setChat(undefined); // Reset chat hiện tại nếu bị xóa
    // }
  };

  const handleMouseEnter = (chatId: string) => {
    queryClient.prefetchQuery({
      queryKey: ["chat", chatId],
      queryFn: () => conversationApi.getConversationByParams(chatId),
    });
  };

  useEffect(() => {
    if (data && isClicked) {
      setChat(data);
    }
  }, [data, isClicked]);

  useEffect(() => {
    if (selectedChatId !== chat.id) {
      setIsClicked(false);
    }
  });

  return (
    <div
      className={cn(
        "w-full group relative border-b items-center shadow-inner flex gap-2 p-[20px] h-[80px]",
        isClicked && "border-l-2 border-l-blue-500"
      )}
      role="button"
      onClick={(): void => {
        handleMouseEnter(chat.id);

        setIsClicked(true);
        setSelectedChatId?.(chat.id);
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
      <div
        className="absolute invisible group-hover:visible top-2 duration-200 right-4 group-hover:right-[48px] z-50 p-2 rounded-full hover:text-yellow-300 border"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MdEdit />
      </div>
      <div
        className="absolute invisible group-hover:visible top-2 duration-200 right-0 group-hover:right-2 z-50 p-2 rounded-full hover:text-red-500 border"
        onClick={handleDelete} // Gắn sự kiện xóa vào nút
      >
        <IoMdTrash />
      </div>
    </div>
  );
};

export default ChatDisplayContainer;
