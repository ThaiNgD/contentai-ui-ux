"use client";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { LuLayoutTemplate } from "react-icons/lu";
import { MdSettingsVoice } from "react-icons/md";
import { PiOpenAiLogo, PiTextAlignLeftFill } from "react-icons/pi";
import TextAreaField from "../CustomField/TextAreaField";
const ChatInput = () => {
  return (
    <>
      <div className="flex items-center p-2 px-4 h-fit justify-between bg-gray-200 rounded-xl ">
        <div className="p-2 h-fit bg-blue-500 rounded-full">
          <GrAttachment size={24} className="text-white" />
        </div>
        <TextAreaField
          clsChildren="flex"
          name={""}
          classWapper="w-[calc(100%-350px)]"
          clsTextArea="max-h-[100px] h-[48px] min-h-[48px] bg-white rounded-l-xl"
          placeholder="Nhập tin nhắn"
        />
        <div className="flex gap-2 items-center">
          <div className="flex gap-4 p-1 px-3 bg-white rounded-xl">
            <div
              className="p-2 bg-blue-500 hover:scale-110 rounded-full"
              role="button"
            >
              <PiTextAlignLeftFill size={24} className="text-white" />
            </div>
            <div
              className="p-2 bg-blue-500 hover:scale-110 rounded-full"
              role="button"
            >
              <LuLayoutTemplate size={24} className="text-white" />
            </div>
            <div
              className="p-2 bg-blue-500 hover:scale-110 rounded-full"
              role="button"
            >
              <MdSettingsVoice size={24} className="text-white" />
            </div>
            <div
              className="p-2 bg-blue-500 hover:scale-110 rounded-full"
              role="button"
            >
              <PiOpenAiLogo size={24} className="text-white" />
            </div>
          </div>
          <div className="p-2 ml-2 h-fit bg-blue-500 rounded-full">
            <IoSend size={24} className="-rotate-12 text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInput;
