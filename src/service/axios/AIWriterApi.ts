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
};

export const aiTiktokVideoIdeas = {
  queryKey: "ai-tiktok-video-ideas",

  create: async (payLoad: IFormTikTokVideoIdeas) => {
    return await http.post<any, IResult>(
      `${aiTiktokVideoIdeas.queryKey}/generate-ideas`,
      payLoad
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
};

export const aiLiveStreamScript = {
  queryKey: "ai-live-stream-script",

  create: async (payLoad: IFormLiveStreamScript) => {
    return await http.post<any, IResult>(
      `${aiLiveStreamScript.queryKey}/generate-script`,
      payLoad
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
};

export const aiVideoAdScript = {
  queryKey: "ai-video-ad-script",

  create: async (payLoad: IFormVideoAdScript) => {
    return await http.post<any, IResult>(
      `${aiVideoAdScript.queryKey}/generate-script`,
      payLoad
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
};

export const aiEmailSubject = {
  queryKey: "ai-email-subject",

  create: async (payLoad: IFormEmailSubject) => {
    return await http.post<any, IResult>(
      `${aiEmailSubject.queryKey}/generate-email-subject`,
      payLoad
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
};

export const aiEmailWriting = {
  queryKey: "ai-email-writing",

  create: async (payLoad: IFormEmailWriting) => {
    return await http.post<any, IResult>(
      `${aiEmailWriting.queryKey}/generate-email`,
      payLoad
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
};

export const aiBeforeAterPost = {
  queryKey: "ai-before-after-post",

  create: async (payLoad: IFormBeforeAfterPost) => {
    return await http.post<any, IResult>(
      `${aiBeforeAterPost.queryKey}/generate-post`,
      payLoad
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
};

export const aiLandingPageOutline = {
  queryKey: "ai-landing-page-outline",

  create: async (payLoad: IFormLandingPageOutLine) => {
    return await http.post<any, IResult>(
      `${aiLandingPageOutline.queryKey}/generate-post`,
      payLoad
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
};

export const aiProductDescriptionPost = {
  queryKey: "ai-product-description",

  create: async (payLoad: IFormProductDescriptionPost) => {
    return await http.post<any, IResult>(
      `${aiProductDescriptionPost.queryKey}/generate-post`,
      payLoad
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
};

export const aiBuyerPersonas = {
  queryKey: "ai-buyer-personas",

  create: async (payLoad: IFormCustomerPortrait) => {
    return await http.post<any, IResult>(
      `${aiBuyerPersonas.queryKey}/generate-post`,
      payLoad
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
};

export const aiStoryTellingPost = {
  queryKey: "ai-story-telling-fb-post",

  create: async (payLoad: IFormStoryTellingPost) => {
    return await http.post<any, IResult>(
      `${aiStoryTellingPost.queryKey}/generate-post`,
      payLoad
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
};

export const aiInvertedPyramidFormulaPost = {
  queryKey: "ai-inverted-pyramid-formula-post",

  create: async (payLoad: IFormInvertedPyramidFormulaPost) => {
    return await http.post<any, IResult>(
      `${aiInvertedPyramidFormulaPost.queryKey}/generate-post`,
      payLoad
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
};

export const aiTikTokVideoHook = {
  queryKey: "ai-tiktok-video-hook",

  create: async (payLoad: IFormTikTokVideoHook) => {
    return await http.post<any, IResult>(
      `${aiTikTokVideoHook.queryKey}/generate-hook`,
      payLoad
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
};

export const aiWriter = {
  pathKey: "document",
  queryKey: "document",

  save: async ( payload: IFormDocument) => {
    return await http.post<any, IResult>(
      `${aiWriter.pathKey}/save-document`,
      payload
    );
  },
};
