import { Pagination } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

export function CustomPaginate<T>({
  activePage,
  setPage,
  data,
}: {
  activePage: number;
  setPage: Dispatch<SetStateAction<number>>;
  data: T[];
}) {
  return (
    <>
      <Pagination
        total={data.length}
        value={activePage}
        onChange={setPage}
        siblings={1}
        mt="sm"
        size={"md"}
        radius={"xl"}
      />
    </>
  );
}
