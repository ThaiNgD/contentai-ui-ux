import BackGroundImage from "@/assets/images/banner-load.png";
import LogoImage from "@/assets/images/content-ai-2.png";
import ChangeLanguage from "@/components/ChangeLanguage";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
export default async function layout({
  params,
  children,
}: Readonly<{
  params: Promise<{
    locale: string;
  }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div
      className={`px-[30px] flex items-center justify-between bg-white h-screen`}
    >
      <Image
        src={BackGroundImage}
        className="lg:block hidden lg:w-[50%]"
        alt="Background Image"
      />
      <div className="w-full lg:w-[50%] flex items-center justify-center">
        <div className="relative border p-[20px] pt-[40px] flex flex-col gap-[20px] shadow-xl rounded-2xl w-[500px] h-[full] bg-white">
          <div className="absolute right-2 top-2">
            <ChangeLanguage />
          </div>
          <Image src={LogoImage} className="w-[80%] m-auto" alt="Logo Image" />
          {children}
        </div>
      </div>
    </div>
  );
}
