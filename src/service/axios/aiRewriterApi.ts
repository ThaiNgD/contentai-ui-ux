/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export interface IResult {
  message: string;
  statusCode: string;
  active: boolean;
  result: string;
  tokenInput: string;
  tokenOutput: string;
}

export const aiRewriter = {
  queryKey: "ai_rewriter",

  create: async (payload: IFormAiReWriter) => {
    return await http.post<any, IResult>(
      `${aiRewriter.queryKey}/content_rewrite`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(`${aiRewriter.queryKey}/save_rewrite`);
  },

  get: async () => {
    return await http.get<any, any>(`${aiRewriter.queryKey}/get_rewriter`);
  },
};
