/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export const featureAI = {
  pathKey: "feature_ai",
  queryKey: "feature_ai",

  createFeature: async (payload: IFormFeatureAi) => {
    return await http.post<AnalyserNode, IResult>(
      `${featureAI.pathKey}/create_feature`,
      payload
    );
  },

  createAiModel: async (payload: IFormAiModel) => {
    return await http.post<AnalyserNode, IResult>(
      `${featureAI.pathKey}/create_ai_model`,
      payload
    );
  },

  getAllFeature: async () => {
    return await http.get<AnalyserNode[], IResult>(
      `${featureAI.pathKey}/features`
    );
  },

  getAiModelByFeature: async (featureAiId: string) => {
    return await http.get<AnalyserNode, IResult>(
      `${featureAI.pathKey}/ai_model_by_feature_id/${featureAiId}`
    );
  },

  getAiModelFavourite: async (featureAiId: string) => {
    return await http.get<AnalyserNode, IResult>(
      `${featureAI.pathKey}/ai_model_favourite/${featureAiId}`
    );
  },
};
