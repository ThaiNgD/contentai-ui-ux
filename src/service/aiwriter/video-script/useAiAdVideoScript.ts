import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiVideoAdScript } from "../../axios/AIWriterApi";

export const useAiAdVideoScript = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormVideoAdScript, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiVideoAdScript.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiVideoAdScript.queryKey], isSuccess);
    },
  });
};
