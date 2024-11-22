import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiMetaDescriptionSeo } from "../../axios/AIWriterApi";

export const useAiMetaDescriptionSeo = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormMetaDescriptionSeo, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiMetaDescriptionSeo.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiMetaDescriptionSeo.queryKey], isSuccess);
    },
  });
};
