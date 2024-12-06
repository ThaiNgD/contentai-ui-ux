/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export const aiContentAnalysis = {
  pathKey: "ai_blog",
  queryKey: "ai_content_analysis",

  create: async (payload: IFormContentAnalys) => {
    return await http.post<any, IResult>(
      `${aiContentAnalysis.pathKey}/competitor_analysis`,
      payload
    );
  },

  // Other methods for interacting with the AI Content Analysis API
};

export const aiCreateIdeaBlog = {
  pathKey: "ai_blog",
  queryKey: "ai_create_idea",

  create: async (payload: IFormIdeaBlog) => {
    return await http.post<any, IResult>(
      `${aiCreateIdeaBlog.pathKey}/create_idea`,
      payload
    );
  },
};

export const aiCreateOutlineBlog = {
  pathKey: "ai_blog",
  queryKey: "ai_create_outline_blog",

  create: async (payload: IFormOutlineBlog) => {
    return await http.post<any, IResult>(
      `${aiCreateOutlineBlog.pathKey}/create_outline`,
      payload
    );
  },
};

export const aiCreateDetailBlog = {
  pathKey: "ai_blog",
  queryKey: "ai_create_detail",

  create: async (payload: IFormDetailBlog) => {
    return await http.post<any, IResult>(
      `${aiCreateDetailBlog.pathKey}/create_detail_blog`,
      payload
    );
  },
};

export const aiSeoOptimize = {
  pathKey: "ai_blog",
  queryKey: "ai_seo_optimize",

  create: async (payload: IFormSeoOptimize) => {
    return await http.post<any, IResult>(
      `${aiSeoOptimize.pathKey}/seo_optimize`,
      payload
    );
  },
};

export const aiBlog = {
  pathKey: "ai_blog",
  queryKey: "ai_blog",

  saveBlog: async (aiModelId: string, payload: IFormDocument) => {
    return await http.post<any, IResult>(
      `${aiBlog.pathKey}/save_blog/${aiModelId}`,
      payload
    );
  },
};
