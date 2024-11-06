import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col overflow-y-auto scrollbar-none flex-auto transition-all duration-300">
        <Header />
        <div className="h-[calc(100%-130px)] min-h-fit duration-300 bg-white dark:bg-[#1F1F1F]">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
