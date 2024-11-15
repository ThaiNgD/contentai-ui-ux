/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export const aiAnalysisApi = {
  pathKey: "ai_analysis",
  queryKey: "ai_analysis_api",

  create: async (payload: IFormCompetiorAnalysis) => {
    return await http.post<any, IResult>(
      `${aiAnalysisApi.pathKey}/competitor_analysis`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiAnalysisApi.pathKey}/save_competitor_analysis`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiAnalysisApi.pathKey}/get_competitor_analysis`
    );
  },
};

export const aiContentStrategyApi = {
  pathKey: "ai_analysis",
  queryKey: "ai_content_strategy_api",

  create: async (payload: IFormContentStrategy) => {
    return await http.post<any, IResult>(
      `${aiContentStrategyApi.pathKey}/content_strategy`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiContentStrategyApi.pathKey}/save_content_strategy`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiContentStrategyApi.pathKey}/get_content_strategy`
    );
  },
};

export const aiUserIntentAnalytics = {
  pathKey: "ai_seo_optimization",
  queryKey: "ai_user_intent_analytics",

  create: async (payload: IFormUserIntentAnalysis) => {
    return await http.post<any, IResult>(
      `${aiUserIntentAnalytics.pathKey}/user_intent_analysis`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiUserIntentAnalytics.pathKey}/save_user_intent_analysis`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiUserIntentAnalytics.pathKey}/get_user_intent_analysis`
    );
  },
};

export const aiRephraseContent = {
  pathKey: "ai_seo_optimization",
  queryKey: "ai_rephrase_content",

  create: async (payload: IFormRephraseContent) => {
    return await http.post<any, IResult>(
      `${aiRephraseContent.pathKey}/rephrase_content`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiRephraseContent.pathKey}/save_rephrase_content`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiRephraseContent.pathKey}/get_rephrase_content`
    );
  },
};

export const aiFaqSeo = {
  pathKey: "ai_seo_optimization",
  queryKey: "ai_faq_seo",

  create: async (payload: IFormFaqSeo) => {
    return await http.post<any, IResult>(
      `${aiFaqSeo.pathKey}/faq_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(`${aiFaqSeo.pathKey}/save_faq_seo`);
  },

  get: async () => {
    return await http.get<any, any>(`${aiFaqSeo.pathKey}/get_faq_seo`);
  },
};

export const aiMetaTitle = {
  pathKey: "ai_seo_optimization",
  queryKey: "ai_meta_title",

  create: async (payload: IFormMetaTitles) => {
    return await http.post<any, IResult>(
      `${aiMetaTitle.pathKey}/meta_title_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiMetaTitle.pathKey}/save_meta_title_seo`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiMetaTitle.pathKey}/get_meta_title_seo`
    );
  },
};

export const aiMetaDescription = {
  pathKey: "ai_seo_optimization",
  queryKey: "ai_meta_description",

  create: async (payload: IFormMetaDescription) => {
    return await http.post<any, IResult>(
      `${aiMetaDescription.pathKey}/meta_description_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiMetaDescription.pathKey}/save_meta_description_seo`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiMetaDescription.pathKey}/get_meta_description_seo`
    );
  },
};

export const aiLongTailKeyword = {
  pathKey: "ai_seo_optimization",
  queryKey: "ai_long_tail_keyword",

  create: async (payload: IFormLongTailKeywords) => {
    return await http.post<any, IResult>(
      `${aiLongTailKeyword.pathKey}/long_tail_keyword`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiLongTailKeyword.pathKey}/save_long_tail_keyword`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiLongTailKeyword.pathKey}/get_long_tail_keyword`
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
      `${aiContentBlogLongForm.pathKey}/save_content_blog_long_form`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiContentBlogLongForm.pathKey}/get_content_blog_long_form`
    );
  },
};

export const aiOutLineSeo = {
  pathKey: "ai_seo_optimization",
  queryKey: "ai_outline_seo",

  create: async (payload: IFormOutLineSeo) => {
    return await http.post<any, IResult>(
      `${aiOutLineSeo.pathKey}/create_outline_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiOutLineSeo.pathKey}/save_outline_seo`
    );
  },

  get: async () => {
    return await http.get<any, any>(`${aiOutLineSeo.pathKey}/get_outline_seo`);
  },
};

