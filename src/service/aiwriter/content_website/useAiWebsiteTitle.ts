import { queryClient } from "@/provider/TanStackProvider";
import { aiWebsiteTitle } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiWebsiteTitle = (): UseMutationResult<
  IResult,
  Error,
  IFormWebsiteTitle,
  unknown
> => {
  return useMutation({
    mutationFn: aiWebsiteTitle.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiWebsiteTitle.queryKey], isSuccess);
    },
  });
};
