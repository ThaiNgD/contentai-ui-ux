import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiContentBlogLongForm } from "../axios/AIWriterApi";
export const useAiContentBlogLongForm = (): UseMutationResult<
  IResult,
  Error,
  IFormContentBlogLongForm,
  unknown
> => {
  return useMutation({
    mutationFn: aiContentBlogLongForm.create,
    mutationKey: [aiContentBlogLongForm.queryKey],
    onSuccess: (isSuccess) => {
      console.log(isSuccess);
      // queryClient.setQueryData([aiContentBlogLongForm.queryKey], isSuccess);
      // queryClient.invalidateQueries({
      //   queryKey: [aiContentBlogLongForm.queryKey],
      // });
    },
  });
};
