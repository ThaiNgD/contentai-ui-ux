"use client";

import ChatDisplayContainer from "@/components/ChatComponent/ChatDisplayContainer";
import { useFetchAllChat } from "@/service/ai-chat/useFetchAllChat";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
interface ChatListProps {
  conversation: IConversationResult[];
}

interface ChatContainerProps {
  chat?: IConversationDetail;
  setChat: Dispatch<SetStateAction<IConversationDetail | undefined>>;
}

const ChatList = ({ chat, setChat }: ChatContainerProps) => {
  const [allChats, setAllChats] = useState<ChatListProps>();
  const [selectedChatId, setSelectedChatId] = useState<string>();
  const { data } = useFetchAllChat();
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
    <div className="flex flex-col overflow-x-hidden overflow-y-auto">
      {/* <ChatDisplayContainer
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
        setChat={setChat}
        chat={{
          id: "1",
          conversationName: "string",
          createdAt: "string",
          updatedAt: new Date(),
        }}
      />
      <ChatDisplayContainer
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
        setChat={setChat}
        chat={{
          id: "2",
          conversationName: "string",
          createdAt: "string",
          updatedAt: new Date(),
        }}
      /> */}
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
