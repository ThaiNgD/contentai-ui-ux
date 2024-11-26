import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiLandingPageOutline } from "../../axios/AIWriterApi";

export const useAiLandingPageOutline = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormLandingPageOutLine, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiLandingPageOutline.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiLandingPageOutline.queryKey], isSuccess);
    },
  });
};
