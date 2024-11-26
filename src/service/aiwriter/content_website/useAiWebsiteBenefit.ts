import { queryClient } from "@/provider/TanStackProvider";
import { aiWebsiteBenefits } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiWebsiteBenefits = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormWebsiteBenefits, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiWebsiteBenefits.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiWebsiteBenefits.queryKey], isSuccess);
    },
  });
};
