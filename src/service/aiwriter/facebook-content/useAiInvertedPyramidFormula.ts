import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiInvertedPyramidFormulaPost } from "../../axios/AIWriterApi";

export const useAiInvertedPyramidFormula = (
  hidenToast?: boolean
): UseMutationResult<
  IResult,
  Error,
  IFormInvertedPyramidFormulaPost,
  unknown
> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiInvertedPyramidFormulaPost.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData(
        [aiInvertedPyramidFormulaPost.queryKey],
        isSuccess
      );
    },
  });
};
