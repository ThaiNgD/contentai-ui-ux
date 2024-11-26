import { queryClient } from "@/provider/TanStackProvider";
import { aiBlogListicle } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiBlogListicle = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormBlogListicle, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiBlogListicle.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiBlogListicle.queryKey], isSuccess);
    },
  });
};
