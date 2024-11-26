import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiVideoIntroScript } from "../../axios/AIWriterApi";

export const useAiIntroductrionScript = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormIntroductionVideoScript, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiVideoIntroScript.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiVideoIntroScript.queryKey], isSuccess);
    },
  });
};
