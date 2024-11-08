import { Button } from "flowbite-react";

const ChatContainer = () => {
  return (
    <div className="flex flex-col justify-between gap-2">
      <div className="h-[80%] flex items-center justify-center">
        <Button className="w-fit h-fit rounded-full bg-blue-500 font-bold shadow-lg hover:translate-y-0.5 border-blue-500 hover:shadow-none ">
          Bắt đầu đoạn Chat
        </Button>
      </div>
      <div className="h-[15%]"></div>
    </div>
  );
};

export default ChatContainer;
