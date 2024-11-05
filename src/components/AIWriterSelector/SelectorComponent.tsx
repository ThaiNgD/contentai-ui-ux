"use client";
import Icon from "@/app/favicon.ico";
import { AIWriterSelector } from "@/config/configAIWriterSelector";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaAngleRight, FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
const SelectorComponent = ({ selector }: { selector: AIWriterSelector }) => {
  const router = useRouter();
  const handleCLickDiv = (): void => {
    router.push(`/ai-writer/${selector.slug}`);
  };
  return (
    <div
      className="px-[50px] group py-[30px] flex w-[410px] h-[230px] flex-col border gap-2 relative"
      role="button"
      onClick={handleCLickDiv}
    >
      {selector.image ? (
        <Image
          src={selector.image}
          alt="Icon"
          className="size-[45px] group-hover:shadow-lg duration-200 group-hover:-translate-y-0.5 rounded-full border"
        />
      ) : (
        <Image
          src={Icon}
          alt="Icon"
          className="size-[45px] group-hover:shadow-lg duration-200 group-hover:-translate-y-0.5 border rounded-full"
        />
      )}
      <h1 className="text-xl group-hover:underline duration-200 font-bold flex items-center">
        {selector.title}{" "}
        <FaAngleRight
          size={20}
          className="invisible group-hover:visible group-hover:translate-x-1 duration-200"
        />
      </h1>
      <p className="text-sm opacity-70">{selector.description}</p>
      {selector.isFavorite ? (
        <div className="shadow-md absolute right-4 top-4 rounded-full hover:bg-blue-500 hover:text-white text-blue-500 p-2 hover:translate-y-0.5 hover:shadow-none hover:shadow-blue-500">
          <FaStar size={18} />
        </div>
      ) : (
        <div className="shadow-md absolute right-4 top-4 rounded-full hover:bg-blue-500 hover:text-white text-blue-500 p-2 hover:translate-y-0.5 hover:shadow-none hover:shadow-blue-500">
          <FaRegStar size={18} />
        </div>
      )}
    </div>
  );
};

export default SelectorComponent;
