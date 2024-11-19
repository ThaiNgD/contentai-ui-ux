"use client";

import ChatDisplayContainer from "@/components/ChatComponent/ChatDisplayContainer";
import { useFetchConversationById } from "@/service/ai-chat/useFetchConversationById";
import { conversationApi } from "@/service/axios/conversationApi";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
interface ChatListProps {
  conversation: IConversationResult[];
}
const ChatList = ({
  setChat,
}: {
  setChat: Dispatch<SetStateAction<IConversationDetail | undefined>>;
}) => {
  const { data } = useFetchConversationById("", false);
  const [allChats, setAllChats] = useState<ChatListProps>();
  useEffect(() => {
    console.log(data);
    const getAllChat = async (): Promise<ChatListProps> => {
      return await conversationApi.getAll();
    };
    getAllChat().then((value) => {
      setAllChats(value);
    });
  }, []);
  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto">
      {allChats?.conversation.map((chat, index) => {
        return (
          <ChatDisplayContainer setChat={setChat} chat={chat} key={index} />
        );
      })}
    </div>
  );
};

export default ChatList;
