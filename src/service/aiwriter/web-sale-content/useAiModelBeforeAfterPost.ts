import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiBeforeAterPost } from "../../axios/AIWriterApi";

export const useAiModalBeforeAfterPost = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormBeforeAfterPost, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiBeforeAterPost.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiBeforeAterPost.queryKey], isSuccess);
    },
  });
};
