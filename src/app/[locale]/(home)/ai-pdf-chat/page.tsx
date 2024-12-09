import PDFChatContainer from "@/components/ChatComponent/PDFChatContainer";
import ChatHeader from "./_lib/ChatHeader";
import Header from "./_lib/Header";

const Page = () => {
  return (
    <>
      <Header />
      <div className="p-[20px] 2xl:px-[50px] px-[15px] bg-[#F5F9FC] min-h-[calc(100%-150px)] h-fit flex-auto">
        <div className="flex flex-col border shadow-md rounded-lg py-[10px] h-full bg-white divide-y">
          <ChatHeader />
          <PDFChatContainer />
        </div>
      </div>
    </>
  );
};

export default Page;
