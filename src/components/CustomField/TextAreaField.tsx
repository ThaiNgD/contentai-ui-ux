/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/helper/function";
import { FormikProps } from "formik";
import { get } from "lodash";
import { TextareaHTMLAttributes } from "react";
import ErrorHelperText from "./ErrorHelperText";
import WrapperLabelForm, { WrapperLabelFormProps } from "./WrapperLabelForm";

interface TextAreaFieldProps<T>
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<WrapperLabelFormProps, "children"> {
  name: string;
  clsTextArea?: string;
  clsLabelWrapper?: string;
  formik?: FormikProps<T>;
  msgError?: string;
  clsTitle?: string;
  title?: string;
  clsChildren?: string;
}

const TextAreaField = <T,>({
  formik,
  name,
  label,
  isRequired,
  classWapper,
  isVertical,
  msgError,
  title,
  clsTitle,
  placeholder,
  clsTextArea,
  clsLabelWrapper,
  clsChildren,
  ...spread
}: TextAreaFieldProps<T>): JSX.Element => {
  return (
    <WrapperLabelForm
      isRequired={isRequired}
      label={label}
      clsChildren={clsChildren}
      classWapper={classWapper}
      isVertical={isVertical}
      clsLabelWrapper={clsLabelWrapper}
    >
      {title && (
        <div className={cn("flex items-center gap-1", clsTitle)}>
          <span className="text-sm font-bold italic">{title}</span>
        </div>
      )}
      <textarea
        autoComplete="off"
        {...spread}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={formik ? formik.handleChange : spread?.onChange}
        onBlur={formik ? formik.handleBlur : spread?.onBlur}
        value={formik ? get(formik?.values, name) : spread.value}
        className={cn(
          clsTextArea,
          `form-textarea w-full pr-9 !outline-none focus:border-slate-300`,
          spread?.className,
          spread?.disabled && "!cursor-default bg-gray-100"
        )}
      />
      <ErrorHelperText
        isShow={
          (formik && get(formik?.touched, name) && get(formik?.errors, name)) ||
          msgError
        }
        msgError={msgError ? msgError : get(formik?.errors, name)}
      />
    </WrapperLabelForm>
  );
};

export default TextAreaField;
