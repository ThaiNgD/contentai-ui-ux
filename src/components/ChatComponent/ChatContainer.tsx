"use client";
import { avatar } from "@/assets/images/avatar-image";
import { selectRandom } from "@/helper/function";
import { Button } from "flowbite-react";
import { useState } from "react";
import ChatInput from "./ChatInput";
import UserChatContent from "./UserChatContent";
import WelcomeUserChatContent from "./WelcomeUserChatContent";

interface ChatContainerProps {
  chat?: IConversationDetail; // Kiểu props
}

const ChatContainer = ({ chat }: ChatContainerProps) => {
  const [isChat, setIsChat] = useState(false);
  const userImage = selectRandom(avatar);

  const onClickButton = (): void => {
    setIsChat(true);
  };

  return (
    <div className="flex flex-col justify-between gap-2">
      {!isChat && !chat ? (
        <div className="h-full flex items-center justify-center">
          <Button
            className="w-fit h-fit rounded-full bg-blue-500 font-bold shadow-lg hover:translate-y-0.5 border-blue-500 duration-200 hover:shadow-none"
            onClick={onClickButton}
          >
            Bắt đầu đoạn Chat mới
          </Button>
        </div>
      ) : (
        <div className="p-[30px] max-w-full h-full flex flex-col justify-between">
          <div className="h-full max-h-[40vh] flex flex-col overflow-auto pb-4 gap-4">
            <WelcomeUserChatContent imgUrl={userImage} />
            {chat?.conversation?.map((con, index) => {
              if (con.role === "assistant") {
                return (
                  <UserChatContent
                    key={index}
                    message={con.message}
                    imgUrl={userImage}
                    timeStamp={con.timestamp}
                  />
                );
              } else {
                return (
                  <UserChatContent
                    isUser={true}
                    key={index}
                    imgUrl={userImage}
                    message={con.message}
                    timeStamp={con.timestamp}
                  />
                );
              }
            })}
          </div>
          <ChatInput />
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
