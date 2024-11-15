import { aiAnalysezKeyword } from "@/service/axios/aiSeoApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

export const useAiAnalysezKeyword = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormAnalyzeKeyword, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiAnalysezKeyword.create,
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([aiAnalysezKeyword.queryKey], isSuccess);
      queryClient.invalidateQueries({
        queryKey: [aiAnalysezKeyword.queryKey],
      });
    },
  });
};
