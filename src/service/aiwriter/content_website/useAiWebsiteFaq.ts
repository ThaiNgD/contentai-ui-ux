import { queryClient } from "@/provider/TanStackProvider";
import { aiWebsiteFaq } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiWebsiteFaq = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormWebsiteFaq, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiWebsiteFaq.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiWebsiteFaq.queryKey], isSuccess);
    },
  });
};
