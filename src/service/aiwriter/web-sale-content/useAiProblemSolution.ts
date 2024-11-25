import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiProblemSolutionPost } from "../../axios/AIWriterApi";

export const useAiProblemSolution = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormProblemSolutionPost, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiProblemSolutionPost.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiProblemSolutionPost.queryKey], isSuccess);
    },
  });
};
