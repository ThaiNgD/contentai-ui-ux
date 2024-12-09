import ImageChatContainer from "@/components/ChatComponent/ImageChatContainer";
import ChatHeader from "./_lib/ChatHeader";
import Header from "./_lib/Header";

const Page = () => {
  return (
    <>
      <Header />
      <div className="p-[20px] 2xl:px-[175px] px-[15px] bg-[#F5F9FC] h-[calc(100%-150px)]">
        <div className="grid divide-y h-full bg-white py-[10px] rounded-lg border grid-rows-[15%,85%]">
          <ChatHeader />
          <ImageChatContainer />
        </div>
      </div>
    </>
  );
};

export default Page;
