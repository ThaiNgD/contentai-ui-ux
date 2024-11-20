"use client";
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn, convertViToEn } from "@/helper/function";
import { FormikProps } from "formik";
import { get } from "lodash";
import { useTranslations } from "next-intl";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Select, {
  components,
  ControlProps,
  CSSObjectWithLabel,
  Props,
  StylesConfig,
} from "react-select";
import CheckBoxField from "./CheckboxField";
import ErrorHelperText from "./ErrorHelperText";
import WrapperLabelForm, { WrapperLabelFormProps } from "./WrapperLabelForm";

export interface CustomSelectProps<T>
  extends Props,
    Omit<WrapperLabelFormProps, "children"> {
  className?: string;
  height?: string;
  title?: string;
  clsTitle?: string;
  name: string;
  formik?: FormikProps<T>;
  clsChildren?: string;
  msgError?: string;
  changeSelected?: (
    selected?: Record<string, string> | Array<Record<string, string>>
  ) => void;
  setValueSearch?: Dispatch<SetStateAction<string>>;
}

const Option = (props: any): JSX.Element => (
  <components.Option
    {...props}
    className={cn(props.className, 'aria-[selected="true"]:!bg-transparent')}
  >
    <CheckBoxField
      name={props.value}
      checked={props.isSelected}
      label={props.label}
      classCheckBox="[&>label]:text-sm [&>label]:font-medium"
    />
  </components.Option>
);

export const SelectField = <T,>({
  className,
  placeholder,
  options,
  isMulti = false,
  label,
  classWapper,
  isRequired,
  name,
  title,
  clsTitle,
  formik,
  height = "42px",
  clsChildren,
  isVertical,
  msgError,
  changeSelected,
  value,
  setValueSearch,
  clsLabelWrapper,
  ...spread
}: CustomSelectProps<T>): JSX.Element => {
  const menuPortalRef = useRef<HTMLElement | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      menuPortalRef.current = window.document.body;
    }
  }, []);
  const t = useTranslations("option");
  //disable-eslint-next-line;
  const translatedOption = options?.map((option: any) => {
    return {
      value: option.value,
      label: t(option.label),
    };
  });
  const onChange = (
    option: IOptionSelectFormat | IOptionSelectFormat[]
  ): void => {
    if (formik) {
      if (!option) {
        formik?.setFieldValue(name, isMulti ? [] : "");
      } else {
        formik?.setFieldValue(
          name,
          isMulti
            ? (option as IOptionSelectFormat[]).map((item: any) => item.value)
            : (option as IOptionSelectFormat).value
        );
      }
    }
    if (changeSelected) {
      changeSelected(option);
    }
  };

  const getValue = useCallback((): any => {
    if (translatedOption && formik) {
      const value = get(formik?.values, name);
      if (isMulti) {
        return (value ?? []).reduce(
          (total: IOptionSelectFormat[], current: any) => {
            const currentOption = (
              translatedOption as IOptionSelectFormat[]
            )?.find((opt) => opt?.value === current);
            if (currentOption) {
              total.push(currentOption);
            }
            return total;
          },
          [] as IOptionSelectFormat[]
        );
      } else {
        return translatedOption.filter((option: any) => option.value === value);
      }
    } else {
      return isMulti ? [] : ("" as any);
    }
  }, [options, formik, name, isMulti]);

  const newValue = useMemo(
    () => (formik ? getValue() : value),
    [value, formik]
  );

  const customStyles: StylesConfig = {
    // input: (base: CSSObjectWithLabel) => ({
    //   ...base,
    //   backgroundColor: "#F1F9FC",
    //   "&:focus": {},
    // }),
    control: (base: CSSObjectWithLabel, state: ControlProps) => ({
      ...base,
      backgroundColor: "#FFFFFF",
      // Overwrittes the different states of border
      borderColor: "rgb(226 232 240 / 1)",
      textAlign: "left",

      // Removes weird border around container
      boxShadow: state.isFocused ? undefined : undefined,
      height: height ?? "38px",
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "rgb(226 232 240 / 1)",

        backgroundColor: "rgb(248 250 252 / 1)",
      },
      "&:focus": {
        // Overwrittes the different states of border
        color: "#495057",
        backgroundColor: "#fff",
        borderColor: "#80bdff",
        outline: 0,
        boxShadow: "0 0 0 0.2rem rgb(0 123 255 / 25%)",
      },
    }),
    container: (base: CSSObjectWithLabel) => ({
      ...base,
      width: "100%",
    }),
    indicatorsContainer: (base: CSSObjectWithLabel) => ({
      ...base,
      borderColor: "transparent",
    }),
    indicatorSeparator: (base: CSSObjectWithLabel) => ({
      ...base,
      width: 0,
    }),
    menuPortal: (provided: CSSObjectWithLabel) => ({
      ...provided,
      zIndex: 9999,
    }),
    menu: (provided: CSSObjectWithLabel) => ({ ...provided, zIndex: 9999 }),
    placeholder: (base: CSSObjectWithLabel) => ({
      ...base,
      fontSize: "0.875rem",
    }),
  };

  const customFilter = (option: any, inputValue: any): boolean => {
    const labelValue = convertViToEn(option.label ?? "");
    const valueString = convertViToEn(inputValue ?? "").replace(
      /^\s+|\s+$/gm,
      ""
    );
    const serching = labelValue.includes(valueString);
    if (setValueSearch) {
      setValueSearch(inputValue);
    }
    return serching;
  };

  const CustomComponents = useMemo(() => {
    return isMulti
      ? {
          Option,
        }
      : undefined;
  }, [isMulti]);

  return (
    <WrapperLabelForm
      isRequired={isRequired}
      label={label}
      classWapper={classWapper}
      isVertical={isVertical}
      clsLabelWrapper={clsLabelWrapper}
      clsChildren={clsChildren}
    >
      {title && (
        <div className={cn("flex items-center gap-1", clsTitle)}>
          <span className="text-sm font-bold italic">{title}</span>
        </div>
      )}
      <Select
        blurInputOnSelect={true}
        isSearchable={false}
        className={cn("shadow-sm", className)}
        name={name}
        value={newValue}
        onChange={onChange as any}
        placeholder={placeholder}
        options={translatedOption}
        isMulti={isMulti}
        styles={customStyles}
        filterOption={customFilter}
        menuPortalTarget={menuPortalRef.current}
        onBlur={formik ? formik?.handleBlur : spread?.onBlur}
        components={CustomComponents}
        {...spread}
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
