import Avatar from "@/assets/images/avatar.jpg";
import Image from "next/image";
const HeaderAccountDropdownInfo = () => {
  return (
    <>
      <Image
        className="size-[40px] rounded-full border"
        src={Avatar}
        alt="Avatar"
      />
    </>
  );
};

export default HeaderAccountDropdownInfo;
