"use client";

import ChatDisplayContainer from "@/components/ChatComponent/ChatDisplayContainer";
import { queryClient } from "@/provider/TanStackProvider";
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

interface UserInfo {
  user: {
    userDbId: string;
    email: string;
    name: string | null;
    userId: string;
    username: string;
  };
  message: string;
}

const ChatList = ({ chat, setChat }: ChatContainerProps) => {
  const [allChats, setAllChats] = useState<ChatListProps>();
  const [selectedChatId, setSelectedChatId] = useState<string>();
  const userData = queryClient.getQueryData<UserInfo>(["user"]);
  const { data } = useFetchAllChat(Number(userData?.user.userDbId));
  useEffect(() => {
    console.log(selectedChatId);
  }, [selectedChatId]);
  useEffect(() => {
    if (data) setAllChats(data);
    else {
      setAllChats(undefined);
    }
  }, [data]);
  return (
    <div className="flex flex-col scrollbar-thin overflow-x-hidden overflow-y-auto">
      {allChats?.conversation?.map((chatResult, index) => {
        return (
          <ChatDisplayContainer
            selectedChatId={selectedChatId}
            setSelectedChatId={setSelectedChatId}
            setChat={setChat}
            chat={chatResult}
            chatDetail={chat}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ChatList;
