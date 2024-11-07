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
    keyword: string;
    language: string;
    module: string;
  };

  type IFormRephraseContent = {
    rewrite: string;
    language: string;
    module: string;
  };

  type IFormFaq = {
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
}
