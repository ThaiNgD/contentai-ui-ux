import { cn } from "@/helper/utils";
import { FC, HTMLAttributes, ReactNode } from "react";

export interface WrapperLabelFormProps {
  classWapper?: HTMLAttributes<HTMLDivElement>["className"];
  label?: string;
  clsLabelWrapper?: string;
  isRequired?: boolean;
  children?: ReactNode;
  clsChildren?: string;
  isVertical?: boolean;
}

const WrapperLabelForm: FC<WrapperLabelFormProps> = ({
  classWapper,
  isRequired,
  label,
  children,
  clsChildren,
  clsLabelWrapper,
  isVertical,
}) => {
  return (
    <div className={cn(!isVertical && "flex max-md:flex-col", classWapper)}>
      {label && (
        <span
          className={cn(
            "flex-start flex items-center text-sm font-medium",
            !isVertical && `w-[12rem] flex-shrink-0`,
            clsLabelWrapper
          )}
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </span>
      )}

      <div className={cn("w-full h-full", clsChildren)}>{children}</div>
    </div>
  );
};

export default WrapperLabelForm;
