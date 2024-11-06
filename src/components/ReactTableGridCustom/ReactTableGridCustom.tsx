"use client";
import { cn } from "@/helper/function";
import { Checkbox, Pagination } from "@mantine/core";
import _, { get } from "lodash";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Key, memo, useCallback, useEffect, useMemo, useState } from "react";
import DataGrid, { SelectColumn, SortColumn } from "react-data-grid";
import "react-data-grid/lib/styles.css";
import ComboboxCustom from "./components/ComboboxCustom";
import { LoadingIcon } from "./components/Icons";
import RenderSortStatus from "./components/RenderSortStatus";
import { calculatorTotalPage, STT } from "./helpers";
import { useTranslationTable } from "./hooks";
import "./ReactTableGridCustom.css";
import { IPaginationText, IReactTableGridCustom } from "./types";

const ReactTableGridCustom = <T, SR = unknown, K extends Key = Key>({
  classNamePaginationTable,
  classNameWapperTable,
  hiddenPagination,
  hiddenSTT,
  data = [],
  page,
  pageSize,
  total,
  onChange,
  setConfigPagination,
  columns,
  rowKeyGetter = "uuid",
  selectedRows,
  hiddenPaginationText,
  paginationText,
  listPageSize = ["50", "100", "200", "500"],
  fetching,
  ...spread
}: IReactTableGridCustom<T, SR, K>): JSX.Element => {
  const t = useTranslations("table");
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const isSelectRow = selectedRows !== undefined;

  const maxPage = useMemo(
    () =>
      !hiddenPagination
        ? calculatorTotalPage({
            total,
            pageSize,
          })
        : 0,
    [pageSize, total, hiddenPagination]
  );

  const toInPagination = useMemo(() => {
    const initPage: IPaginationText = {
      from: 0,
      to: 0,
    };
    if (!hiddenPaginationText && pageSize && page) {
      const from = STT(
        {
          page: page,
          pageSize: pageSize,
        },
        0
      );
      return {
        from,
        to: maxPage === page ? total : page * pageSize,
      };
    }
    return initPage;
  }, [pageSize, page, hiddenPaginationText, maxPage, total]);

  const columnTranslation = useTranslationTable<T, SR>(columns);

  const newColumns = useMemo(() => {
    const columnsCustom = [...columnTranslation];

    if (isSelectRow) {
      columnsCustom.unshift(SelectColumn);
    }

    if (!hiddenSTT || (!hiddenSTT && page && pageSize)) {
      columnsCustom.unshift({
        key: "index",
        name: "STT",
        width: 80,
        renderCell: ({ rowIdx }) => STT({ page, pageSize }, rowIdx),
      });
    }

    return columnsCustom;
  }, [hiddenSTT, isSelectRow, page, pageSize, columnTranslation]);

  const customRowKeyGetter = useMemo(() => {
    return (row: NoInfer<T>): K => {
      if (typeof rowKeyGetter === "function") {
        return rowKeyGetter(row);
      }
      return get(row, rowKeyGetter as string) as K;
    };
  }, [rowKeyGetter]);

  const handlePageChange = useCallback(
    (page: number) => {
      if (onChange) {
        onChange(page);
        return;
      }

      if (setConfigPagination) {
        setConfigPagination((prev) => ({ ...prev, page }));
      }
    },
    [setConfigPagination, onChange]
  );

  const sortedRows = useMemo((): readonly T[] => {
    if (sortColumns.length === 0) return data;
    const direction = sortColumns[0]?.direction?.toLocaleLowerCase() as
      | "desc"
      | "asc";
    const columnKey = sortColumns[0]?.columnKey;
    return _.orderBy(data, columnKey, direction);
  }, [data, sortColumns]);

  useEffect(() => {
    if (page && page > maxPage && maxPage > 0) {
      handlePageChange(1);
    }
  }, [page, maxPage, handlePageChange]);

  return (
    <div
      className={cn(
        "wapper_table relative h-full overflow-hidden rounded-md",
        classNameWapperTable
      )}
    >
      <div className="wapper_table_empty relative h-[calc(100%-53px)] min-h-80">
        <DataGrid
          selectedRows={selectedRows}
          rows={sortedRows}
          rowKeyGetter={
            rowKeyGetter && isSelectRow ? customRowKeyGetter : undefined
          }
          columns={newColumns}
          renderers={{
            renderSortStatus: RenderSortStatus,
            renderCheckbox({ onChange, checked, ...spread }) {
              const handleChange = (
                e: React.ChangeEvent<HTMLInputElement>
              ): void => {
                onChange(
                  e.target.checked,
                  (e.nativeEvent as MouseEvent).shiftKey
                );
              };
              return (
                <Checkbox
                  color="indigo"
                  checked={!!checked}
                  onChange={handleChange}
                  {...spread}
                />
              );
            },
          }}
          className="fill-grid rdg-light h-full w-full"
          defaultColumnOptions={{
            renderCell: ({ column, row }) => {
              const value = get(row, column.key);
              return [null, undefined, ""].includes(value) ? "-" : value;
            },
          }}
          sortColumns={sortColumns}
          onSortColumnsChange={setSortColumns}
          {...spread}
        />
        {total === 0 && (
          <div className="no_result absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            <div className="flex flex-col justify-center">
              <Image src={""} alt="" className="h-18" />
              {/* <div className="mt-2 text-center text-sm text-gray-500">{t('no_data')}</div> */}
            </div>
          </div>
        )}
      </div>

      {!hiddenPagination && (
        <div
          className={cn(
            "wapper_pagination mt-auto flex flex-wrap items-center justify-between p-[10px] pl-2",
            classNamePaginationTable
          )}
        >
          {!hiddenPaginationText && page && pageSize && (
            <div className="text-sm">
              {paginationText
                ? paginationText({ ...toInPagination, total })
                : total
                ? `${t("display")} ${toInPagination?.from} ${t("to")} ${
                    toInPagination?.to
                  } ${t("in")} ${total} ${t("data")}`
                : "..."}
            </div>
          )}
          <ComboboxCustom
            options={listPageSize}
            value={pageSize?.toString()}
            onChange={(value) => {
              if (setConfigPagination) {
                setConfigPagination((prev) => ({
                  ...prev,
                  pageSize: Number(value),
                  page: 1,
                }));
              }
            }}
          />
          {!!maxPage && (
            <Pagination
              color="indigo"
              total={maxPage}
              size={"sm"}
              value={page}
              onChange={handlePageChange}
            />
          )}
        </div>
      )}

      {fetching && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50/45">
          <div className="rounded-full border-[2px] border-gray-200 shadow-sm">
            <LoadingIcon isSpin className="text-blue-500" />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ReactTableGridCustom) as typeof ReactTableGridCustom;
