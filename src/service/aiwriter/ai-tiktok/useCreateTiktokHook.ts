import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiTikTokVideoHook } from "../../axios/AIWriterApi";

export const useCreateTiktokHook = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormTikTokVideoHook, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiTikTokVideoHook.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiTikTokVideoHook.queryKey], isSuccess);
    },
  });
};
