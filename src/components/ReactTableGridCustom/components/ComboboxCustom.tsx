"use client";
/* eslint-disable  @typescript-eslint/no-unused-expressions */
import { Combobox, Input, InputBase, useCombobox } from "@mantine/core";
import { FC, useMemo } from "react";

interface ComboboxCustomProps {
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
}

const ComboboxCustom: FC<ComboboxCustomProps> = ({
  options,
  onChange,
  value,
}) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const newOptions = useMemo(() => {
    return (options ?? []).map((item) => (
      <Combobox.Option
        className="page_size-table"
        value={item}
        key={item}
        disabled={item === value}
      >
        {item}
      </Combobox.Option>
    ));
  }, [options, value]);

  return (
    <Combobox
      size="sm"
      store={combobox}
      onOptionSubmit={(val) => {
        onChange && onChange(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
          className="w-[70px]"
          classNames={{ input: "custom_input_table" }}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown className="w-[70px]">
        <Combobox.Options>{newOptions}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default ComboboxCustom;
