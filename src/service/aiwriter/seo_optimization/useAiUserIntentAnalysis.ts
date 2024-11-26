import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiUserIntentAnalytics } from "../../axios/AIWriterApi";

export const useAiIntentAnalysis = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormUserIntentAnalysis, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiUserIntentAnalytics.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiUserIntentAnalytics.queryKey], isSuccess);
    },
  });
};
