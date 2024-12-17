/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export const aiChatImageApi = {
  queryKey: "ai-chat-image-analyze",
  pathKey: "ai-chat-image",

  analyzeImage: async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    return await http.post<any, any>(
      `${aiChatImageApi.pathKey}/analyze`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
};
