import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiTikTokVideoScript } from "../../axios/AIWriterApi";

export const useScriptCreation = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormTikTokVideoScript, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiTikTokVideoScript.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiTikTokVideoScript.queryKey], isSuccess);
    },
  });
};
