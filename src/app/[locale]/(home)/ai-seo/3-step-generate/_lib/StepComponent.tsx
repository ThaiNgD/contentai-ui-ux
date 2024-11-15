import { cn } from "@/helper/function";

interface StepComponentProps {
  title: string;
  isActive: boolean;
  step: number;
  setStepsIndex: (index: number) => void;
}
const StepComponent = ({
  title,
  isActive,
  step,
  setStepsIndex,
}: StepComponentProps) => {
  const handleStepClick = () => {
    setStepsIndex(step - 1);
  };
  return (
    <div className="flex gap-4 items-center">
      <div
        role="button"
        className={cn(
          "rounded-full size-[40px] hover:shadow-md hover:-translate-y-0.5 duration-200 border flex items-center justify-center text-lg",
          isActive && "bg-blue-500 text-white"
        )}
        onClick={handleStepClick}
      >
        {step}
      </div>
      <div className="flex flex-col">
        <label className="mb-0 font-extrabold texl-lg">{title}</label>
        <span className="text-xs opacity-60">Step {step}</span>
      </div>
    </div>
  );
};

export default StepComponent;
