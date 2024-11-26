import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiThankYouEmail } from "../../axios/AIWriterApi";

export const useAiThankYouLetter = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormThankYouLetter, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiThankYouEmail.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiThankYouEmail.queryKey], isSuccess);
    },
  });
};
