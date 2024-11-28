import { ReactNode } from "react";
import Header from "./_lib/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="2xl:px-[175px]  min-h-[calc(100%-150px)] px-[15px] box-border py-[20px] bg-[#F5F9FC] h-fit">
        <div className="border divide-x grid grid-cols-[25%,75%] max-w-full bg-white rounded-xl shadow-lg h-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
