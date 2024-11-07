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

  create: async (payload: IFrormCompetiorAnalysis) => {
    return await http.post<any, IResult>(
      `${aiAnalysisApi.queryKey}/competitor_analysis`,
      payload
    );
  },

  save: async () => {
    return await http.get<any, IResult>(
      `${aiAnalysisApi.queryKey}/save_competitor_analysis`
    );
  },

  get: async () => {
    return await http.post<any, any>(
      `${aiAnalysisApi.queryKey}/get_competitor_analysis`
    );
  },
};
