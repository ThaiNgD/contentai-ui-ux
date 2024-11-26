import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiSalesPitch } from "../../axios/AIWriterApi";

export const useAiSalePitch = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormSalesPitch, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiSalesPitch.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiSalesPitch.queryKey], isSuccess);
    },
  });
};
