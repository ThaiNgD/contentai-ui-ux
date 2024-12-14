import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="flex-auto flex flex-col h-full">{children}</div>;
};

export default layout;
