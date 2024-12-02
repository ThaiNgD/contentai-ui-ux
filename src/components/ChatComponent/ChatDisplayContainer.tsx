"use client";
import { cn, convertToVietnameseDate } from "@/helper/function";
import { useDeleteConversationById } from "@/service/ai-chat/useDeleteConversationById";
import { useEditConversationName } from "@/service/ai-chat/useEditConversationName";
import { useFetchConversationById } from "@/service/ai-chat/useFetchConversationById";
import { conversationApi } from "@/service/axios/conversationApi";
import { useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { IoMdTrash } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import InputField from "../CustomField/InputField";
import ModalConfirmDeleteChat from "../Modal/ModalConfirmDeleteChat";

interface ChatDisplayContainerProps {
  isPdfChat?: boolean;
  chat: IConversationResult;
  setChat: Dispatch<SetStateAction<IConversationDetail | undefined>>;
  selectedChatId?: string | undefined;
  setSelectedChatId?: Dispatch<SetStateAction<string | undefined>>;
  chatDetail: IConversationDetail | undefined;
  refetch?: () => Promise<void>;
}

const ChatDisplayContainer = ({
  chat,
  isPdfChat,
  setChat,
  selectedChatId,
  setSelectedChatId,
  chatDetail,
}: ChatDisplayContainerProps) => {
  const queryClient = useQueryClient();
  const [isClicked, setIsClicked] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data } = useFetchConversationById(chat.id, shouldFetch);
  const [isEdit, setIsEdit] = useState(false);
  const editConversationNameMutation = useEditConversationName();
  const [isShowDeleteConfirm, setIsShowEditConfirm] = useState(false);
  const ref = useRef(null);

  const cancelEdit = (e: React.MouseEvent) => {
    setIsEdit(false);
    e.stopPropagation();
    editFormik.resetForm();
  };

  const editFormik = useFormik({
    initialValues: {
      rename: chat.conversationName,
    },
    onSubmit: (values) => {
      if (values.rename.length === 0) {
        toast.warning("Vui lòng nhập tên cuộc trò chuyện");
        return;
      }
      setIsEdit(false);
      editConversationNameMutation.mutate({
        threadId: chat.id,
        conversationName: values.rename,
      });
    },
  });

  // Mutation xóa cuộc hội thoại
  const deleteMutation = useDeleteConversationById(chat.id);

  // Hàm xử lý xóa
  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setChat(undefined);
    setIsShowEditConfirm(false);
    deleteMutation.mutate(chat.id);
    setIsClicked(false);
    setSelectedChatId?.(undefined);
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

  useEffect(() => {
    if (
      chatDetail != undefined &&
      !isClicked &&
      !selectedChatId &&
      chatDetail.threadId == chat.id
    ) {
      setShouldFetch(true); // Tắt fetch nếu không phải chat đang chọn
      setIsClicked(true);
      setSelectedChatId?.(chat.id);
    }
  }, [data]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleClickOutside(event: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (ref.current && !(ref.current as any).contains(event.target)) {
        setIsEdit(false);
        editFormik.resetForm();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={cn(
        "w-full group relative border-b items-center shadow-inner flex gap-2 p-[20px] h-[80px]",
        isClicked && "border-l-2 border-l-blue-500"
      )}
      role="button"
      onClick={handleClick}
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
      <div className="flex w-[calc(100%-100px)] flex-col justify-center ">
        {isEdit ? (
          <form id="edit-conversation" onSubmit={editFormik.handleSubmit}>
            <InputField
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="border-none !border-b-2 underline underline-offset-2 !p-0 !text-base "
              name="rename"
              formik={editFormik}
              autoFocus
            />
          </form>
        ) : (
          <span className="font-bold overflow-hidden text-ellipsis !text-nowrap">
            {chat?.conversationName}
          </span>
        )}
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
          {convertToVietnameseDate(chat?.createdAt)}
        </p>
      </div>
      {isEdit ? (
        <>
          <button
            className="absolute top-[18px] duration-200 right-2 z-50 p-[6px] rounded-full hover:bg-green-500 hover:text-white border"
            form="edit-conversation"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <FaCheck size={12} />
          </button>
          <button
            className="absolute top-[18px] duration-200 right-[48px] z-50 p-[6px] rounded-full hover:bg-red-500 hover:text-white border"
            onClick={cancelEdit}
          >
            <FaTimes size={12} />
          </button>
        </>
      ) : (
        <>
          <div
            className="absolute invisible group-hover:visible top-[18px] duration-200 right-4 group-hover:right-[48px] z-50 p-[6px] rounded-full hover:text-yellow-300 border"
            onClick={(e) => {
              e.stopPropagation();
              setIsEdit(true);
            }}
          >
            <MdEdit />
          </div>
          <div
            className="absolute invisible group-hover:visible top-[18px] duration-200 right-0 group-hover:right-2 z-50 p-[6px] rounded-full hover:text-red-500 border"
            onClick={(e): void => {
              e.stopPropagation();
              setIsShowEditConfirm(true);
            }} // Gắn sự kiện xóa vào nút
          >
            <IoMdTrash />
          </div>
        </>
      )}
      {isShowDeleteConfirm && (
        <ModalConfirmDeleteChat
          isShow={isShowDeleteConfirm}
          setIsShow={setIsShowEditConfirm}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default ChatDisplayContainer;
