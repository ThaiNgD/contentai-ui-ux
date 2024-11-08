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
}
