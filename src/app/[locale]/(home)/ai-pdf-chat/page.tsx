import PDFChatContainer from "@/components/ChatComponent/PDFChatContainer";
import ChatHeader from "./_lib/ChatHeader";
import ChatList from "./_lib/ChatList";
import ChatSearchBar from "./_lib/ChatSearchBar";
import Header from "./_lib/Header";

const Page = () => {
  return (
    <>
      <Header />
      <div className="p-[20px] 2xl:px-[175px] px-[15px] bg-[#F5F9FC] h-[calc(100%-150px)]">
        <div className="border divide-x  grid grid-cols-[22rem_minmax(0,1fr)] bg-white rounded-xl shadow-lg h-full">
          <div className="grid divide-y grid-rows-[15%,85%]">
            <ChatSearchBar />
            <div className="w-full max-h-full">
              <ChatList />
            </div>
          </div>
          <div className="grid divide-y grid-rows-[15%,85%]">
            <ChatHeader />
            <PDFChatContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
