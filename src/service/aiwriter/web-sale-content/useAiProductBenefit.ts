import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiProductBenefitsPost } from "../../axios/AIWriterApi";

export const useAiProductBenefit = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormProductBenefitsPost, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiProductBenefitsPost.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiProductBenefitsPost.queryKey], isSuccess);
    },
  });
};
