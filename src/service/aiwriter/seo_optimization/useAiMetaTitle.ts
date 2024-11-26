import { queryClient } from "@/provider/TanStackProvider";
import { aiMetaTitle } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiMetaTitle = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormMetaTitles, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiMetaTitle.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiMetaTitle.queryKey], isSuccess);
    },
  });
};
