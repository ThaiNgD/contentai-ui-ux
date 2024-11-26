import { queryClient } from "@/provider/TanStackProvider";
import { aiWebsiteIntroduction } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiWebsiteIntroduction = (): UseMutationResult<
  IResult,
  Error,
  IFormWebsiteIntroduction,
  unknown
> => {
  return useMutation({
    mutationFn: aiWebsiteIntroduction.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiWebsiteIntroduction.queryKey], isSuccess);
    },
  });
};
