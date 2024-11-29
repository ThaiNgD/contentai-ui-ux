import { useFetchUserInfo } from "@/service/auth/useFetchUserInfor";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { RiAddLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
const HeaderTokenLeft = () => {
  const { data } = useFetchUserInfo();
  return (
    <div className="rounded-xl items-center justify-center flex gap-4 border px-2 py-1 h-[36px]  min-w-[120px] shadow-inner">
      <MdOutlineGeneratingTokens className=" text-yellow-300" size={24} />
      <span className="be-vietnam-pro-bold text-blue-500 text-[14px]">
        {data && data?.token_limit - data?.tokens_used}
      </span>
      <div
        className="token-tooltip p-1 rounded-full border hover:bg-blue-500 duration-200 hover:text-white text-blue-500"
        role="button"
      >
        <RiAddLine size={16} />
      </div>
      <Tooltip anchorSelect=".token-tooltip" place="bottom">
        Mua thêm token ở đây.
      </Tooltip>
    </div>
  );
};

export default HeaderTokenLeft;
