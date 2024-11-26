import { queryClient } from "@/provider/TanStackProvider";
import { aiCreateTitleSeo, aiFaqSeo } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiFaqSeo = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormFaqSeo, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiFaqSeo.create,
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
