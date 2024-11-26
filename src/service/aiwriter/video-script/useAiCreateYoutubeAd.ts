import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiYoutubeVideoDescription } from "../../axios/AIWriterApi";

export const useAiCreateYoutubeAd = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormYoutubeVideoDescription, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiYoutubeVideoDescription.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiYoutubeVideoDescription.queryKey], isSuccess);
    },
  });
};
