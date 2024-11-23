import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiBuyerPersonas } from "../../axios/AIWriterApi";

export const useAiCreateCustomerPortrait = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormCustomerPortrait, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiBuyerPersonas.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiBuyerPersonas.queryKey], isSuccess);
    },
  });
};
