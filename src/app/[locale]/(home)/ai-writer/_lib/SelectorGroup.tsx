import { AIWriterSelectorType } from "@/config/configAIWriterSelector";
import { Dispatch, SetStateAction } from "react";
import { SelectedType } from "../page";
import SelectorCompo from "./SelectorCompo";

interface SelectorGroup {
  setSelectedType: Dispatch<SetStateAction<SelectedType>>;
}
const SelectorGroup = ({ setSelectedType }: SelectorGroup) => {
  const handleOnClick = (type: SelectedType) => {
    setSelectedType(type);
  };
  return (
    <div className="px-[175px] py-[35px] gap-2 h-[150px] flex flex-wrap items-center justify-between">
      {AIWriterSelectorType.map((selector, index) => {
        return (
          <SelectorCompo
            key={index}
            title={selector.toUpperCase()}
            onClick={(): void => {
              handleOnClick(selector);
            }}
          />
        );
      })}
    </div>
  );
};

export default SelectorGroup;
