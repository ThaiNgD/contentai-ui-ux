import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { folderApi } from "../axios/folderApi";

// Định nghĩa kiểu dữ liệu cho từng Folder
export interface FolderProps {
  folder_id: string;         // UUID kiểu string
  folder_name: string;
  folder_tag: boolean;       // Boolean khớp với API trả về
  user_id: string;           // UUID kiểu string
  created_at: string;        // ISO datetime string
  description?: string;      // Có thể không có
}

// Định nghĩa kiểu dữ liệu trả về từ API
export interface FolderApiResponse {
  data: FolderProps[];       // Mảng các folder
  total: number;             // Tổng số folder
  page: number | string;     // Trang hiện tại
  limit: number;             // Số lượng folder mỗi trang
}

export const useFetchFolder = (): UseQueryResult<FolderApiResponse, Error> => {
  return useQuery({
    queryKey: ["all-folder"],
    queryFn: () => folderApi.getFolderForUser(),
    enabled: true,
  });
};
