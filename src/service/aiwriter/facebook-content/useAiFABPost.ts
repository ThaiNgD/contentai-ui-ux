import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiFABPost } from "../../axios/AIWriterApi";

export const useAiFABPost = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormFABPost, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiFABPost.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiFABPost.queryKey], isSuccess);
    },
  });
};
