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
        <div className="border shadow-xl rounded-2xl w-[500px] h-[full] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
