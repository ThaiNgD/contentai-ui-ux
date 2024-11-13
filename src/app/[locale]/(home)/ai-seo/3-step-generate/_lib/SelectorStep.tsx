"use-client";

import { AISEOStep } from "@/config/configAISEO";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import StepComponent from "./StepComponent";

interface SelectorStep {
  steps: AISEOStep[];
  setStepsIndex: (index: number) => void;
}
const SelectorStep = ({ steps, setStepsIndex }: SelectorStep) => {
  return (
    <div className="px-[50px] mt-[40px]">
      <div className="rounded-full p-2 px-[30px] flex items-center gap-[40px] shadow-lg w-fit mx-auto dark:bg-black bg-white">
        {steps.map((step, index) => {
          return (
            <>
              <StepComponent
                setStepsIndex={setStepsIndex}
                key={index}
                step={step.step}
                title={step.title}
                isActive={step.isActive}
              />
              {steps.length > step.step && (
                <MdKeyboardDoubleArrowRight
                  key={`icon-${index}`}
                  className="opacity-60"
                  size={20}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SelectorStep;
