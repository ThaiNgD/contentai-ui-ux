import { aiContentStrategyApi } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiContentStrategy = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormContentStrategy, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiContentStrategyApi.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      }
    },
  });
};
