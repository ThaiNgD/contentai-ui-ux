import { usePathname } from "next/navigation";

interface Result {
  locale?: string;
  pathWithoutLocale?: string;
  pathArray?: string[];
}
export const useGetPathComponent = (): Result => {
  const path = usePathname();
  const pathArray = path?.split("/");
  const locale = pathArray?.[1];
  const pathWithoutLocale = pathArray?.slice(2).join("/");
  return { locale, pathWithoutLocale, pathArray };
};
