import { IoChatboxEllipses } from "react-icons/io5";

const ChatDisplayContainer = () => {
  return (
    <div className="w-full group border-b items-center shadow-inner flex gap-2 p-[20px] h-[80px]">
      <div className="p-2 shadow-inner bg-gray-100 rounded-full h-fit w-fit">
        <IoChatboxEllipses size={20} />
      </div>
      <div className="flex flex-col">
        <span>Tilte</span>
        <span className="text-xs opacity-50 text-black ">5 ngày trước</span>
      </div>
    </div>
  );
};

export default ChatDisplayContainer;
