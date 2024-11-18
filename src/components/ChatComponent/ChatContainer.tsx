"use client";
import { avatar } from "@/assets/images/avatar-image";
import { selectRandom } from "@/helper/function";
import { Button } from "flowbite-react";
import { useState } from "react";
import ChatInput from "./ChatInput";
import UserChatContent from "./UserChatContent";
import WelcomeUserChatContent from "./WelcomeUserChatContent";

interface ChatContainerProps {
  chat?: IConversationResult;
}

const ChatContainer = ({ chat }: ChatContainerProps) => {
  const [isChat, setIsChat] = useState(false);
  const userImage = selectRandom(avatar);
  const onCLickButton = (): void => {
    setIsChat(true);
    console.log(chat);
  };
  return (
    <>
      {!isChat ? (
        <div className="flex flex-col gap-2">
          <div className="h-full flex items-center justify-center">
            <Button
              className="w-fit h-fit rounded-full bg-blue-500 font-bold shadow-lg hover:translate-y-0.5 border-blue-500 hover:shadow-none"
              onClick={onCLickButton}
            >
              Bắt đầu đoạn Chat mới
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-[30px] max-w-full h-full flex flex-col justify-between">
          <div className="h-full flex flex-col overflow-auto pb-4 gap-4">
            <WelcomeUserChatContent imgUrl={userImage} />
            <UserChatContent isUser={true} userImage={userImage} />
            <UserChatContent imgUrl={userImage} />
          </div>
          <ChatInput />
        </div>
      )}
    </>
  );
};

export default ChatContainer;
