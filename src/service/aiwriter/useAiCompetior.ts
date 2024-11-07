import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiAnalysisApi, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";

export const useAiCompetior = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormCompetiorAnalysis, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiAnalysisApi.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/competior-analysis");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/competior-analysis")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
