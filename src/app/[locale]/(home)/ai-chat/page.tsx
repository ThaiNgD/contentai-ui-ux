"use client";
import ChatContainer from "@/components/ChatComponent/ChatContainer";
import { useState } from "react";
import ChatHeader from "./_lib/ChatHeader";
import ChatList from "./_lib/ChatList";
import ChatSearchBar from "./_lib/ChatSearchBar";

const Page = () => {
  const [chat, setChat] = useState<IConversationDetail>();
  return (
    <>
      <div className="grid divide-y grid-rows-[15%,85%]">
        <ChatSearchBar />
        <div className="w-full flex max-h-full flex-col gap-2">
          <ChatList setChat={setChat} />
        </div>
      </div>
      <div className="grid divide-y grid-rows-[15%,85%]">
        <ChatHeader />
        <ChatContainer chat={chat} />
      </div>
    </>
  );
};

export default Page;
