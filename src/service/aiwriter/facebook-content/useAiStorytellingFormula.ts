import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiStoryTellingPost } from "../../axios/AIWriterApi";

export const useAiStorytellingFormula = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormStoryTellingPost, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiStoryTellingPost.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiStoryTellingPost.queryKey], isSuccess);
    },
  });
};
