import { queryClient } from "@/provider/TanStackProvider";
import { aiBlogIntroduction } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiBlogIntroduction = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormBlogIntroduction, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiBlogIntroduction.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiBlogIntroduction.queryKey], isSuccess);
    },
  });
};
