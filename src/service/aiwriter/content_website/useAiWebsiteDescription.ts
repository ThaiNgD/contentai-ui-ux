import { queryClient } from "@/provider/TanStackProvider";
import { aiWebsiteDescription } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiWebsiteDescription = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormWebsiteDescription, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiWebsiteDescription.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiWebsiteDescription.queryKey], isSuccess);
    },
  });
};
