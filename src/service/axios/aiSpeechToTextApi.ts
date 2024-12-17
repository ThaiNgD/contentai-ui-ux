/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export const aiSpeechToTextApi = {
  queryKey: "speech-to-text",
  pathKey: "ai-speech-to-text",

  transcribeAudio: async (file: File) => {
    console.log("superfile", File);

    const formData = new FormData();
    formData.append("file", file);

    console.log("formData", formData);
    return await http.post<any, any>(
      `${aiSpeechToTextApi.pathKey}/transcribe`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
};
