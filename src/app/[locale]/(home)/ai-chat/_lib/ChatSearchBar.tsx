"use client";
import { IoSearchOutline } from "react-icons/io5";
const ChatSearchBar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex relative items-center rounded-2xl w-[80%] h-[35px] ">
        <input
          id="input-search"
          type="text"
          placeholder="Search"
          className="h-full px-[40px] shadow-inner border-black bg-[#F5F9FC] focus:bg-white w-full rounded-2xl focus:!shadow-inner  !border-none focus:!border-none"
        />
        <IoSearchOutline
          size={20}
          className="absolute top-[7.5px] left-[10px]"
        />
      </div>
    </div>
  );
};

export default ChatSearchBar;
