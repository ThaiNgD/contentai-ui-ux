import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiAnalysisApi } from "@/service/axios/AIWriterApi";

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
      toast.success("Thành công");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Error");
    },
  });
};
