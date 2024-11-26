import { queryClient } from "@/provider/TanStackProvider";
import { aiMetaDescription } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiMetaDescription = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormMetaDescription, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiMetaDescription.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiMetaDescription.queryKey], isSuccess);
    },
  });
};
