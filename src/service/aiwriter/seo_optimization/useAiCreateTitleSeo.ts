import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiCreateTitleSeo } from "../../axios/AIWriterApi";

export const useAiCreateTitleSeo = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormCreateTitleSeo, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiCreateTitleSeo.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiCreateTitleSeo.queryKey], isSuccess);
    },
  });
};
