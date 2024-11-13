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

export const aiTiktokVideoIdeas = {
  queryKey: "ai-tiktok-video-ideas",

  create: async (payLoad: IFormTikTokVideoIdeas) => {
    return await http.post<any, IResult>(
      `${aiTiktokVideoIdeas.queryKey}/generate-ideas`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiTiktokVideoIdeas.queryKey}/save-generate-ideas`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiTiktokVideoIdeas.queryKey}/get-generate-ideas`
    );
  },
};

export const aiThankYouEmail = {
  queryKey: "ai-thank-you-email",

  create: async (payLoad: IFormThankYouLetter) => {
    return await http.post<any, IResult>(
      `${aiThankYouEmail.queryKey}/generate-email`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiThankYouEmail.queryKey}/save-generate-email`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiThankYouEmail.queryKey}/get-generate-email`
    );
  },
};

export const aiLiveStreamScript = {
  queryKey: "ai-live-stream-script",

  create: async (payLoad: IFormLiveStreamScript) => {
    return await http.post<any, IResult>(
      `${aiLiveStreamScript.queryKey}/generate-script`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiLiveStreamScript.queryKey}/save-generate-script`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiLiveStreamScript.queryKey}/get-generate-script`
    );
  },
};

export const aiVideoIntroScript = {
  queryKey: "ai-video-intro-script",

  create: async (payLoad: IFormIntroductionVideoScript) => {
    return await http.post<any, IResult>(
      `${aiVideoIntroScript.queryKey}/generate-intro-script`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiVideoIntroScript.queryKey}/save-generate-intro-script`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiVideoIntroScript.queryKey}/get-generate-intro-script`
    );
  },
};

export const aiVideoAdScript = {
  queryKey: "ai-video-ad-script",

  create: async (payLoad: IFormVideoAdScript) => {
    return await http.post<any, IResult>(
      `${aiVideoAdScript.queryKey}/generate-script`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiVideoAdScript.queryKey}/save-generate-script`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiVideoAdScript.queryKey}/get-generate-script`
    );
  },
};

export const aiYoutubeVideoDescription = {
  queryKey: "ai-youtube-video-description",

  create: async (payLoad: IFormYoutubeVideoDescription) => {
    return await http.post<any, IResult>(
      `${aiYoutubeVideoDescription.queryKey}/generate-description`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiYoutubeVideoDescription.queryKey}/save-generate-description`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiYoutubeVideoDescription.queryKey}/get-generate-description`
    );
  },
};

export const aiEmailSubject = {
  queryKey: "ai-email-subject",

  create: async (payLoad: IFormEmailSubject) => {
    return await http.post<any, IResult>(
      `${aiEmailSubject.queryKey}/generate-email-subject`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiEmailSubject.queryKey}/save-generate-email-subject`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiEmailSubject.queryKey}/get-generate-email-subject`
    );
  },
};

export const aiCancelOrderEmail = {
  queryKey: "ai-order-cancellation-email",

  create: async (payLoad: IFormOrderCancellationEmail) => {
    return await http.post<any, IResult>(
      `${aiCancelOrderEmail.queryKey}/generate-email`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiCancelOrderEmail.queryKey}/save-generate-email`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiCancelOrderEmail.queryKey}/get-generate-email`
    );
  },
};

export const aiEmailWriting = {
  queryKey: "ai-email-writing",

  create: async (payLoad: IFormEmailWriting) => {
    return await http.post<any, IResult>(
      `${aiEmailWriting.queryKey}/generate-email`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiEmailWriting.queryKey}/save-generate-email`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiEmailWriting.queryKey}/get-generate-email`
    );
  },
};

export const aiSalesPitch = {
  queryKey: "ai-effective-sales-pitch",

  create: async (payLoad: IFormSalesPitch) => {
    return await http.post<any, IResult>(
      `${aiSalesPitch.queryKey}/generate-pitch`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiSalesPitch.queryKey}/save-generate-pitch`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiSalesPitch.queryKey}/get-generate-pitch`
    );
  },
};

export const aiBeforeAterPost = {
  queryKey: "ai-before-after-post",

  create: async (payLoad: IFormBeforeAfterPost) => {
    return await http.post<any, IResult>(
      `${aiBeforeAterPost.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiBeforeAterPost.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiBeforeAterPost.queryKey}/get-generate-post`
    );
  },
};

export const aiProblemSolutionPost = {
  queryKey: "ai-problem-solution-post",

  create: async (payLoad: IFormProblemSolutionPost) => {
    return await http.post<any, IResult>(
      `${aiProblemSolutionPost.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiProblemSolutionPost.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiProblemSolutionPost.queryKey}/get-generate-post`
    );
  },
};

