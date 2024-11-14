/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

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
  pathKey: "ai_seo_optimization",
  queryKey: "ai_content_blog_long_form",
  create: async (payload: IFormContentBlogLongForm) => {
    return await http.post<any, IResult>(
      `${aiContentBlogLongForm.pathKey}/content_blog_long_form`,
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

export const aiWebsiteSubHeader = {
  queryKey: "ai_website_content",

  create: async (payload: IFormWebsiteSubHeader) => {
    return await http.post<any, IResult>(
      `${aiWebsiteSubHeader.queryKey}/website_subheadings`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteSubHeader.queryKey}/save_website_subheadings`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteSubHeader.queryKey}/get_website_subheadings`
    );
  },
};

export const aiWebsiteDescription = {
  queryKey: "ai_website_content",

  create: async (payload: IFormWebsiteDescription) => {
    return await http.post<any, IResult>(
      `${aiWebsiteDescription.queryKey}/website_description`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteDescription.queryKey}/save_website_description`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteDescription.queryKey}/get_website_description`
    );
  },
};

export const aiWebsiteIntroduction = {
  queryKey: "ai_website_content",

  create: async (payload: IFormWebsiteIntroduction) => {
    return await http.post<any, IResult>(
      `${aiWebsiteIntroduction.queryKey}/website_introduction`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteIntroduction.queryKey}/save_website_introduction`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteIntroduction.queryKey}/get_website_introduction`
    );
  },
};

export const aiWebsiteBenefits = {
  queryKey: "ai_website_content",

  create: async (payload: IFormWebsiteBenefits) => {
    return await http.post<any, IResult>(
      `${aiWebsiteBenefits.queryKey}/website_benefits`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteBenefits.queryKey}/save_website_benefits`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteBenefits.queryKey}/get_website_benefits`
    );
  },
};

export const aiCustomerTestimonial = {
  queryKey: "ai_website_content",

  create: async (payload: IFormCustomerTestimonial) => {
    return await http.post<any, IResult>(
      `${aiCustomerTestimonial.queryKey}/customer_testimonials`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiCustomerTestimonial.queryKey}/save_customer_testimonials`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiCustomerTestimonial.queryKey}/get_customer_testimonials`
    );
  },
};

export const aiWebsiteFaq = {
  queryKey: "ai_website_content",

  create: async (payload: IFormWebsiteFaq) => {
    return await http.post<any, IResult>(
      `${aiWebsiteFaq.queryKey}/faq`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(`${aiWebsiteFaq.queryKey}/save_faq`);
  },

  get: async () => {
    return await http.get<any, any>(`${aiWebsiteFaq.queryKey}/get_faq`);
  },
};

export const aiWebsiteOutlineMenu = {
  queryKey: "ai_website_content",

  create: async (payload: IFormOutlineMenu) => {
    return await http.post<any, IResult>(
      `${aiWebsiteOutlineMenu.queryKey}/outline_menu`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteOutlineMenu.queryKey}/save_outline_menu`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteOutlineMenu.queryKey}/get_outline_menu`
    );
  },
};

export const aiFacebookAds = {
  queryKey: "ai_ads_content",

  create: async (payload: IFormFacebookAds) => {
    return await http.post<any, IResult>(
      `${aiFacebookAds.queryKey}/facebook_ads`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiFacebookAds.queryKey}/save_facebook_ads`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiFacebookAds.queryKey}/get_facebook_ads`
    );
  },
};

export const aiInstagramBio = {
  queryKey: "ai_ads_content",

  create: async (payload: IFormInstagramBio) => {
    return await http.post<any, IResult>(
      `${aiInstagramBio.queryKey}/instagram_bio`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiInstagramBio.queryKey}/save_instagram_bio`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiInstagramBio.queryKey}/get_instagram_bio`
    );
  },
};

export const aiCreateAdsIdea = {
  queryKey: "ai_ads_content",

  create: async (payload: IFormCreateAdsIdea) => {
    return await http.post<any, IResult>(
      `${aiCreateAdsIdea.queryKey}/create_ads_ideas`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiCreateAdsIdea.queryKey}/save_create_ads_ideas`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiCreateAdsIdea.queryKey}/get_create_ads_ideas`
    );
  },
};

export const aiPasAdertising = {
  queryKey: "ai_ads_content",

  create: async (payload: IFormPasAdvertising) => {
    return await http.post<any, IResult>(
      `${aiPasAdertising.queryKey}/pas_advertising`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiPasAdertising.queryKey}/save_pas_advertising`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiPasAdertising.queryKey}/get_pas_advertising`
    );
  },
};

export const aiGoogleAdsHeadline = {
  queryKey: "ai_ads_content",

  create: async (payload: IFormGoogleAdsHeading) => {
    return await http.post<any, IResult>(
      `${aiGoogleAdsHeadline.queryKey}/google_ads_headlines`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiGoogleAdsHeadline.queryKey}/save_google_ads_headlines`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiGoogleAdsHeadline.queryKey}/get_google_ads_headlines`
    );
  },
};

export const aiMetaDescriptionSeo = {
  queryKey: "ai_blog_v2",

  create: async (payload: IFormMetaDescriptionSeo) => {
    return await http.post<any, IResult>(
      `${aiMetaDescriptionSeo.queryKey}/blog_meta_description_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiMetaDescriptionSeo.queryKey}/save_blog_meta_description_seo`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiMetaDescriptionSeo.queryKey}/get_blog_meta_description_seo`
    );
  },
};

export const aiBlogIntroduction = {
  queryKey: "ai_blog_v2",

  create: async (payload: IFormBlogIntroduction) => {
    return await http.post<any, IResult>(
      `${aiBlogIntroduction.queryKey}/blog_introduction`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiBlogIntroduction.queryKey}/save_blog_introduction`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiBlogIntroduction.queryKey}/get_blog_introduction`
    );
  },
};

export const aiMainTakingPoints = {
  queryKey: "ai_blog_v2",

  create: async (payload: IFormMainTakingPoints) => {
    return await http.post<any, IResult>(
      `${aiMainTakingPoints.queryKey}/blog_main_point`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiMainTakingPoints.queryKey}/save_blog_main_point`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiMainTakingPoints.queryKey}/get_blog_main_point`
    );
  },
};

export const aiBlogConclusion = {
  queryKey: "ai_blog_v2",

  create: async (payload: IFormBlogConclusion) => {
    return await http.post<any, IResult>(
      `${aiBlogConclusion.queryKey}/blog_conclusion`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiBlogConclusion.queryKey}/save_blog_conclusion`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiBlogConclusion.queryKey}/get_blog_conclusion`
    );
  },
};

export const aiBlogCallAction = {
  queryKey: "ai_blog_v2",

  create: async (payload: IFormBlogCallAction) => {
    return await http.post<any, IResult>(
      `${aiBlogCallAction.queryKey}/blog_call_to_action`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiBlogCallAction.queryKey}/save_blog_call_to_action`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiBlogCallAction.queryKey}/get_blog_call_to_action`
    );
  },
};

export const aiBlogListicle = {
  queryKey: "ai_blog_v2",

  create: async (payload: IFormBlogListicle) => {
    return await http.post<any, IResult>(
      `${aiBlogListicle.queryKey}/blog_listicle`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiBlogListicle.queryKey}/save_blog_listicle`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiBlogListicle.queryKey}/get_blog_listicle`
    );
  },
};
