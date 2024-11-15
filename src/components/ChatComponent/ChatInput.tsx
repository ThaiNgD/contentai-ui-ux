"use client";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { PiOpenAiLogo } from "react-icons/pi";
import TextAreaField from "../CustomField/TextAreaField";
const ChatInput = () => {
  return (
    <>
      <div className="flex items-center p-2 px-4 h-fit gap-2 bg-gray-200 justify-between rounded-xl ">
        <div className="p-2 h-fit bg-blue-500 rounded-full">
          <GrAttachment size={20} className="text-white" />
        </div>
        <TextAreaField
          clsChildren="flex"
          name={""}
          classWapper="w-[calc(100%-150px)]"
          clsTextArea="max-h-[100px] h-[40px] min-h-[40px] bg-white rounded-l-xl"
          placeholder="Nhập tin nhắn"
        />
        <div className="flex gap-2 items-center">
          <div
            className="p-2 bg-white hover:scale-110 rounded-full"
            role="button"
          >
            <PiOpenAiLogo size={20} className="text-blue-500" />
          </div>
          <div className="p-2 ml-2 h-fit hover:scale-110 bg-blue-500 rounded-full">
            <IoSend size={20} className="-rotate-12 text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInput;
