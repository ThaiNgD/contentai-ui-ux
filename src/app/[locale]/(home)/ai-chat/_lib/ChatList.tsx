import ChatDisplayContainer from "@/components/ChatComponent/ChatDisplayContainer";

const ChatList = () => {
  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto">
      <ChatDisplayContainer />
      <ChatDisplayContainer />
      <ChatDisplayContainer />
      <ChatDisplayContainer />
      <ChatDisplayContainer />
    </div>
  );
};

export default ChatList;
