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

export const aiAnalysisApi = {
  queryKey: "ai_analysis",

  create: async (payload: IFormCompetiorAnalysis) => {
    return await http.post<any, IResult>(
      `${aiAnalysisApi.queryKey}/competitor_analysis`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiAnalysisApi.queryKey}/save_competitor_analysis`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiAnalysisApi.queryKey}/get_competitor_analysis`
    );
  },
};

export const aiContentStrategyApi = {
  queryKey: "ai_analysis",

  create: async (payload: IFormContentStrategy) => {
    return await http.post<any, IResult>(
      `${aiContentStrategyApi.queryKey}/content_strategy`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiContentStrategyApi.queryKey}/save_content_strategy`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiContentStrategyApi.queryKey}/get_content_strategy`
    );
  },
};

export const aiUserIntentAnalytics = {
  queryKey: "ai_seo_optimization",

  create: async (payload: IFormUserIntentAnalysis) => {
    return await http.post<any, IResult>(
      `${aiUserIntentAnalytics.queryKey}/user_intent_analytics`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiUserIntentAnalytics.queryKey}/save_user_intent_analytics`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiUserIntentAnalytics.queryKey}/get_user_intent_analytics`
    );
  },
};

export const aiRephraseContent = {
  queryKey: "ai_seo_optimization",

  create: async (payload: IFormRephraseContent) => {
    return await http.post<any, IResult>(
      `${aiRephraseContent.queryKey}/rephrase_content`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiRephraseContent.queryKey}/save_rephrase_content`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiRephraseContent.queryKey}/get_rephrase_content`
    );
  },
};

export const aiFaqSeo = {
  queryKey: "ai_seo_optimization",

  create: async (payload: IFormFaq) => {
    return await http.post<any, IResult>(
      `${aiFaqSeo.queryKey}/faq_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(`${aiFaqSeo.queryKey}/save_faq_seo`);
  },

  get: async () => {
    return await http.get<any, any>(`${aiFaqSeo.queryKey}/get_faq_seo`);
  },
};

export const aiMetaTitle = {
  queryKey: "ai_seo_optimization",

  create: async (payload: IFormMetaTitles) => {
    return await http.post<any, IResult>(
      `${aiMetaTitle.queryKey}/meta_title_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiMetaTitle.queryKey}/save_meta_title_seo`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiMetaTitle.queryKey}/get_meta_title_seo`
    );
  },
};

export const aiMetaDescription = {
  queryKey: "ai_seo_optimization",

  create: async (payload: IFormMetaDescription) => {
    return await http.post<any, IResult>(
      `${aiMetaDescription.queryKey}/meta_description_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiMetaDescription.queryKey}/save_meta_description_seo`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiMetaDescription.queryKey}/get_meta_description_seo`
    );
  },
};

export const aiLongTailKeyword = {
  queryKey: "ai_seo_optimization",

  create: async (payload: IFormLongTailKeywords) => {
    return await http.post<any, IResult>(
      `${aiLongTailKeyword.queryKey}/long_tail_keyword`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiLongTailKeyword.queryKey}/save_long_tail_keyword`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiLongTailKeyword.queryKey}/get_long_tail_keyword`
    );
  },
};
