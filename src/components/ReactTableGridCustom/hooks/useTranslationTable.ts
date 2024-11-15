import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { TColumnsTable } from "../types";

// hàm này chỉ hỗ trợ dịch cấp một
const useTranslationTable = <T, SR>(
  column: TColumnsTable<T, SR>
): TColumnsTable<T, SR> => {
  const t = useTranslations("table");

  const columnTranslation = useMemo(() => {
    return column.map((item) => ({ ...item, name: t(`${item?.name}`) }));
  }, [column, t]);

  return columnTranslation;
};

export default useTranslationTable;
