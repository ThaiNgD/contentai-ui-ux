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
    <div className="bg-white border px-4 py-3 items-center rounded-xl w-[300px] h-[70px] flex gap-4 ">
      <div className="rounded-full h-fit shadow-md p-2">
        <Icon size={20} />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-black text-sm opacity-60">{title}</p>
        <span className="text-black text-xl font-bold flex gap-2">
          {value} <p className="font-normal">{contents}</p>
        </span>
      </div>
      {/* {renderSVG(svgType)} */}
    </div>
  );
};
export default InfoCard;
