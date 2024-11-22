import { queryClient } from "@/provider/TanStackProvider";
import { aiMainTakingPoints } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiMainTakingpoint = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormMainTakingPoints, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiMainTakingPoints.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiMainTakingPoints.queryKey], isSuccess);
    },
  });
};
