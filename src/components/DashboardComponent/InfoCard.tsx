import { IconType } from "react-icons";

interface InfoCardProps {
  icon: IconType;
  title: string;
  value: number | string;
  contents: string;
  // svgType: "type1" | "type2" | "type3" | "type4" | "type5" | "type6";
}

const InfoCard = ({
  title,
  value,
  contents,
  icon,
}: // svgType,
InfoCardProps): JSX.Element => {
  const Icon = icon;
  return (
    <div className="bg-white dark:bg-[#0D0B0B] dark:text-white border px-4 py-3 w-full items-center rounded-xl h-[70px] flex gap-4 ">
      <div className="rounded-full dark:text-black dark:bg-white dark:shadow-white h-fit bg-black text-white p-2">
        <Icon size={20} />
      </div>
      <div className="flex flex-col overflow-hidden justify-center w-[calc(100%-50px)] ">
        <p className="text-black dark:text-white whitespace-nowrap text-sm opacity-60 text-ellipsis">
          {title}
        </p>
        <span className="text-black dark:text-white text-xl font-bold text-ellipsis flex gap-2">
          {value} <p className="font-normal whitespace-nowrap">{contents}</p>
        </span>
      </div>
      {/* {renderSVG(svgType)} */}
    </div>
  );
};
export default InfoCard;
