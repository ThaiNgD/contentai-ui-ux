import BackGroundImage from "@/assets/images/banner-load.png";
import Image from "next/image";
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`px-[30px] flex items-center justify-between bg-white h-screen`}
    >
      <Image src={BackGroundImage} className="w-[50%]" alt="Background Image" />
      <div className="w-[50%] flex items-center justify-center">
        <div className="border-2 shadow-xl rounded-lg w-[500px] h-[800px] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
