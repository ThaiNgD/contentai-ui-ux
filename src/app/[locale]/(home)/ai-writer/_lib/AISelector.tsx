import SelectorComponent from "@/components/AIWriterSelector/SelectorComponent";
import { configAIWriterSelector } from "@/config/configAIWriterSelector";

export interface AISelectorProps {
  type: "all" | "business" | "seo-optimization";
}
const AISelector = ({ type }: AISelectorProps) => {
  console.log(type);
  return (
    <div className="flex flex-wrap px-[175px] justify-center">
      {configAIWriterSelector.map((selector, index) => {
        return <SelectorComponent key={index} selector={selector} />;
      })}
    </div>
  );
};

export default AISelector;
