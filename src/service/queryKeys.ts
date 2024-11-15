/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { queryClient } from "@/provider/TanStackProvider";

export const actionKeys = <T extends string>(
  key: string,
  arrkeys: T[] = []
) => {
  const obj = arrkeys.reduce((total, item) => {
    return { ...total, [item]: `${key}:${item}` };
  }, {} as Record<T, string>);

  return {
    ...obj,
  };
};

export const queryKeys = {
  ai_writer: actionKeys("ai_writer", ["ai_content_blog_long_form"] as const),
};

export const queriesToInvalidate = (queryKeys: string[]): void => {
  queryKeys.forEach((key) => {
    queryClient.invalidateQueries({ queryKey: [key] });
  });
};
