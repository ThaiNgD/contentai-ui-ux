"use client";
import { Button } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { GoDotFill } from "react-icons/go";
import InputContent from "./InputContent";
interface InputKeywordProps {
  setStepsOutline: () => void;
  setIdea: Dispatch<SetStateAction<string>>;
}
const InputKeyword = ({ setStepsOutline, setIdea }: InputKeywordProps) => {
  const [ckData, setCkData] = useState("");
  const handleNextStepAction = (): void => {
    setIdea(ckData);
    setStepsOutline();
  };
  return (
    <div className="grid grid-cols-[35%,65%] h-[calc(100%-200px)] px-[100px] pr-[125px] py-[40px] gap-[30px] ">
      <InputContent setCkData={setCkData} />
      <div className="bg-white flex flex-col p-[20px] shadow-xl rounded-xl">
        <div className="border rounded-lg flex items-center">
          <div className="rounded-l-lg min-w-[50px] border-r bg-gray-200 h-full min-h-[40px] flex justify-center items-center">
            <GoDotFill size={16} />
          </div>
          <div className="flex ml-5 flex-auto items-center">
            {ckData ? (
              <span>
                Từ khóa tìm thấy:{" "}
                <span className="underline font-bold ml-1">{ckData}</span>
              </span>
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
            Tạo Outline với ý tưởng này
          </Button>
        )}
      </div>
    </div>
  );
};

export default InputKeyword;
