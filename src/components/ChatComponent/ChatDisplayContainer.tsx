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
  const [shouldFetch, setShouldFetch] = useState(false);

  // Sử dụng hook fetch dữ liệu
  const { data } = useFetchConversationById(chat.id, shouldFetch);

  // Mutation xóa cuộc hội thoại
  const deleteMutation = useDeleteConversationById(chat.id);

  // Hàm xử lý xóa
  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Bạn có chắc chắn muốn xóa cuộc hội thoại này không?")) {
      setChat(undefined);
      deleteMutation.mutate(chat.id);
    }
  };

  // Prefetch dữ liệu khi hover
  const handleMouseEnter = async (chatId: string) => {
    if (!queryClient.getQueryData(["chatDetail", chatId])) {
      await queryClient.prefetchQuery({
        queryKey: ["chatDetail", chatId],
        queryFn: () => conversationApi.getConversationById(chatId),
      });
    }
  };

  // Xử lý khi click vào chat
  const handleClick = () => {
    setIsClicked(true);
    setSelectedChatId?.(chat.id);
    setShouldFetch(true); // Bật fetch dữ liệu chi tiết
  };

  // Cập nhật state khi có dữ liệu mới
  useEffect(() => {
    if (data && isClicked) {
      setChat(data);
    }
  }, [data, isClicked, setChat]);

  // Reset trạng thái khi đổi selected chat
  useEffect(() => {
    if (selectedChatId !== chat.id) {
      setIsClicked(false);
      setShouldFetch(false); // Tắt fetch nếu không phải chat đang chọn
    }
  }, [selectedChatId, chat.id]);

  return (
    <div
      className={cn(
        "w-full group relative border-b items-center shadow-inner flex gap-2 p-[20px] h-[80px]",
        isClicked && "border-l-2 border-l-blue-500"
      )}
      role="button"
      onClick={handleClick} // Fetch khi click
      onMouseOver={(): void => {
        handleMouseEnter(chat.id); // Prefetch khi hover
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
      <div className="flex flex-col justify-center">
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
        onClick={(e) => e.stopPropagation()}
      >
        <MdEdit />
      </div>
      <div
        className="absolute invisible group-hover:visible top-2 duration-200 right-0 group-hover:right-2 z-50 p-2 rounded-full hover:text-red-500 border"
        onClick={handleDelete}
      >
        <IoMdTrash />
      </div>
    </div>
  );
};

export default ChatDisplayContainer;
