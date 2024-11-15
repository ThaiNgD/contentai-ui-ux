/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export const aiRewriter = {
  pathKey: "ai_rewriter",
  queryKey: "ai_rewriter",

  create: async (payload: IFormAiReWriter) => {
    return await http.post<any, IResult>(
      `${aiRewriter.queryKey}/content_rewrite`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(`${aiRewriter.pathKey}/save_rewrite`);
  },

  get: async () => {
    return await http.get<any, any>(`${aiRewriter.pathKey}/get_rewriter`);
  },
};
