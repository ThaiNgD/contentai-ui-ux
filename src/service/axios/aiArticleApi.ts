/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export const aiArticle = {
  pathKey: "ai_article",
  queryKey: "ai_article",

  create: async (payload: IFormAiArticle) => {
    return await http.post<AnalyserNode, IResult>(
      `${aiArticle.queryKey}/render_article`,
      payload
    );
  },

  save: async (aiModelId: string) => {
    return await http.post<any, IResult>(
      `${aiArticle.pathKey}/save_article/${aiModelId}`
    );
  },
};
