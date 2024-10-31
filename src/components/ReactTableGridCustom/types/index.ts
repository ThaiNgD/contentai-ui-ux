import { Dispatch, SetStateAction } from "react";
import { TColumnsTable } from "./table-type";
export * from "./table-type";

export interface IPaginationParams {
  pageSize?: number;
  page?: number;
}

export type Maybe<T> = T | undefined | null;

// helpers
export interface ICalculatorTotalPage extends IPaginationParams {
  total?: number;
}

export interface ISTTParams extends IPaginationParams {
  data?: string;
}

export interface IToggleValues {
  value: string;
  array: string[];
}

// hooks
export interface useShowHideColumnParameter<T, SR> {
  nameLocal?: string;
  /** nếu đầu vào là columns: Functions() thì nên dùng useMemo thì sẽ tối ưu hơn */
  columns: TColumnsTable<T, SR>;
  ignoreColumns?: string[];
}

export interface useShowHideColumnReturn<T, SR> {
  hiddenColumns: string[];
  setHiddenColumns: Dispatch<SetStateAction<string[]>>;
  columnsTable: TColumnsTable<T, SR>;
  changeHiddenColumn: (key: string | string[]) => void;
  newShowhideColumns: TColumnsTable<T, SR>;
}
