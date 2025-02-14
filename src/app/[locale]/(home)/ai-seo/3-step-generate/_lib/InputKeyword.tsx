"use client";
import { Button } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { GoDotFill } from "react-icons/go";
import InputContent from "./InputContent";
interface InputKeywordProps {
  setStepsOutline: () => void;
  setTitle: Dispatch<SetStateAction<string>>;
}
const InputKeyword = ({ setStepsOutline, setTitle }: InputKeywordProps) => {
  const [ckData, setCkData] = useState("");
  const handleNextStepAction = (): void => {
    setTitle(ckData);
    setStepsOutline();
  };
  return (
    <div className="grid grid-cols-[35%,65%] h-[calc(100%-200px)] px-[100px] pr-[125px] py-[40px] gap-[30px] ">
      <InputContent setCkData={setCkData} />
      <div className="bg-white flex flex-col p-[20px] shadow-xl rounded-xl">
        <div className="border rounded-lg flex items-center">
          <div className="rounded-l-lg w-[50px] h-full border-r bg-gray-200 min-h-[40px] flex justify-center items-center">
            <GoDotFill size={16} />
          </div>
          <div className="flex ml-5 flex-auto items-center">
            {ckData ? (
              <>
                Từ khóa tìm thấy:{" "}
                <span className="ml-2 underline font-bold">{ckData}</span>
              </>
            ) : (
              <span className="italic text-sm font-bold opacity-60">
                Chưa bắt đầu tiến trình
              </span>
            )}
          </div>
        </div>
        {ckData && (
          <Button
            className="bg-blue-500 font-bold w-fit mx-auto px-[50px] mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
            onClick={handleNextStepAction}
          >
            Tạo Outline với tiêu đề này
          </Button>
        )}
      </div>
    </div>
  );
};

export default InputKeyword;
