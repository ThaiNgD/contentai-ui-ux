import SelectorComponent from "@/components/AIWriterSelector/SelectorComponent";
import { configAIWriterSelector } from "@/config/configAIWriterSelector";

const AISelector = () => {
  return (
    <div className="flex flex-wrap border-collapse px-[175px]">
      {configAIWriterSelector.map((selector, index) => {
        return <SelectorComponent key={index} selector={selector} />;
      })}
    </div>
  );
};

export default AISelector;
