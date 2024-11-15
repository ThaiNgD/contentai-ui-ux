import { aiSeoOptimize } from "@/service/axios/aiBlogApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

export const useAiSeoOptimize = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormSeoOptimize, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiSeoOptimize.create,
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([aiSeoOptimize.queryKey], isSuccess);
      queryClient.invalidateQueries({ queryKey: [aiSeoOptimize.queryKey] });
    },
  });
};
