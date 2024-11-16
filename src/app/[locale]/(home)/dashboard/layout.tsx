import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="2xl:px-[175px] px-[15px] pt-[10px]">{children}</div>;
};

export default layout;
