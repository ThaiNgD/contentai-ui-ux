/* eslint-disable @typescript-eslint/no-explicit-any*/
import { TColumnsTable } from "./types";

export const test_columns: TColumnsTable<any> = [
  {
    key: "project_name",
    name: "Tên dự án",
    sortable: true,
  },
  {
    key: "example_name",
    name: "Tên mẫu",
    sortable: true,
  },
  {
    key: "folder_name",
    name: "Tên thư mục",
    sortable: true,
  },

  {
    key: "created_day",
    name: "Ngày tạo",
    sortable: true,
  },
  {
    key: "language",
    name: "Ngôn ngữ",
    width: 200,
    sortable: true,
  },
  {
    key: "total_word",
    name: "Số từ",
    sortable: true,
  },
  {
    key: "action",
    name: "Hành động",
    width: 200,
  },
];
