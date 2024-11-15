import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { aiContentBlogLongForm } from "../axios/AIWriterApi";

export const useAiContentBlogLongForm = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormContentBlogLongForm, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiContentBlogLongForm.create,
    mutationKey: [aiContentBlogLongForm.queryKey],
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([aiContentBlogLongForm.queryKey], isSuccess);
      queryClient.invalidateQueries({
        queryKey: [aiContentBlogLongForm.queryKey],
      });
    },
  });
};
