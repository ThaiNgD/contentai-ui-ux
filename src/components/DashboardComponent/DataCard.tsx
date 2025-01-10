import { IconType } from "react-icons";
import { FaQuestion } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

export interface DataCardProps {
  tooltip_id?: string;
  title: string;
  info?: string | number;
  tooltip?: string;
  icon: IconType;
}
const DataCard = ({
  title,
  tooltip,
  info,
  tooltip_id,
  icon,
}: DataCardProps) => {
  const Icon = icon;
  return (
    <div className="bg-white h-full min-w-[22.5%] p-4 rounded-lg  shadow-lg flex flex-col md:flex-row md:gap-2 gap-4 z-10">
      <div className="p-3 w-fit h-fit rounded-full shadow-inner bg-gray-200">
        <Icon size={24} />
      </div>
      <div className="flex-auto flex flex-col justify-between md:flex-1">
        <div className="flex gap-1 font-bold text-[#FFB951] shadow-custom">
          {title}
          {tooltip && (
            <div
              id={tooltip_id}
              className={`w-fit h-fit cursor-pointer border bg-black text-white rounded-full p-1`}
            >
              <FaQuestion size={8} />
            </div>
          )}
        </div>
        <p className="shadow-number font-bold  text-blue-500  text-base md:text-xl">
          {info ? info : 0}
        </p>
        {tooltip && (
          <>
            <Tooltip
              className="z-50"
              anchorSelect={`#${tooltip_id}`}
              place={"bottom"}
            >
              {tooltip}
            </Tooltip>
          </>
        )}
      </div>
    </div>
  );
};

export default DataCard;
