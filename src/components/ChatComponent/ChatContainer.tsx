"use client";
import { avatar } from "@/assets/images/avatar-image";
import { selectRandom } from "@/helper/function";
import { Button } from "flowbite-react";
import { useState } from "react";
import ChatInput from "./ChatInput";
import UserChatContent from "./UserChatContent";

const ChatContainer = () => {
  const [isChat, setIsChat] = useState(false);
  const userImage = selectRandom(avatar);
  const onCLickButton = (): void => {
    setIsChat(true);
  };
  return (
    <div className="flex flex-col justify-between gap-2">
      {!isChat ? (
        <div className="h-full flex items-center justify-center">
          <Button
            className="w-fit h-fit rounded-full bg-blue-500 font-bold shadow-lg hover:translate-y-0.5 border-blue-500 hover:shadow-none"
            onClick={onCLickButton}
          >
            Bắt đầu đoạn Chat mới
          </Button>
        </div>
      ) : (
        <div className="p-[30px] h-full flex flex-col justify-between">
          <div className="flex flex-col h-full overflow-auto pb-4 gap-4">
            <UserChatContent imgUrl={userImage} />
            <UserChatContent isUser={true} userImage={userImage} />
          </div>
          <ChatInput />
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
