import { queryClient } from "@/provider/TanStackProvider";
import { aiBlogConclusion } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiBlogConclusion = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormBlogConclusion, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiBlogConclusion.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiBlogConclusion.queryKey], isSuccess);
    },
  });
};
