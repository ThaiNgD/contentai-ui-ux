import { cn } from "@/helper/function";
import Image, { StaticImageData } from "next/image";
interface TypingTextProps {
  imgUrl?: StaticImageData;
  widthCls?: string;
}

const TypingText = ({ imgUrl, widthCls }: TypingTextProps) => {
  return (
    <div className={cn("flex gap-4 w-full", widthCls)}>
      {imgUrl ? (
        <Image
          alt="User Avatar"
          src={imgUrl}
          className="flex-shrink-0 w-[30px] h-[30px] bg-gray-300 rounded-full"
        />
      ) : (
        <div className="flex-shrink-0 w-[30px] h-[30px] invisible bg-gray-300 rounded-full" />
      )}
      <div className={cn("flex-grow min-h-fit flex rounded-xl justify-start")}>
        <div
          className={cn("flex relative group max-w-[80%] flex-col items-start")}
        >
          <div className="w-fit relative rounded-xl p-2 bg-gray-100">
            <p className="text-sm whitespace-normal w-fit text-gray-500 dark:text-gray-400 box-border text-wrap">
              <svg
                className="w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
              >
                <circle
                  fill="#BFCCD2"
                  stroke="#BFCCD2"
                  strokeWidth="15"
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
                  strokeWidth="15"
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
                  strokeWidth="15"
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
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 w-[30px] h-[30px] invisible bg-gray-300 rounded-full" />
    </div>
  );
};

export default TypingText;
