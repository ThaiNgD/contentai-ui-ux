/* eslint-disable @typescript-eslint/no-explicit-any*/
"use client";
import { memo } from "react";
import { ReactTableGridCustom } from "../ReactTableGridCustom";
import { test_columns } from "../ReactTableGridCustom/ConfigColumn";

const TableListAPI = ({
  data,
  columns,
  selectedRecords,
  setSelectedRecords,
  page,
  pageSize,
  total,
  setConfigSearch,
  fetching,
}: ITableDefaultValue<any>): JSX.Element => {
  return (
    <ReactTableGridCustom
      columns={columns ?? test_columns}
      data={data}
      selectedRows={selectedRecords}
      onSelectedRowsChange={setSelectedRecords}
      page={page}
      pageSize={pageSize}
      total={total}
      setConfigPagination={setConfigSearch}
      fetching={fetching}
    />
  );
};

export default memo(TableListAPI);
