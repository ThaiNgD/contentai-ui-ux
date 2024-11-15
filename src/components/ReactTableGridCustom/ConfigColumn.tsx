/* eslint-disable @typescript-eslint/no-explicit-any*/
import { TColumnsTable } from "./types";

export const test_columns: TColumnsTable<any> = [
  {
    key: "project_name",
    name: "project_name",
    sortable: true,
  },
  {
    key: "example_name",
    name: "example_name",
    sortable: true,
  },
  {
    key: "folder_name",
    name: "folder_name",
    sortable: true,
  },

  {
    key: "created_day",
    name: "created_day",
    sortable: true,
  },
  {
    key: "language",
    name: "language",
    width: 200,
    sortable: true,
  },
  {
    key: "total_word",
    name: "total_word",
    sortable: true,
  },
  {
    key: "action",
    name: "action",
    width: 200,
  },
];
