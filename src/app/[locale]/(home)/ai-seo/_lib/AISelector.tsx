import SelectorComponent from "@/components/SelectorComponent";
import { configAISEOSelector } from "@/config/configAISEO";

const AISelector = () => {
  return (
    <div className="flex mb-[60px] overflow-hidden w-[calc(100%-350px)] mx-auto justify-center flex-wrap gap-5">
      {configAISEOSelector.map((selector, index) => {
        return (
          <SelectorComponent key={index} selector={selector} folder="ai-seo" />
        );
      })}
    </div>
  );
};

export default AISelector;
