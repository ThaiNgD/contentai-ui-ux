import { cn } from "@/helper/function";
import Image, { StaticImageData } from "next/image";

interface WelcomeUserChatContentProps {
  imgUrl?: StaticImageData;
  widthCls?: string;
  userName?: string;
}
const WelcomeUserChatContent = ({
  imgUrl,
  widthCls,
  userName,
}: WelcomeUserChatContentProps) => {
  return (
    <div className={cn("flex  gap-4 ", widthCls)}>
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
        <div className="flex relative group flex-col">
          <div className="w-fit group rounded-xl bg-gray-100 relative">
            <p className="text-sm w-fit p-2 text-gray-500 dark:text-gray-400">
              Hello {userName}, How can I help you?
            </p>
            {/* <div
              role="button"
              className="group-hover:block absolute bg-white text-gray-400 border -right-3 rounded-full -bottom-5 hidden p-[6px]"
            >
              <IoIosCopy size={16} />
            </div> */}
          </div>
          <span className={cn("text-xs opacity-50 ml-1")}>11:11 am</span>
          {/* <div className="absolute invisible group-hover:visible w-[30px] h-[30px] right-0 top-0 bg-gray-300 rounded-full" /> */}
        </div>
      </div>
      <div className="flex-shrink-0 w-[30px] h-[30px] invisible bg-gray-300 rounded-full" />
    </div>
  );
};

export default WelcomeUserChatContent;
