"use client";
import ChatContainer from "@/components/ChatComponent/ChatContainer";
import { useState } from "react";
import ChatHeader from "./_lib/ChatHeader";
import ChatList from "./_lib/ChatList";
import ChatSearchBar from "./_lib/ChatSearchBar";
import Header from "./_lib/Header";

const Page = () => {
  const [chat, setChat] = useState<IConversationDetail>();
  return (
    <>
      <Header />
      <div className="px-[175px] py-[20px] bg-[#F5F9FC] h-[calc(100%-150px)]">
        <div className="border divide-x grid grid-cols-[25%,75%] bg-white rounded-xl shadow-lg h-full">
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
        </div>
      </div>
    </>
  );
};

export default Page;
