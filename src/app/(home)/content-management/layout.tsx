import { ReactNode } from "react";
import Header from "./_lib/Header";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default layout;
