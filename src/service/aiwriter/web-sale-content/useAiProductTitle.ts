import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiProductTitle } from "../../axios/AIWriterApi";

export const useAiProductTitle = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormProductTitle, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiProductTitle.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiProductTitle.queryKey], isSuccess);
    },
  });
};
