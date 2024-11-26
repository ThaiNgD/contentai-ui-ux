import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiCreateAdsIdea } from "../../axios/AIWriterApi";

export const useAiCreateAdsIdea = (): UseMutationResult<
  IResult,
  Error,
  IFormCreateAdsIdea,
  unknown
> => {
  return useMutation({
    mutationFn: aiCreateAdsIdea.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        toast.error("Thất bại");
      }
    },
  });
};
