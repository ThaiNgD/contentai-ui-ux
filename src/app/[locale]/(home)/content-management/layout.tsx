import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col flex-auto h-full">{children}</div>;
};

export default layout;
