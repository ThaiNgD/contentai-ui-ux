import { queryClient } from "@/provider/TanStackProvider";
import { aiPrivacyPolicy } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiPrivacyPolicy = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormPrivacyPolicy, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiPrivacyPolicy.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiPrivacyPolicy.queryKey], isSuccess);
    },
  });
};
