import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiEmailWriting } from "../../axios/AIWriterApi";

export const useAiDraftEmail = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormEmailWriting, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiEmailWriting.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiEmailWriting.queryKey], isSuccess);
    },
  });
};
