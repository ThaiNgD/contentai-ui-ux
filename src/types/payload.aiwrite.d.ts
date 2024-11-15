export {};

declare global {
  type IFormCompetiorAnalysis = {
    brandName: string;
    productDescription: string;
    adCopy: string;
    language: string;
    module: string;
  };

  type IFormContentStrategy = {
    goals: string;
    product: string;
    targetAudience: string;
    contentGeneration: string;
    contentPurpose: string;
    otherContent: string;
    module: string;
    language: string;
  };

  type IFormUserIntentAnalysis = {
    keywords: string;
    language: string;
    module: string;
  };

  type IFormRephraseContent = {
    rewrite: string;
    language: string;
    module: string;
  };

  type IFormFaqSeo = {
    keywords: string;
    language: string;
    module: string;
  };

  type IFormMetaTitles = {
    brandName: string;
    keywords: string;
    language: string;
    module: string;
  };

  type IFormMetaDescription = {
    brandName: string;
    keywords: string;
    language: string;
    module: string;
  };

  type IFormLongTailKeywords = {
    brandName: string;
    keywords: string;
    customerPortrait: string;
    language: string;
    module: string;
  };

  type IFormContentBlogLongForm = {
    title: string;
    keywords: string;
    outline: string;
    language: string;
    module: string;
  };

  type IFormOutLineSeo = {
    title: string;
    keywords: string;
    language: string;
    module: string;
  };

  type IFormCreateTitleSeo = {
    searchIntent: string;
    keywords: string;
    currentYear: string;
    language: string;
    module: string;
  };

  type IFormDeliveryPolicy = {
    brandName: string;
    description: string;
    language: string;
    module: string;
  };

  type IFormPrivacyPolicy = {
    brandName: string;
    description: string;
    customerPortrait: string;
    language: string;
    module: string;
  };

  type IFormWebsiteTitle = {
    brandName: string;
    descriptionWeb: string;
    keywords: string;
    language: string;
    module: string;
  };

  type IFormTikTokVideoIdeas = {
    brandName: string;
    productDescription: string;
    language: string;
    module: string;
  };

  type IFormThankYouLetter = {
    brandName: string;
    description: string;
    language: string;
    module: string;
  };

  type IFormLiveStreamScript = {
    brandName: string;
    productDescription: string;
    language: string;
    module: string;
  };

  type IFormIntroductionVideoScript = {
    brandName: string;
    productDescription: string;
    language: string;
    module: string;
  };

  type IFormVideoAdScript = {
    brandName: string;
    productDescription: string;
    language: string;
    module: string;
  };
  type IFormYoutubeVideoDescription = {
    brandName: string;
    keywords: string;
    language: string;
    module: string;
  };
  type IFormEmailSubject = {
    purpose: string;
    emailDescription: string;
    language: string;
    module: string;
  };

  type IFormOrderCancellationEmail = {
    brandName: string;
    emailDescription: string;
    language: string;
    module: string;
  };

  type IFormEmailWriting = {
    brandName: string;
    emailDescription: string;
    language: string;
    module: string;
  };

  type IFormSalesPitch = {
    brandName: string;
    productDescription: string;
    targetCustomerProfile: string;
    language: string;
    module: string;
  };

  type IFormBeforeAfterPost = {
    brandName: string;
    productBenefitsDescription: string;
    language: string;
    module: string;
  };

  type IFormProblemSolutionPost = {
    brandName: string;
    problemKeyword: string;
    language: string;
    module: string;
  };

  type IFormLandingPageOutLine = {
    brandName: string;
    keywords: string;
    language: string;
    module: string;
  };

  type IFormProductBenefitsPost = {
    brandName: string;
    productDescription: string;
    language: string;
    module: string;
  };

  type IFormProductDescriptionPost = {
    brandName: string;
    productDescription: string;
    language: string;
    module: string;
  };

  type IFormProductTitle = {
    brandName: string;
    productKeywords: string;
    language: string;
    module: string;
  };

  type IFormCustomerPortrait = {
    brandName: string;
    productDescription: string;
    numberOfCustomerPortraits: number;
    language: string;
    module: string;
  };

  type IFormHeroJourneyPost = {
    brandName: string;
    characterDescription: string;
    language: string;
    module: string;
  };

  type IFormStoryTellingPost = {
    brandName: string;
    productDescription: string;
    language: string;
    module: string;
  };

  type IFormHoneyCombPost = {
    brandName: string;
    productDescription: string;
    language: string;
    module: string;
  };

  type IFormInvertedPyramidFormulaPost = {
    brandName: string;
    mostImportantDetails: string;
    language: string;
    module: string;
  };

  type IFormFABPost = {
    brandName: string;
    benefits: string;
    language: string;
    module: string;
  };

  type IFormTikTokVideoHook = {
    brandName: string;
    topic: string;
    language: string;
    module: string;
  };

  type IFormTikTokVideoScript = {
    brandName: string;
    scriptKeyword: string;
    language: string;
    module: string;
  };
  type IFormWebsiteSubHeader = {
    brandName: string;
    descriptionWeb: string;
    language: string;
    module: string;
  };

  type IFormWebsiteDescription = {
    brandName: string;
    description: string;
    language: string;
    module: string;
  };

  type IFormWebsiteIntroduction = {
    brandName: string;
    description: string;
    keyword: string;
    language: string;
    module: string;
  };

  type IFormWebsiteBenefits = {
    brandName: string;
    description: string;
    language: string;
    module: string;
  };

  type IFormCustomerTestimonial = {
    brandName: string;
    description: string;
    language: string;
    module: string;
  };

  type IFormWebsiteFaq = {
    brandName: string;
    description: string;
    keywords: string;
    language: string;
    module: string;
  };

  type IFormOutlineMenu = {
    brandName: string;
    keyword: string;
    language: string;
    module: string;
  };

  type IFormFacebookAds = {
    brandName: string;
    description: string;
    customerPortrait: string;
    language: string;
    module: string;
  };

  type IFormInstagramBio = {
    brandName: string;
    description: string;
    language: string;
    module: string;
  };

  type IFormCreateAdsIdea = {
    brandName: string;
    description: string;
    language: string;
    module: string;
  };

  type IFormPasAdvertising = {
    brandName: string;
    problemCustomer: string;
    customerPortrait: string;
    language: string;
    module: string;
  };

  type IFormGoogleAdsHeading = {
    brandName: string;
    description: string;
    keyword: string;
    language: string;
    module: string;
  };

  type IFormMetaDescriptionSeo = {
    brandName: string;
    keyword: string;
    language: string;
    module: string;
  };

  type IFormBlogIntroduction = {
    brandName: string;
    keyword: string;
    language: string;
    module: string;
  };

  type IFormMainTakingPoints = {
    brandName: string;
    description: string;
    language: string;
    module: string;
  };

  type IFormBlogConclusion = {
    brandName: string;
    keyword: string;
    language: string;
    module: string;
  };

  type IFormBlogCallAction = {
    brandName: string;
    keyword: string;
    language: string;
    module: string;
  };

  type IFormBlogListicle = {
    brandName: string;
    keyword: string;
    language: string;
    module: string;
  };
}