export const aiCreateTitleSeo = {
  pathKey: "ai_seo_optimization",
  queryKey: "ai_create_title_seo",

  create: async (payload: IFormCreateTitleSeo) => {
    return await http.post<any, IResult>(
      `${aiCreateTitleSeo.pathKey}/create_title_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiCreateTitleSeo.pathKey}/save_create_title_seo`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiCreateTitleSeo.pathKey}/get_create_title_seo`
    );
  },
};

export const aiDeliveryPolicy = {
  pathKey: "ai_website_content",
  queryKey: "ai_delivery_policy",

  create: async (payLoad: IFormDeliveryPolicy) => {
    return await http.post<any, IResult>(
      `${aiDeliveryPolicy.pathKey}/delivery_policy`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiDeliveryPolicy.pathKey}/save_delivery_policy`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiDeliveryPolicy.pathKey}/get_delivery_policy`
    );
  },
};

export const aiPrivacyPolicy = {
  pathKey: "ai_website_content",
  queryKey: "ai_privacy_policy",

  create: async (payLoad: IFormPrivacyPolicy) => {
    return await http.post<any, IResult>(
      `${aiPrivacyPolicy.pathKey}/privacy_policy`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiPrivacyPolicy.pathKey}/save_privacy_policy`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiPrivacyPolicy.pathKey}/get_privacy_policy`
    );
  },
};

export const aiWebsiteTitle = {
  pathKey: "ai_website_content",
  queryKey: "ai_website_title",

  create: async (payLoad: IFormWebsiteTitle) => {
    return await http.post<any, IResult>(
      `${aiWebsiteTitle.pathKey}/website_title`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteTitle.pathKey}/save_website_title`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteTitle.pathKey}/get_website_title`
    );
  },
};

export const aiWebsiteSubHeader = {
  pathKey: "ai_website_content",
  queryKey: "ai_website_sub_header",

  create: async (payload: IFormWebsiteSubHeader) => {
    return await http.post<any, IResult>(
      `${aiWebsiteSubHeader.pathKey}/website_subheadings`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteSubHeader.pathKey}/save_website_subheadings`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteSubHeader.pathKey}/get_website_subheadings`
    );
  },
};

export const aiWebsiteDescription = {
  pathKey: "ai_website_content",
  queryKey: "ai_website_description",

  create: async (payload: IFormWebsiteDescription) => {
    return await http.post<any, IResult>(
      `${aiWebsiteDescription.pathKey}/website_description`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteDescription.pathKey}/save_website_description`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteDescription.pathKey}/get_website_description`
    );
  },
};

export const aiWebsiteIntroduction = {
  pathKey: "ai_website_content",
  queryKey: "ai_website_introduction",

  create: async (payload: IFormWebsiteIntroduction) => {
    return await http.post<any, IResult>(
      `${aiWebsiteIntroduction.pathKey}/website_introduction`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteIntroduction.pathKey}/save_website_introduction`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteIntroduction.pathKey}/get_website_introduction`
    );
  },
};

export const aiWebsiteBenefits = {
  pathKey: "ai_website_content",
  queryKey: "ai_website_benefits",

  create: async (payload: IFormWebsiteBenefits) => {
    return await http.post<any, IResult>(
      `${aiWebsiteBenefits.pathKey}/website_benefits`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteBenefits.pathKey}/save_website_benefits`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteBenefits.pathKey}/get_website_benefits`
    );
  },
};

export const aiCustomerTestimonial = {
  pathKey: "ai_website_content",
  queryKey: "ai_customer_testimonial",

  create: async (payload: IFormCustomerTestimonial) => {
    return await http.post<any, IResult>(
      `${aiCustomerTestimonial.pathKey}/customer_testimonials`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiCustomerTestimonial.pathKey}/save_customer_testimonials`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiCustomerTestimonial.pathKey}/get_customer_testimonials`
    );
  },
};

export const aiWebsiteFaq = {
  pathKey: "ai_website_content",
  queryKey: "ai_website_faq",

  create: async (payload: IFormWebsiteFaq) => {
    return await http.post<any, IResult>(
      `${aiWebsiteFaq.pathKey}/faq`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(`${aiWebsiteFaq.pathKey}/save_faq`);
  },

  get: async () => {
    return await http.get<any, any>(`${aiWebsiteFaq.pathKey}/get_faq`);
  },
};

export const aiWebsiteOutlineMenu = {
  pathKey: "ai_website_content",
  queryKey: "ai_website_outline_menu",

  create: async (payload: IFormOutlineMenu) => {
    return await http.post<any, IResult>(
      `${aiWebsiteOutlineMenu.pathKey}/outline_menu`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiWebsiteOutlineMenu.pathKey}/save_outline_menu`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiWebsiteOutlineMenu.pathKey}/get_outline_menu`
    );
  },
};

export const aiFacebookAds = {
  pathKey: "ai_ads_content",
  queryKey: "ai_ads_content",

  create: async (payload: IFormFacebookAds) => {
    return await http.post<any, IResult>(
      `${aiFacebookAds.pathKey}/facebook_ads`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiFacebookAds.pathKey}/save_facebook_ads`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiFacebookAds.pathKey}/get_facebook_ads`
    );
  },
};

export const aiInstagramBio = {
  pathKey: "ai_ads_content",
  queryKey: "ai_instagram_bio",

  create: async (payload: IFormInstagramBio) => {
    return await http.post<any, IResult>(
      `${aiInstagramBio.pathKey}/instagram_bio`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiInstagramBio.pathKey}/save_instagram_bio`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiInstagramBio.pathKey}/get_instagram_bio`
    );
  },
};

export const aiCreateAdsIdea = {
  pathKey: "ai_ads_content",
  queryKey: "ai_create_ads_idea",

  create: async (payload: IFormCreateAdsIdea) => {
    return await http.post<any, IResult>(
      `${aiCreateAdsIdea.pathKey}/create_ads_ideas`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiCreateAdsIdea.pathKey}/save_create_ads_ideas`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiCreateAdsIdea.pathKey}/get_create_ads_ideas`
    );
  },
};

export const aiPasAdertising = {
  pathKey: "ai_ads_content",
  queryKey: "ai_pas_advertising",

  create: async (payload: IFormPasAdvertising) => {
    return await http.post<any, IResult>(
      `${aiPasAdertising.pathKey}/pas_advertising`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiPasAdertising.pathKey}/save_pas_advertising`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiPasAdertising.pathKey}/get_pas_advertising`
    );
  },
};

export const aiGoogleAdsHeadline = {
  pathKey: "ai_ads_content",
  queryKey: "ai_google_ads_headline",

  create: async (payload: IFormGoogleAdsHeading) => {
    return await http.post<any, IResult>(
      `${aiGoogleAdsHeadline.pathKey}/google_ads_headlines`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiGoogleAdsHeadline.pathKey}/save_google_ads_headlines`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiGoogleAdsHeadline.pathKey}/get_google_ads_headlines`
    );
  },
};

export const aiMetaDescriptionSeo = {
  pathKey: "ai_blog_v2",
  queryKey: "ai_meta_description",

  create: async (payload: IFormMetaDescriptionSeo) => {
    return await http.post<any, IResult>(
      `${aiMetaDescriptionSeo.pathKey}/blog_meta_description_seo`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiMetaDescriptionSeo.pathKey}/save_blog_meta_description_seo`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiMetaDescriptionSeo.pathKey}/get_blog_meta_description_seo`
    );
  },
};

export const aiBlogIntroduction = {
  pathKey: "ai_blog_v2",
  queryKey: "ai_blog_introduction",

  create: async (payload: IFormBlogIntroduction) => {
    return await http.post<any, IResult>(
      `${aiBlogIntroduction.pathKey}/blog_introduction`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiBlogIntroduction.pathKey}/save_blog_introduction`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiBlogIntroduction.pathKey}/get_blog_introduction`
    );
  },
};

export const aiMainTakingPoints = {
  pathKey: "ai_blog_v2",
  queryKey: "ai_main_taking_points",

  create: async (payload: IFormMainTakingPoints) => {
    return await http.post<any, IResult>(
      `${aiMainTakingPoints.pathKey}/blog_main_point`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiMainTakingPoints.pathKey}/save_blog_main_point`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiMainTakingPoints.pathKey}/get_blog_main_point`
    );
  },
};

export const aiBlogConclusion = {
  pathKey: "ai_blog_v2",
  queryKey: "ai_blog_conclusion",

  create: async (payload: IFormBlogConclusion) => {
    return await http.post<any, IResult>(
      `${aiBlogConclusion.pathKey}/blog_conclusion`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiBlogConclusion.pathKey}/save_blog_conclusion`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiBlogConclusion.pathKey}/get_blog_conclusion`
    );
  },
};

export const aiBlogCallAction = {
  pathKey: "ai_blog_v2",
  queryKey: "ai_blog_call_action",

  create: async (payload: IFormBlogCallAction) => {
    return await http.post<any, IResult>(
      `${aiBlogCallAction.pathKey}/blog_call_to_action`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiBlogCallAction.pathKey}/save_blog_call_to_action`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiBlogCallAction.pathKey}/get_blog_call_to_action`
    );
  },
};

export const aiBlogListicle = {
  pathKey: "ai_blog_v2",
  queryKey: "ai_blog_listicle",

  create: async (payload: IFormBlogListicle) => {
    return await http.post<any, IResult>(
      `${aiBlogListicle.pathKey}/blog_listicle`,
      payload
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiBlogListicle.pathKey}/save_blog_listicle`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiBlogListicle.pathKey}/get_blog_listicle`
    );
  },
};
