import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiHoneyCombPost } from "../../axios/AIWriterApi";

export const useAiHoneyComp = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormHoneyCombPost, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiHoneyCombPost.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiHoneyCombPost.queryKey], isSuccess);
    },
  });
};
