"use client";
import { avatar } from "@/assets/images/avatar-image";
import { selectRandom } from "@/helper/function";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import DragnDropFile from "../DragnDropFile";
import ChatInput from "./ChatInput";
import UserChatContent from "./UserChatContent";
import WelcomeUserChatContent from "./WelcomeUserChatContent";

const ImageChatContainer = () => {
  const userImage = selectRandom(avatar);
  const [file, setFile] = useState<File | null>();
  const [isChat, setIsChat] = useState(false);
  return (
    <div className="flex h-full flex-col p-[30px]  justify-between gap-2">
      {" "}
      {isChat && file ? (
        <div className="flex md:flex-row flex-col items-center gap-[20px] h-full ">
          <Image
            src={URL.createObjectURL(file)}
            alt="place-holder"
            width="50"
            height="50"
            className="h-auto shadow-md max-h-[300px] w-auto max-w-[40%]"
            objectFit="cover"
          />
          <div className="flex flex-col  h-full flex-auto gap-3 justify-between">
            <div className="flex flex-col h-[calc(100%-150px)] overflow-auto pb-4 gap-4">
              <WelcomeUserChatContent imgUrl={userImage} />
              <UserChatContent
                message="Thai"
                isUser={true}
                userImage={userImage}
                timeStamp={0}
              />
              <UserChatContent timeStamp={0} message="AI" imgUrl={userImage} />
            </div>
            <ChatInput threadId="" />
          </div>
        </div>
      ) : (
        <>
          <DragnDropFile
            type="image"
            acceptedFile="image/*"
            setFile={setFile}
          />
          <Button
            className="w-fit self-center px-[50px] bg-blue-500 rounded-xl shadow-lg hover:shadow-none hover:translate-y-0.5 border-blue-500"
            onClick={(): void => {
              if (file) {
                setIsChat(true);
              } else {
                toast.error("Chưa có file nhập vào");
              }
            }}
          >
            Bắt đầu Chat
          </Button>
        </>
      )}
    </div>
  );
};

export default ImageChatContainer;
