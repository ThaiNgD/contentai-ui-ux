"use client";

import ChatDisplayContainer from "@/components/ChatComponent/ChatDisplayContainer";
import { sortConversationByTime } from "@/helper/function";
//import { queryClient } from "@/provider/TanStackProvider";
import { useFetchAllChat } from "@/service/ai-chat/useFetchAllChat";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
interface ChatListProps {
  conversation: IConversationResult[];
}

interface ChatContainerProps {
  chat?: IConversationDetail;
  setChat: Dispatch<SetStateAction<IConversationDetail | undefined>>;
  // userData: number;
}

const ChatList = ({ chat, setChat }: ChatContainerProps) => {
  const [allChats, setAllChats] = useState<ChatListProps>();
  const [selectedChatId, setSelectedChatId] = useState<string>();
  //const userData = queryClient.getQueryData<UserInfo>(["user"]);
  const { data, isPending } = useFetchAllChat();
  useEffect(() => {
    if (data) setAllChats(data);
    else {
      setAllChats(undefined);
    }
  }, [data]);

  return (
    <div className="flex flex-col scrollbar-thin overflow-x-hidden overflow-y-auto">
      {isPending ? (
        <>
          <div className="w-full group relative border-b items-center shadow-inner flex gap-2 p-[20px] h-[80px]">
            <div className="flex items-center">
              <svg
                className="w-10 h-10 me-3 skeleton-image  text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="h-2.5 skeleton bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div className="w-14 h-2 skeleton bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
          <div className="w-full group relative border-b items-center shadow-inner flex gap-2 p-[20px] h-[80px]">
            <div className="flex items-center">
              <svg
                className="w-10 h-10 me-3 skeleton-image  text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="h-2.5 skeleton bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div className="w-14 h-2 skeleton bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
          <div className="w-full group relative border-b items-center shadow-inner flex gap-2 p-[20px] h-[80px]">
            <div className="flex items-center">
              <svg
                className="w-10 h-10 me-3 skeleton-image  text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="h-2.5 skeleton bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div className="w-14 h-2 skeleton bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {sortConversationByTime(
            allChats?.conversation ? allChats?.conversation : []
          )?.map((chatResult, index) => {
            return (
              <ChatDisplayContainer
                selectedChatId={selectedChatId}
                setSelectedChatId={setSelectedChatId}
                setChat={setChat}
                chat={chat}
                chatDetail={chatResult}
                key={index}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default ChatList;
