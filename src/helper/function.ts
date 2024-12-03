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

export const numberMoneyVND = (num: string | number): string => {
  let t = "0";
  if (num) {
    if (typeof num === "string") {
      num = Number(num);
    }
    t = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return t;
};

export const convertNumber = (value: number | string) => {
  let num = 0;
  if (value) {
    value = value.toString().replace(/[.]/g, "");
    value = value.trim();
    num = Number(value);
  }

  const regex = /^-?\d*$/;
  const check = regex.test(num.toString());
  return {
    value: num,
    check,
  };
};

export const checkNegative = (value: string): boolean => {
  const regex = /^-[0-9]\d*(\\.\\d+)?$/;
  return regex.test(value.trim());
};

export function convertViToEn(str: string, toUpperCase = false) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư

  return toUpperCase ? str.toUpperCase() : str;
}

export const arrayLocal = (array?: string) => {
  try {
    const data = array ? JSON.parse(array) : [];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

export const getLocalStore = (key: string): string | null => {
  // Kiểm tra xem mã đang chạy ở phía client hay server
  if (typeof window !== "undefined") {
    // Mã đang chạy ở phía client
    return localStorage.getItem(key);
  } else {
    // Mã đang chạy ở phía server
    return null; // Hoặc bất kỳ giá trị mặc định nào bạn muốn trả về
  }
};

export const setLocalStore = (key: string, value: string): void => {
  // Kiểm tra xem mã đang chạy ở phía client hay server
  if (typeof window !== "undefined") {
    // Mã đang chạy ở phía client, nên có thể sử dụng localStorage
    localStorage.setItem(key, value);
  }
};

export const selectRandom = <T>(array: T[]): T => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

export function readURL(input: HTMLInputElement): void {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result as string;
      const img = document.getElementById("blah") as HTMLImageElement;
      if (img) {
        img.src = result;
        img.width = 150;
        img.height = 200;
      }
    };

    reader.readAsDataURL(input.files[0]);
  }
}

export function convertToVietnameseDate(isoDate: string): string {
  // Parse the ISO date
  const date = new Date(isoDate);

  // Extract components
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are 0-indexed in JavaScript
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Format to Vietnamese date string
  return `${(hours + 7).toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}, ${day}/${month}/${year}`;
}

// Sorted  Chat

export function sortConversationByTime(
  conversation: IConversationResult[]
): IConversationResult[] {
  return conversation.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function sortMessageByTime(conversation: IMessage[]): IMessage[] {
  return conversation.sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
}

// Converted Date
export function formatDateToVietnamese(date: number): {
  formattedDate: string;
  formattedTime: string;
} {
  // Ensure the input is a Date object
  const d = new Date(date);

  // Extract date components
  const day = d.getDate().toString().padStart(2, "0"); // Day with leading zero
  const month = (d.getMonth() + 1).toString().padStart(2, "0"); // Month with leading zero (0-based index)
  const year = d.getFullYear().toString(); // Full year
  const hour = d.getHours().toString().padStart(2, "0"); // Hour with leading zero
  const minute = d.getMinutes().toString().padStart(2, "0");
  // Combine components in Vietnamese format dd/MM/yyyy
  return {
    formattedDate: `${day}/${month}/${year}`,
    formattedTime: `${hour}:${minute}`,
  };
}
