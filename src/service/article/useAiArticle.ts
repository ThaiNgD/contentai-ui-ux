import { aiArticle } from "@/service/axios/aiArticleApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

export const useAiArticle = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormAiArticle, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiArticle.create,
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([aiArticle.queryKey], isSuccess);
      queryClient.invalidateQueries({
        queryKey: [aiArticle.queryKey],
      });
    },
  });
};
