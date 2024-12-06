/* eslint-disable @typescript-eslint/no-explicit-any */

import http from "./httpClient";

export const aiVisionApi = {
  queryKey: "ai-vision-analyze",
  pathKey: "ai-vision",

  analyzeImage: async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    return await http.post<any, any>(
      `${aiVisionApi.pathKey}/analyze`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
};
