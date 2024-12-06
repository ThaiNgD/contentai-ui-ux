/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export const aiPdfChatApi = {
  queryKey: "pdf-upload",
  pathKey: "ai-pdf-chat",

  uploadPdf: async (file: File) => {
    const formData = new FormData();
    formData.append("files", file);

    return await http.post<any, any>(
      `${aiPdfChatApi.pathKey}/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },

  addMessage: async (payload: IFormAddMessage) => {
    return await http.post<any, any>(`${aiPdfChatApi.pathKey}/ask`, payload);
  },
};
