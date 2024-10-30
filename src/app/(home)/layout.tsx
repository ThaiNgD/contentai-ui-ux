import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default layout;
