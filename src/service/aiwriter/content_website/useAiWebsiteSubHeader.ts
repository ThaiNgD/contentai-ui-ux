import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiWebsiteSubHeader } from "../../axios/AIWriterApi";

export const useAiWebsiteSubHeader = (): UseMutationResult<
  IResult,
  Error,
  IFormWebsiteSubHeader,
  unknown
> => {
  return useMutation({
    mutationFn: aiWebsiteSubHeader.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiWebsiteSubHeader.queryKey], isSuccess);
    },
  });
};
