import { FC } from "react";

interface ErrorHelperTextProps {
  isShow?: boolean;
  msgError?: string;
}

const ErrorHelperText: FC<ErrorHelperTextProps> = ({ isShow, msgError }) => {
  return (
    <>
      {isShow && (
        <span className="mt-2 block w-max text-sm text-red-600">
          {msgError}
        </span>
      )}
    </>
  );
};

export default ErrorHelperText;
