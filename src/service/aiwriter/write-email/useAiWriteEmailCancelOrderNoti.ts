import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiCancelOrderEmail } from "../../axios/AIWriterApi";

export const useAiWriteEmailCancelOrderNoti = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormOrderCancellationEmail, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiCancelOrderEmail.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiCancelOrderEmail.queryKey], isSuccess);
    },
  });
};
