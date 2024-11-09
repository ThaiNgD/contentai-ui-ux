import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiUserIntentAnalytics, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";

export const useAiIntentAnalysis = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormUserIntentAnalysis, unknown> => {
  const router = useRouter();
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiUserIntentAnalytics.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/ai-writer/analysis-user-intent");
        //!hidenToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/ai-writer/analysis-user-intent")) {
          //!hidenToast && toast.error("Thất bại");
        }
      }
    },
  });
};
