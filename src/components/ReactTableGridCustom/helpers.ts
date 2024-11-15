import { ICalculatorTotalPage, ISTTParams } from "./types";

export const calculatorTotalPage = ({
  total = 0,
  pageSize = 0,
}: ICalculatorTotalPage): number => {
  if (!pageSize || (pageSize && pageSize <= 0)) return 0;
  return Math.ceil(total / pageSize);
};

export const STT = (data?: ISTTParams, index?: number): number => {
  let stt = 1;
  let current_page = 0;
  let per_page = 0;

  if (data?.page !== undefined && data?.pageSize !== undefined) {
    current_page = data.page;
    per_page = data.pageSize;
  }

  let i = (current_page - 1) * per_page;
  i = isNaN(i) ? 0 : i;
  stt = i + (index ?? 0) + 1;

  return stt;
};

export const convertSetToArray = <T>(setArr?: ReadonlySet<T>): T[] => {
  return setArr ? Array.from(setArr) : [];
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

export const arrayLocal = (array?: string): string[] => {
  try {
    const data = array ? JSON.parse(array) : [];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

export const setLocalStore = (key: string, value: string): void => {
  // Kiểm tra xem mã đang chạy ở phía client hay server
  if (typeof window !== "undefined") {
    // Mã đang chạy ở phía client, nên có thể sử dụng localStorage
    localStorage.setItem(key, value);
  }
};

export const toggleValues = ({ array, value }: IToggleValues): string[] => {
  if (array.includes(value)) {
    return array.filter((item) => item !== value);
  } else {
    return [...array, value];
  }
};
