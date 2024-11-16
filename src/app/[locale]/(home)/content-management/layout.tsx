import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col flex-auto">{children}</div>;
};

export default layout;
