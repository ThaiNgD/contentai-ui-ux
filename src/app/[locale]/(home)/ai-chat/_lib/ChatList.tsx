"use client";

import ChatDisplayContainer from "@/components/ChatComponent/ChatDisplayContainer";
import { conversationApi } from "@/service/ai-chat/conversationApi";
import { useEffect, useState } from "react";
interface ChatListProps {
  conversation: IConversationResult[];
}
const ChatList = () => {
  const [allChats, setAllChats] = useState<ChatListProps>();
  useEffect(() => {
    const getAllChat = async (): Promise<ChatListProps> => {
      return await conversationApi.getAll();
    };
    getAllChat().then((value) => {
      console.log(value);
      setAllChats(value);
    });
  }, []);
  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto">
      {allChats?.conversation.map((chat, index) => {
        return <ChatDisplayContainer chat={chat} key={index} />;
      })}
    </div>
  );
};

export default ChatList;
