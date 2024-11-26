import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiRephraseContent } from "../../axios/AIWriterApi";

export const useAiRephraseContent = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormRephraseContent, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiRephraseContent.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiRephraseContent.queryKey], isSuccess);
    },
  });
};
