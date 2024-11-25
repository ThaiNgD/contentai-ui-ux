import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiTiktokVideoIdeas } from "../../axios/AIWriterApi";
export const useAiTikTokVideoIdeas = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormTikTokVideoIdeas, unknown> => {
  console.log(hideToast);
  return useMutation({
    mutationFn: aiTiktokVideoIdeas.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiTiktokVideoIdeas.queryKey], isSuccess);
    },
  });
};
