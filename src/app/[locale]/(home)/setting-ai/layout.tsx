import { ReactNode } from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-[50px] bg-[#F5F9FC] h-full p-[50px]">
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center text-2xl font-[900] gap-2">
          <GiArtificialIntelligence size={32} />
          AI Settings
        </div>
        <span className="text-sm font-bold">Cấu hình API Key cho AI</span>
      </div>
      <div className="px-[175px] flex flex-col gap-[30px]">{children}</div>
    </div>
  );
};

export default layout;
