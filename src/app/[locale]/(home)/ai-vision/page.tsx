import ChatContainer from "@/components/ChatComponent/ChatContainer";
import { Button } from "flowbite-react";
import ChatHeader from "./_lib/ChatHeader";
import ChatList from "./_lib/ChatList";
import ChatSearchBar from "./_lib/ChatSearchBar";
import Header from "./_lib/Header";

const Page = () => {
  return (
    <>
      <Header />
      <div className="px-[175px] p-[20px] bg-[#F5F9FC] h-[calc(100%-150px)]">
        <div className="border divide-x  grid grid-cols-[20%,80%] bg-white rounded-xl shadow-lg h-full">
          <div className="grid divide-y  grid-rows-[15%,85%]">
            <ChatSearchBar />
            <div className="w-full py-[15px] flex flex-col gap-2">
              <Button className="w-fit self-center place-items-center font-bold rounded-full bg-blue-500 shadow-md border-blue-500 hover:shadow-none hover:translate-y-0.5 duration-200">
                Thêm đoạn Chat
              </Button>
              <ChatList />
            </div>
          </div>
          <div className="grid divide-y grid-rows-[15%,85%]">
            <ChatHeader />
            <ChatContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
