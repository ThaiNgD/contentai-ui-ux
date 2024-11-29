"use client";
import { avatar } from "@/assets/images/avatar-image";
import { selectRandom } from "@/helper/function";
import { useAddConversation } from "@/service/ai-chat/useAddConversation";
import { Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import ChatInput from "./ChatInput";
import UserChatContent from "./UserChatContent";
import WelcomeUserChatContent from "./WelcomeUserChatContent";

// Cập nhật kiểu dữ liệu cho props
interface ChatContainerProps {
  chat?: IConversationDetail;
  setChat: Dispatch<SetStateAction<IConversationDetail | undefined>>;
}

const ChatContainer = ({ chat, setChat }: ChatContainerProps) => {
  const userImage = selectRandom(avatar);

  const addNewMessageMutation = useAddConversation(1);

  const handleAddNew = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const test = await addNewMessageMutation.mutateAsync(1);
      console.log("test", test);
      setChat(test);
    } catch (error) {
      toast.error("Lỗi khi thêm cuộc trò chuyện mới");
      console.log(error);
    }
  };

  return (
    <div className="flex max-h-[680px] flex-col justify-between gap-2">
      {!chat ? (
        <div className="h-full flex items-center justify-center">
          <Button
            className="w-fit h-fit rounded-full bg-blue-500 font-bold shadow-lg hover:translate-y-0.5 border-blue-500 duration-200 hover:shadow-none"
            onClick={handleAddNew}
          >
            Bắt đầu đoạn Chat mới
          </Button>
        </div>
      ) : (
        <div className="p-[30px] max-w-full h-full flex flex-col justify-between">
          <div className="h-full max-h-[calc(100%-90px)] scrollbar-thin flex flex-col overflow-auto pb-4 gap-4">
            <WelcomeUserChatContent imgUrl={userImage} />
            {chat?.conversation?.map((con, index) => {
              return (
                <UserChatContent
                  key={index}
                  isUser={con.role !== "assistant"}
                  message={con.message}
                  imgUrl={userImage}
                  timeStamp={con.timestamp}
                />
              );
            })}
          </div>
          <ChatInput threadId={chat?.threadId || ""} />
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
