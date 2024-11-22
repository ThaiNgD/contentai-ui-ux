import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiEmailSubject } from "../../axios/AIWriterApi";

export const useAiWriteEmailTitle = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormEmailSubject, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiEmailSubject.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiEmailSubject.queryKey], isSuccess);
    },
  });
};
