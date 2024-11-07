import SelectorComponent from "@/components/AIWriterSelector/SelectorComponent";
import { configAIWriterSelector } from "@/config/configAIWriterSelector";
import { useMemo } from "react";

export interface AISelectorProps {
  type: "all" | "business" | "seo-optimization";
}
const AISelector = ({ type }: AISelectorProps) => {
  const TypedSelector = useMemo(() => {
    if (type === "all") {
      return configAIWriterSelector;
    } else {
      return configAIWriterSelector.filter(
        (selector) => selector.category === type
      );
    }
  }, [type, configAIWriterSelector]);
  return (
    <div className="flex mb-[60px] flex-shrink-0 flex-grow flex-wrap gap-5 px-[175px]">
      {TypedSelector.map((selector, index) => {
        return <SelectorComponent key={index} selector={selector} />;
      })}
    </div>
  );
};

export default AISelector;
