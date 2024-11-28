"use client";

import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Header = () => {
  const router = useRouter();
  const { locale } = useGetPathComponent();
  const handleClickBack = (): void => {
    router.push(`/${locale}/dashboard`);
  };

  return (
    <div className="2xl:px-[175px] px-[15px] py-[35px] h-[150px] flex items-center justify-between border-b">
      <div className="flex flex-col gap-2">
        <span
          role="button"
          className="text-sm hover:underline hover:opacity-100 flex gap-2 opacity-70"
          onClick={handleClickBack}
        >
          <MdOutlineKeyboardBackspace size={16} />
          Trở về
        </span>
        <h1 className="text-3xl font-extrabold">Nâng cấp gói API</h1>
        <span className="text-sm opacity-70">
          Mua gói API thích hợp để sử dụng cho mục đích cá nhân của bạn. Hãy lựa
          chọn phù hợp nhé.
        </span>
      </div>
    </div>
  );
};

export default Header;
