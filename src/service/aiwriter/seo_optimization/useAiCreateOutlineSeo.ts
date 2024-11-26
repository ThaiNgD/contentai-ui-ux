import { queryClient } from "@/provider/TanStackProvider";
import { aiOutLineSeo } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiCreateOutlineSeo = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormOutLineSeo, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiOutLineSeo.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiOutLineSeo.queryKey], isSuccess);
    },
  });
};
