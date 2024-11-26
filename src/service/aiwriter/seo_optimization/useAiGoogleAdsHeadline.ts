import { queryClient } from "@/provider/TanStackProvider";
import { aiGoogleAdsHeadline } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiGoogleAdsHeadline = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormGoogleAdsHeading, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiGoogleAdsHeadline.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiGoogleAdsHeadline.queryKey], isSuccess);
    },
  });
};