export const aiLandingPageOutline = {
  queryKey: "ai-landing-page-outline",

  create: async (payLoad: IFormLandingPageOutLine) => {
    return await http.post<any, IResult>(
      `${aiLandingPageOutline.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiLandingPageOutline.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiLandingPageOutline.queryKey}/get-generate-post`
    );
  },
};

export const aiProductBenefitsPost = {
  queryKey: "ai-product-benefits-post",

  create: async (payLoad: IFormProductBenefitsPost) => {
    return await http.post<any, IResult>(
      `${aiProductBenefitsPost.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiProductBenefitsPost.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiProductBenefitsPost.queryKey}/get-generate-post`
    );
  },
};

export const aiProductDescriptionPost = {
  queryKey: "ai-product-description",

  create: async (payLoad: IFormProductDescriptionPost) => {
    return await http.post<any, IResult>(
      `${aiProductDescriptionPost.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiProductDescriptionPost.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiProductDescriptionPost.queryKey}/get-generate-post`
    );
  },
};

export const aiProductTitle = {
  queryKey: "ai-product-title",

  create: async (payLoad: IFormProductTitle) => {
    return await http.post<any, IResult>(
      `${aiProductTitle.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiProductTitle.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiProductTitle.queryKey}/get-generate-post`
    );
  },
};

export const aiBuyerPersonas = {
  queryKey: "ai-buyer-personas",

  create: async (payLoad: IFormCustomerPortrait) => {
    return await http.post<any, IResult>(
      `${aiBuyerPersonas.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiBuyerPersonas.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiBuyerPersonas.queryKey}/get-generate-post`
    );
  },
};

export const aiHeroJourneyPost = {
  queryKey: "ai-hero-journey-post",

  create: async (payLoad: IFormHeroJourneyPost) => {
    return await http.post<any, IResult>(
      `${aiHeroJourneyPost.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiHeroJourneyPost.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiHeroJourneyPost.queryKey}/get-generate-post`
    );
  },
};

export const aiStoryTellingPost = {
  queryKey: "ai-story-telling-fb-post",

  create: async (payLoad: IFormStoryTellingPost) => {
    return await http.post<any, IResult>(
      `${aiStoryTellingPost.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiStoryTellingPost.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiStoryTellingPost.queryKey}/get-generate-post`
    );
  },
};

export const aiHoneyCombPost = {
  queryKey: "ai-honey-comb-post",

  create: async (payLoad: IFormHoneyCombPost) => {
    return await http.post<any, IResult>(
      `${aiHoneyCombPost.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiHoneyCombPost.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiHoneyCombPost.queryKey}/get-generate-post`
    );
  },
};

export const aiInvertedPyramidFormulaPost = {
  queryKey: "ai-inverted-pyramid-formula-post",

  create: async (payLoad: IFormInvertedPyramidFormulaPost) => {
    return await http.post<any, IResult>(
      `${aiInvertedPyramidFormulaPost.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiInvertedPyramidFormulaPost.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiInvertedPyramidFormulaPost.queryKey}/get-generate-post`
    );
  },
};

export const aiFABPost = {
  queryKey: "ai-fab-formula-post",

  create: async (payLoad: IFormFABPost) => {
    return await http.post<any, IResult>(
      `${aiFABPost.queryKey}/generate-post`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiFABPost.queryKey}/save-generate-post`
    );
  },

  get: async () => {
    return await http.get<any, any>(`${aiFABPost.queryKey}/get-generate-post`);
  },
};

export const aiTikTokVideoHook = {
  queryKey: "ai-tiktok-video-hook",

  create: async (payLoad: IFormTikTokVideoHook) => {
    return await http.post<any, IResult>(
      `${aiTikTokVideoHook.queryKey}/generate-hook`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiTikTokVideoHook.queryKey}/save-generate-hook`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiTikTokVideoHook.queryKey}/get-generate-hook`
    );
  },
};

export const aiTikTokVideoScript = {
  queryKey: "ai-tiktok-video-script",

  create: async (payLoad: IFormTikTokVideoScript) => {
    return await http.post<any, IResult>(
      `${aiTikTokVideoScript.queryKey}/generate-script`,
      payLoad
    );
  },

  save: async () => {
    return await http.post<any, IResult>(
      `${aiTikTokVideoScript.queryKey}/save-generate-script`
    );
  },

  get: async () => {
    return await http.get<any, any>(
      `${aiTikTokVideoScript.queryKey}/get-generate-script`
    );
  },
};
