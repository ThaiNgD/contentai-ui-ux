import { aiContentAnalysis } from "@/service/axios/aiBlogApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

export const useAiContentAnalysis = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormContentAnalys, unknown> => {
  console.log(hidenToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiContentAnalysis.create,
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([aiContentAnalysis.queryKey], isSuccess);
      queryClient.invalidateQueries({ queryKey: [aiContentAnalysis.queryKey] });
    },
  });
};
