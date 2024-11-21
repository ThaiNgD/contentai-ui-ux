import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiInstagramBio } from "../../axios/AIWriterApi";

export const useAiInstagramBio = (): UseMutationResult<
  IResult,
  Error,
  IFormInstagramBio,
  unknown
> => {
  return useMutation({
    mutationFn: aiInstagramBio.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        toast.error("Thất bại");
      }
    },
  });
};
