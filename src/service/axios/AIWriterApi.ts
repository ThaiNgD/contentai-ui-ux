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
      `${aiUserIntentAnalytics.queryKey}/user_intent_analysis`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiUserIntentAnalytics.queryKey}/save_user_intent_analysis`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiUserIntentAnalytics.queryKey}/get_user_intent_analysis`
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

  create: async (payload: IFormFaqSeo) => {
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

export const aiContentBlogLongForm = {
  queryKey: "ai_seo_optimization",

  create: async (payload: IFormContentBlogLongForm) => {
    return await http.post<any, IResult>(
      `${aiContentBlogLongForm.queryKey}/content_blog_long_form`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiContentBlogLongForm.queryKey}/save_content_blog_long_form`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiContentBlogLongForm.queryKey}/get_content_blog_long_form`
    );
  },
};

export const aiOutLineSeo = {
  queryKey: "ai_seo_optimization",

  create: async (payload: IFormOutLineSeo) => {
    return await http.post<any, IResult>(
      `${aiOutLineSeo.queryKey}/create_outline_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiOutLineSeo.queryKey}/save_outline_seo`
    );
  },

  get: async () => {
    return await http.get<any, any>(`${aiOutLineSeo.queryKey}/get_outline_seo`);
  },
};

export const aiCreateTitleSeo = {
  queryKey: "ai_seo_optimization",

  create: async (payload: IFormCreateTitleSeo) => {
    return await http.post<any, IResult>(
      `${aiCreateTitleSeo.queryKey}/create_title_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiCreateTitleSeo.queryKey}/save_create_title_seo`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiCreateTitleSeo.queryKey}/get_create_title_seo`
    );
  },
};

export const aiDeliveryPolicy = {
  queryKey: "ai_website_content",

  create: async (payLoad: IFormDeliveryPolicy) => {
    return await http.post<any, IResult>(
      `${aiDeliveryPolicy.queryKey}/delivery_policy`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiDeliveryPolicy.queryKey}/save_delivery_policy`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiDeliveryPolicy.queryKey}/get_delivery_policy`
    );
  },
};

export const aiPrivacyPolicy = {
  queryKey: "ai_website_content",

  create: async (payLoad: IFormPrivacyPolicy) => {
    return await http.post<any, IResult>(
      `${aiPrivacyPolicy.queryKey}/privacy_policy`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiPrivacyPolicy.queryKey}/save_privacy_policy`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiPrivacyPolicy.queryKey}/get_privacy_policy`
    );
  },
};

export const aiWebsiteTitle = {
  queryKey: "ai_website_content",

  create: async (payLoad: IFormWebsiteTitle) => {
    return await http.post<any, IResult>(
      `${aiWebsiteTitle.queryKey}/website_title`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteTitle.queryKey}/save_website_title`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteTitle.queryKey}/get_website_title`
    );
  },
};
