import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="px-[175px] pt-[10px]">{children}</div>;
};

export default layout;
