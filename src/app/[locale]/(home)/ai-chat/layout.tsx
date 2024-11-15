import { ReactNode } from "react";
import Header from "./_lib/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="px-[175px] py-[20px] bg-[#F5F9FC] h-[calc(100%-150px)]">
        <div className="border divide-x grid grid-cols-[25%,75%] bg-white rounded-xl shadow-lg h-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
