import { queryClient } from "@/provider/TanStackProvider";
import { aiLongTailKeyword } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiLongTailKeyword = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormLongTailKeywords, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiLongTailKeyword.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiLongTailKeyword.queryKey], isSuccess);
    },
  });
};
