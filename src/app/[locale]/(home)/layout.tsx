"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { cn } from "@/helper/function";
import { useState } from "react";
import { IoIosChatbubbles } from "react-icons/io";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="h-[calc(100%-130px)] flex flex-col min-h-fit duration-300 bg-white dark:bg-[#1F1F1F]">
          {children}
        </div>
        <Footer />
      </div>
      <div
        role="button"
        className="fixed duration-200 bottom-[40px] hover:scale-110  right-8 rounded-full p-2 bg-black dark:bg-white"
      >
        <IoIosChatbubbles size={40} className="text-white dark:text-black" />
      </div>
    </div>
  );
};

export default Layout;
