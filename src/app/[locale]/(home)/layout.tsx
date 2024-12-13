"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { cn } from "@/helper/function";
import { useState } from "react";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState(false);
  // const { locale } = useGetPathComponent();
  // const { data: user } = useGetProfile(true);
  // useLayoutEffect(() => {
  //   if (!user) {
  //     redirect(`/${locale}/login`);
  //   }
  // }, []);

  return (
    <div className="flex w-screen overflow-x-hidden h-screen relative">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={
          (cn(
            "flex flex-col overflow-y-auto scrollbar-none flex-auto transition-all duration-300"
          ),
          isOpen ? "w-[calc(100%-64px)]" : "w-[calc(100%-256px)]")
        }
      >
        <Header />
        <div className="h-[calc(100%-130px)] shadow-inner flex flex-col min-h-fit duration-300 bg-white dark:bg-[#1F1F1F]">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
