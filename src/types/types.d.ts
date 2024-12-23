export {};

declare global {
  interface ITableDefaultValue<T, SL = string> {
    selectedRecords?: ReadonlySet<SL>;
    setSelectedRecords?: IDispatchState<ReadonlySet<SL>>;
    data?: T[];
    total?: number;
    page?: number;
    pageSize?: number;
    clsTable?: string;
    columns?: TColumnsTable<T>;
    setConfigSearch?: IDispatchState<ISetConfigPagination>;
    fetching?: boolean;
  }
  interface IToggleValues {
    value: string;
    array: string[];
  }

  interface IResult {
    message: string;
    statusCode: string;
    active: boolean;
    result: string;
    tokenInput: string;
    tokenOutput: string;
  }

  type Emoji = {
    character: string;
    title: string;
  };
}
