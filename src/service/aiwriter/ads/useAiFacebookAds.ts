import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiFacebookAds } from "../../axios/AIWriterApi";

export const useAiFacebookAds = (): UseMutationResult<
  IResult,
  Error,
  IFormFacebookAds,
  unknown
> => {
  return useMutation({
    mutationFn: aiFacebookAds.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        toast.error("Thất bại");
      }
    },
  });
};
