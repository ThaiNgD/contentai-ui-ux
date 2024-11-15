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

  save: async () => {
    return await http.post<any, IResult>(`${aiArticle.pathKey}/save_article`);
  },

  get: async () => {
    return await http.get<any, any>(`${aiArticle.pathKey}/get_article`);
  },
};
