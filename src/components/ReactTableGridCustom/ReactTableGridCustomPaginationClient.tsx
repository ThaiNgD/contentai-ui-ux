"use client";
import {
  Key,
  memo,
  MutableRefObject,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import ReactTableGridCustom from "./ReactTableGridCustom";
import { useDataPagingClient } from "./hooks";
import {
  IReactTableGridCustom,
  ISetConfigPagination,
  refTablePaginationClient,
} from "./types";

interface ReactTableGridCustomPaginationClientProps<
  T = unknown,
  SR = unknown,
  K extends Key = Key
> extends IReactTableGridCustom<T, SR, K> {
  initPage?: number;
  initPageSize?: number;
  refTable?: MutableRefObject<refTablePaginationClient | undefined>;
}

const ReactTableGridCustomPaginationClient = <
  T,
  SR = unknown,
  K extends Key = Key
>({
  data,
  initPage = 1,
  initPageSize = 200,
  refTable,
  ...spread
}: ReactTableGridCustomPaginationClientProps<T, SR, K>): JSX.Element => {
  const [configSearch, setConfigSearch] = useState<ISetConfigPagination>({
    page: initPage,
    pageSize: initPageSize,
  });

  const newDataAccount = useDataPagingClient<T>({
    data,
    page: configSearch?.page,
    pageSize: configSearch?.pageSize,
  });

  const resetPage = useCallback(() => {
    setConfigSearch((prev) => ({ ...prev, page: 1 }));
  }, []);

  useImperativeHandle(
    refTable,
    (): refTablePaginationClient => {
      return {
        setConfigSearch,
        page: configSearch?.page ?? initPage,
        pageSize: configSearch.pageSize ?? initPageSize,
        resetPagition: (conditional = true): void => {
          if (conditional && configSearch?.page !== 1) {
            resetPage();
            return;
          } else {
            resetPage();
          }
        },
      };
    },
    [
      setConfigSearch,
      configSearch?.page,
      configSearch.pageSize,
      initPage,
      initPageSize,
      resetPage,
    ]
  );

  return (
    <ReactTableGridCustom
      data={newDataAccount}
      total={data?.length}
      page={configSearch?.page}
      pageSize={configSearch?.pageSize}
      setConfigPagination={setConfigSearch}
      {...spread}
    />
  );
};

export default memo(
  ReactTableGridCustomPaginationClient
) as typeof ReactTableGridCustomPaginationClient;
