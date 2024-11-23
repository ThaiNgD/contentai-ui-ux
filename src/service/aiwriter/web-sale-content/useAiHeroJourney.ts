import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiHeroJourneyPost } from "../../axios/AIWriterApi";

export const useAiHeroJourney = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormHeroJourneyPost, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiHeroJourneyPost.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiHeroJourneyPost.queryKey], isSuccess);
    },
  });
};
