import ChatDisplayContainer from "@/components/ChatComponent/ChatDisplayContainer";

const ChatList = () => {
  return (
    <div className="flex mt-[15px] flex-col overflow-y-auto">
      <ChatDisplayContainer />
      <ChatDisplayContainer />
      <ChatDisplayContainer />
      <ChatDisplayContainer />
      <ChatDisplayContainer />
    </div>
  );
};

export default ChatList;
