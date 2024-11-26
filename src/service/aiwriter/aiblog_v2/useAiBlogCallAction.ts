import { queryClient } from "@/provider/TanStackProvider";
import { aiBlogCallAction } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiBlogCallAction = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormBlogCallAction, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiBlogCallAction.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiBlogCallAction.queryKey], isSuccess);
    },
    onError: () => {},
  });
};
