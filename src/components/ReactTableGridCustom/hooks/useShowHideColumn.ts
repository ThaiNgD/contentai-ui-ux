import { useCallback, useMemo, useState } from "react";
import { Column } from "react-data-grid";
import {
  arrayLocal,
  getLocalStore,
  setLocalStore,
  toggleValues,
} from "../helpers";
import { useShowHideColumnParameter, useShowHideColumnReturn } from "../types";

const useShowHideColumn = <T, SR>({
  nameLocal = "table",
  columns,
  ignoreColumns,
}: useShowHideColumnParameter<T, SR>): useShowHideColumnReturn<T, SR> => {
  const [hiddenColumns, setHiddenColumns] = useState<string[]>(() => {
    const dataLocal = getLocalStore(nameLocal);
    if (dataLocal) {
      return arrayLocal(dataLocal);
    }
    return [];
  });

  const newColumns = useMemo(() => {
    return columns?.filter((item) => {
      const key = (item as Column<T, SR>)?.key;
      if (ignoreColumns && ignoreColumns?.includes(key)) return item;
      // check key hide local
      if (key) {
        return !hiddenColumns?.includes(key);
      }
      return item;
    });
  }, [columns, ignoreColumns, hiddenColumns]);

  const newShowhideColumns = useMemo(() => {
    if (!ignoreColumns) return columns;
    const newConversion = columns?.filter((column) => {
      const key = (column as Column<T, SR>)?.key;
      return !ignoreColumns?.includes(key);
    });
    return newConversion;
  }, [columns, ignoreColumns]);

  const changeHiddenColumn = useCallback(
    (key: string | string[]) => {
      let newData = [...hiddenColumns];
      if (typeof key === "string") {
        newData = toggleValues({
          array: newData,
          value: key,
        });
      } else {
        newData = key;
      }
      setLocalStore(nameLocal, JSON.stringify(newData));
      setHiddenColumns(newData);
    },
    [hiddenColumns, nameLocal]
  );

  return {
    hiddenColumns,
    setHiddenColumns,
    columnsTable: newColumns,
    changeHiddenColumn,
    newShowhideColumns,
  };
};

export default useShowHideColumn;
