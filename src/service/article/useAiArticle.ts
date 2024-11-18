import { aiArticle } from "@/service/axios/aiArticleApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

export const useAiArticle = (): UseMutationResult<
  IResult,
  Error,
  IFormAiArticle,
  unknown
> => {
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
