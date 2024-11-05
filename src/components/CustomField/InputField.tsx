"use client";
import { cn } from "@/helper/utils";
import { FormikProps } from "formik";
import { get } from "lodash";
import { InputHTMLAttributes } from "react";
import { IoClose } from "react-icons/io5";
import ErrorHelperText from "./ErrorHelperText";
import WrapperLabelForm, { WrapperLabelFormProps } from "./WrapperLabelForm";

export interface IFieldFormCustom<T> {
  name: string;
  formik?: FormikProps<T>;
  msgError?: string;
}

export interface InputFieldProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name">,
    Omit<WrapperLabelFormProps, "children">,
    IFieldFormCustom<T> {
  hiddenError?: boolean;
  title?: string;
  clsTitle?: string;
  clsLabelWrapper?: string;
  hiddenBgDisabled?: boolean;
  isClear?: boolean;
  onClear?: () => void;
}

const InputField = <T,>({
  formik,
  name,
  label,
  isRequired,
  classWapper,
  isVertical,
  msgError,
  title,
  clsTitle,
  hiddenError,
  clsLabelWrapper,
  isClear,
  onClear,
  ...spread
}: InputFieldProps<T>): JSX.Element => {
  const newValue = formik ? get(formik.values, name) : spread.value;
  const isShowClear = newValue && isClear;

  return (
    <WrapperLabelForm
      isRequired={isRequired}
      label={label}
      classWapper={cn(classWapper, isShowClear && "[&>div]:relative")}
      isVertical={isVertical}
      clsLabelWrapper={clsLabelWrapper}
    >
      {title && (
        <div className={cn("flex items-center gap-1", clsTitle)}>
          <span className="text-sm font-bold italic">{title}</span>
        </div>
      )}
      <input
        autoComplete="off"
        {...spread}
        name={name}
        id={name}
        onChange={formik ? formik.handleChange : spread?.onChange}
        onBlur={formik ? formik.handleBlur : spread?.onBlur}
        value={newValue}
        className={cn(
          "form-input w-full pr-3 !outline-none focus:border-slate-300",
          spread?.className,
          spread?.disabled || spread?.readOnly
            ? "!cursor-default"
            : "!cursor-text",
          spread?.disabled && "bg-gray-100",
          !!isShowClear && "pr-6"
        )}
      />

      {!!isShowClear && (
        <IoClose
          className="absolute right-1 top-0 translate-y-1/2 cursor-pointer select-none text-[#cccccc]"
          onClick={onClear}
          size={20}
        />
      )}

      <ErrorHelperText
        isShow={
          (formik &&
            !hiddenError &&
            get(formik?.touched, name) &&
            get(formik?.errors, name)) ||
          msgError
        }
        msgError={msgError ? msgError : get(formik?.errors, name)}
      />
    </WrapperLabelForm>
  );
};

export default InputField;
