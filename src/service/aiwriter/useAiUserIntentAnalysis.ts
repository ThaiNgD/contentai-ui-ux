import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { aiUserIntentAnalytics } from "../axios/AIWriterApi";

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
