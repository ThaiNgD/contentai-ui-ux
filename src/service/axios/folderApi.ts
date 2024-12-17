/* eslint-disable @typescript-eslint/no-explicit-any */
import { FolderProps } from "../content-management/useFetchFolder";
import http from "./httpClient";

export const folderApi = {
  pathKey: "folder",
  queryKey: "folder",

  createFolder: async (payload: IFormFolder) => {
    const data = await http.post<any, IResult>(
      `${folderApi.queryKey}/create_folder`,
      payload
    );
    return data;
  },

  updateTag: async (payload: IFormTag, folderId: string) => {
    return await http.post<any, any>(
      `${folderApi.queryKey}/update_tag/${folderId}`,
      payload
    );
  },

  getFolderForUser: async () => {
    const data = await http.get<AnalyserNode[], FolderProps[]>(
      `${folderApi.queryKey}/folder_for_user`
    );
    console.log(data);
    return data;
  },

  getFolderForUserById: async (folderId: string) => {
    return await http.get<AnalyserNode[], IResult>(
      `${folderApi.queryKey}/folder_by_id/${folderId}`
    );
  },
};
