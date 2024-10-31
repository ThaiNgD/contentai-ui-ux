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
        <div className="p-2 bg-white">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
