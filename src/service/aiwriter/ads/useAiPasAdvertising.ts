import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiPasAdertising } from "../../axios/AIWriterApi";

export const useAiPasAdvertising = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormPasAdvertising, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiPasAdertising.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiPasAdertising.queryKey], isSuccess);
    },
  });
};
