import SelectorComponent from "@/components/SelectorComponent";
import { configAIBlogSelector } from "@/config/configAIBlog";

const AISelector = () => {
  return (
    <div className="flex mb-[60px] overflow-hidden w-full md:w-[calc(100%-350px)] mx-auto justify-center flex-wrap gap-5">
      {configAIBlogSelector.map((selector, index) => {
        return (
          <SelectorComponent key={index} selector={selector} folder="ai-blog" />
        );
      })}
    </div>
  );
};

export default AISelector;
