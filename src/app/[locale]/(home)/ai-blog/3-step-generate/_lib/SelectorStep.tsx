"use-client";

import { AIBlogStep } from "@/config/configAIBlog";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import StepComponent from "./StepComponent";

interface SelectorStep {
  steps: AIBlogStep[];
  setStepsIndex: (index: number) => void;
}
const SelectorStep = ({ steps, setStepsIndex }: SelectorStep) => {
  return (
    <div className="px-[50px] mt-[40px]">
      <div className="rounded-full p-2 px-[30px] flex items-center gap-[40px] shadow-lg w-fit mx-auto dark:bg-black bg-white">
        {steps.map((step, index) => {
          return (
            <div key={index} className="flex items-center gap-[40px]">
              <StepComponent
                setStepsIndex={setStepsIndex}
                step={step.step}
                title={step.title}
                isActive={step.isActive}
              />
              {steps.length > step.step && (
                <MdKeyboardDoubleArrowRight className="opacity-60" size={20} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectorStep;
