import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiAnalysisApi } from "../axios/AIWriterApi";

export const useAiCompetior = (): UseMutationResult<
  IResult,
  Error,
  IFormCompetiorAnalysis,
  unknown
> => {
  return useMutation({
    mutationFn: aiAnalysisApi.create,
    onSuccess: (isSuccess) => {
      console.log(isSuccess);
    },
  });
};
