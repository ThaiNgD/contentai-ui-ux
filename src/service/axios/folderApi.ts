/* eslint-disable @typescript-eslint/no-explicit-any */
import { FolderProps } from "../content-management/useFetchFolder";
import http from "./httpClient";

export const folderApi = {
  pathKey: "folder",
  queryKey: "folder",

  createFolder: async (payload: IFormFolder) => {
    return await http.post<any, IResult>(
      `${folderApi.queryKey}/create_folder`,
      payload
    );
  },

  updateTag: async (payload: IFormTag, folderId: string) => {
    return await http.post<any, any>(
      `${folder.queryKey}/update_tag//${folderId}`,
      payload
    );
  },

  getFolderForUser: async () => {
    return await http.get<AnalyserNode[], FolderProps[]>(
      `${folderApi.queryKey}/folder_for_user`
    );
  },

  getFolderForUserById: async (folderId: string) => {
    return await http.get<AnalyserNode[], IResult>(
      `${folderApi.queryKey}/folder_by_id/${folderId}`
    );
  },
};
