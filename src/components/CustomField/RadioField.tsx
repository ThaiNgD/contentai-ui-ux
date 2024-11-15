"use client";
import { cn } from "@/helper/function";
import { Radio, RadioProps } from "@mantine/core";
import { get } from "lodash";
import { useId } from "react";
import ErrorHelperText from "./ErrorHelperText";
import { IFieldFormCustom } from "./InputField";

export type RadioFieldProps<T> = RadioProps &
  IFieldFormCustom<T> & {
    label?: string;
    clsLabel?: string;
    classWapper?: string;
    classCheckBox?: string;
    onChangeValue?: () => void;
  };

const RadioField = <T,>({
  formik,
  name,
  msgError,
  label,
  color = "blue",
  classWapper,
  classCheckBox,
  clsLabel,
  onChangeValue,
  ...spread
}: RadioFieldProps<T>): JSX.Element => {
  const idCheck = useId();
  const value = get(formik?.values, name);

  return (
    <div className={cn(classWapper)}>
      <div className={cn("flex items-center", classCheckBox, color)}>
        <Radio
          id={idCheck}
          name={name}
          color={color}
          onChange={(): void => {
            formik?.setFieldValue(name, spread?.value);
            if (onChangeValue) {
              onChangeValue();
            }
          }}
          onBlur={formik?.handleBlur}
          checked={
            typeof value === "undefined" || typeof spread?.value === "undefined"
              ? false
              : value === spread?.value
          }
          {...spread}
        />
        {label && (
          <label
            htmlFor={idCheck}
            className={cn(
              "text-sm font-medium text-gray-900 pl-2",
              spread?.disabled ? "cursor-default" : "cursor-pointer",
              clsLabel
            )}
          >
            {label}
          </label>
        )}
      </div>
      <ErrorHelperText
        isShow={
          (formik && get(formik?.touched, name) && get(formik?.errors, name)) ||
          msgError
        }
        msgError={msgError ? msgError : get(formik?.errors, name)}
      />
    </div>
  );
};

export default RadioField;
