import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { folderApi } from "../axios/folderApi";

export interface FolderProps {
  folder_id: string;
  folder_name: string;
  folder_tag: string;
  user_id: number;
  created_at: number;
}
export const useFetchFolder = (): UseQueryResult<FolderProps[], Error> => {
  return useQuery({
    queryKey: ["folder-info"],
    queryFn: () => folderApi.getFolderForUser(),
    enabled: true,
    staleTime: 0,
  });
};
