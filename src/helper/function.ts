import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const joinUrl = (dir?: string, BASE_URL: string = "/", link = "/") => {
  const maxlength = BASE_URL.length;
  const str = BASE_URL.substring(maxlength - 1, maxlength);
  if (str !== link) {
    BASE_URL += link;
  }

  if (dir) {
    dir = dir.replace(/^[\/]{1,}/, "");
    return `${BASE_URL}${dir}`;
  } else {
    let url = BASE_URL;
    if (url && url?.length > 1) {
      url = url.replace(/[\/]{1,}$/, "");
    }
    return url;
  }
};

export const joinPathParent = (...arg: string[]) => {
  let str = "";
  if (arg && arg?.length > 0) {
    arg.forEach((item) => {
      str = joinUrl(item, str);
    });
  }
  return str;
};
