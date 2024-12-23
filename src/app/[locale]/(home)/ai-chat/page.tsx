"use client";
import ChatContainer from "@/components/ChatComponent/ChatContainer";
import { cn } from "@/helper/function";
import { queryClient } from "@/provider/TanStackProvider";
import { useAddConversation } from "@/service/ai-chat/useAddConversation";
import { Button } from "flowbite-react";
import { useState } from "react";
import ChatHeader from "./_lib/ChatHeader";
import ChatList from "./_lib/ChatList";
import ChatSearchBar from "./_lib/ChatSearchBar";

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

const Page = () => {
  const [chat, setChat] = useState<IConversationDetail>();
  const [isLoading, setIsLoading] = useState(false);
  const userData = queryClient.getQueryData<UserInfo>(["user"]);
  const { mutateAsync: addNewMessageMutation } = useAddConversation(
    // Number(userData?.user?.userDbId)
    String(userData?.user?.userId)
  );

  const handleAddNew = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    try {
      await addNewMessageMutation(String(userData?.user?.userId)).then(
        (value) => {
          setChat(value);
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.error("Lỗi khi thêm cuộc trò chuyện mới:", error);
    }
  };

  return (
    <>
      <div className="grid divide-y h-full w-full box-border grid-rows-[15%,85%]">
        <ChatSearchBar />
        <div className="h-[calc(100%-100px)] max-h-[680px] row-span-1 py-[2px] w-full flex flex-col gap-2 ">
          {chat && (
            <Button
              className={cn(
                "rounded-full w-fit px-[30px] my-5 bg-blue-500 shadow-md font-bold mx-auto border-blue-500 hover:shadow-none hover:translate-y-0.5 duration-200",
                isLoading && "pointer-events-none"
              )}
              onClick={handleAddNew}
            >
              {isLoading ? (
                <div className="loading size-[20px]"></div>
              ) : (
                "Thêm đoạn chat"
              )}
            </Button>
          )}
          <ChatList
            // userData={Number(userData?.user?.userDbId)}
            chat={chat}
            setChat={setChat}
          />
        </div>
      </div>
      <div className="grid divide-y justify-stretch items-stretch w-full grid-rows-[15%,85%]">
        <ChatHeader />
        <ChatContainer setChat={setChat} chat={chat} />
      </div>
    </>
  );
};

export default Page;
