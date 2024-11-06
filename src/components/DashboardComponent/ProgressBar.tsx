import { cn } from "@/helper/function";
import { Progress, ProgressProps } from "@mantine/core";

const ProgressBar = ({
  title,
  clsContainer,
  ...progress
}: ProgressProps & { title?: string; clsContainer?: string }) => {
  const { className, size, value } = progress;
  return (
    <div className={cn("w-full flex flex-col", clsContainer)}>
      {title && (
        <h3 className="text-sm dark:text-white text-black opacity-60 italic">
          {title}
        </h3>
      )}
      <Progress.Root size={size} className={cn(className)}>
        <Progress.Section value={value}>
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </div>
  );
};

export default ProgressBar;
