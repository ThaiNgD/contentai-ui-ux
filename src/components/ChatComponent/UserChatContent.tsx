import { cn, formatDateToVietnamese } from "@/helper/function";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { IoIosCopy } from "react-icons/io";
interface UserChatContentProps {
  imgUrl?: StaticImageData;
  widthCls?: string;
  isUser?: boolean;
  userImage?: StaticImageData;
  message?: string;
  timeStamp: number;
}

const UserChatContent = ({
  imgUrl,
  widthCls,
  isUser,
  userImage,
  message,
  timeStamp,
}: UserChatContentProps) => {
  const [, setChat] = useState("");
  useEffect(() => {
    if (message) {
      let i = 0;
      const intervalId = setInterval(() => {
        setChat(message.slice(0, i));

        i++;

        if (i > message.length) {
          clearInterval(intervalId);
        }
      }, 4);

      return () => clearInterval(intervalId);
    }
  }, [message]);
  return (
    <div className={cn("flex gap-4 w-full", widthCls)}>
      {imgUrl && !isUser ? (
        <Image
          alt="User Avatar"
          src={imgUrl}
          className="flex-shrink-0 w-[30px] h-[30px] bg-gray-300 rounded-full"
        />
      ) : (
        <div className="flex-shrink-0 w-[30px] h-[30px] invisible bg-gray-300 rounded-full" />
      )}
      <div
        className={cn(
          "flex-grow min-h-fit flex rounded-xl",
          !isUser ? "justify-start" : "justify-end"
        )}
      >
        <div
          className={cn(
            "flex relative group max-w-[80%] flex-col ",
            !isUser ? "items-start" : "items-end"
          )}
        >
          <div className="w-fitrelative rounded-xl p-2 bg-gray-100">
            <p className="text-sm text-cursor whitespace-normal text-center typewriter-animation w-fit text-gray-500 dark:text-gray-400 box-border text-wrap">
              {message}
              {/* <svg
                className="w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
              >
                <circle
                  fill="#BFCCD2"
                  stroke="#BFCCD2"
                  stroke-width="15"
                  r="15"
                  cx="40"
                  cy="100"
                >
                  <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="-.4"
                  ></animate>
                </circle>
                <circle
                  fill="#BFCCD2"
                  stroke="#BFCCD2"
                  stroke-width="15"
                  r="15"
                  cx="100"
                  cy="100"
                >
                  <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="-.2"
                  ></animate>
                </circle>
                <circle
                  fill="#BFCCD2"
                  stroke="#BFCCD2"
                  stroke-width="15"
                  r="15"
                  cx="160"
                  cy="100"
                >
                  <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="0"
                  ></animate>
                </circle>
              </svg> */}
            </p>
            <div
              role="button"
              className={cn(
                "group-hover:block absolute bg-white text-gray-400 border rounded-full -bottom-5 hidden p-[6px]",
                isUser ? "-left-3" : "-right-3"
              )}
            >
              <IoIosCopy size={16} />
            </div>
          </div>
          <span
            className={cn(
              "text-xs opacity-50",
              isUser ? "mr-1 self-end" : "ml-1"
            )}
          >
            {formatDateToVietnamese(timeStamp * 1000).formattedTime}
          </span>
        </div>
      </div>
      {userImage && isUser ? (
        <Image
          alt="User Avatar"
          src={userImage}
          className="flex-shrink-0 w-[30px] h-[30px] bg-gray-300 rounded-full"
        />
      ) : (
        <div className="flex-shrink-0 w-[30px] h-[30px] invisible bg-gray-300 rounded-full" />
      )}
    </div>
  );
};

export default UserChatContent;
