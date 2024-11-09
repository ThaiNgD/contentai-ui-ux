import { cn } from "@/helper/function";
import Image, { StaticImageData } from "next/image";
interface UserChatContentProps {
  imgUrl?: StaticImageData;
  widthCls?: string;
  isUser?: boolean;
  userImage?: StaticImageData;
}
const UserChatContent = ({
  imgUrl,
  widthCls,
  isUser,
  userImage,
}: UserChatContentProps) => {
  return (
    <div className={cn("flex  gap-4 ", widthCls)}>
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
        <div className="flex relative group flex-col">
          <p className="text-sm rounded-xl bg-gray-100 w-fit p-2 text-gray-500 dark:text-gray-400">
            Last Message
          </p>
          <span
            className={cn(
              "text-xs opacity-50",
              isUser ? "mr-1 self-end" : "ml-1"
            )}
          >
            11:11 am
          </span>
          {/* <div className="absolute invisible group-hover:visible w-[30px] h-[30px] right-0 top-0 bg-gray-300 rounded-full" /> */}
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
