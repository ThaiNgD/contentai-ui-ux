export {};

declare global {
  type IFormFeatureAi = {
    featureName: string;
    description: string;
  };

  type IFormAiModel = {
    modelName: string;
    description: string;
    providerName: string;
    featureId: string;
  };
}
