/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";
export const aiAnalysezKeyword = {
  pathKey: "ai_seo",
  queryKey: "ai_analyser_keyword",

  create: async (payload: IFormAnalyzeKeyword) => {
    return await http.post<any, IResult>(
      `${aiAnalysezKeyword.pathKey}/analyze_keyword`,
      payload
    );
  },
};

export const aiCreateTitle = {
  pathKey: "ai_seo",
  queryKey: "ai_create_title",

  create: async (payload: IFormCreateTitle) => {
    return await http.post<any, IResult>(
      `${aiCreateTitle.pathKey}/create_title`,
      payload
    );
  },
};

export const aiCreateOutline = {
  pathKey: "ai_seo",
  queryKey: "ai_create_outline",

  create: async (payload: IFormCreateOutline) => {
    return await http.post<any, IResult>(
      `${aiCreateOutline.pathKey}/create_outline`,
      payload
    );
  },
};

export const aiCreateDetail = {
  pathKey: "ai_seo",
  queryKey: "ai_create_detail",

  create: async (payload: IFormCreateDetail) => {
    return await http.post<any, IResult>(
      `${aiCreateDetail.pathKey}/create_detail`,
      payload
    );
  },
};

export const aiSeo = {
  pathKey: "ai_seo",
  queryKey: "ai_seo",

  saveSeo: async (aiModelId: string, payload: IFormDocument) => {
    return await http.post<any, IResult>(
      `${aiSeo.pathKey}/save_seo/${aiModelId}`,
      payload
    );
  },
};
