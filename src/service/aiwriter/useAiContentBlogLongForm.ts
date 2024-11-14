import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { aiContentBlogLongForm } from "../axios/AIWriterApi";
export const useAiContentBlogLongForm = (): UseMutationResult<
  IResult,
  Error,
  IFormContentBlogLongForm,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiContentBlogLongForm.create,
    mutationKey: [aiContentBlogLongForm.queryKey],
    onSuccess: (isSuccess) => {
      console.log(isSuccess);
      queryClient.setQueryData(
        [`${aiContentBlogLongForm.queryKey}-result`],
        isSuccess
      );
      // queryClient.invalidateQueries({
      //   queryKey: [aiContentBlogLongForm.queryKey],
      // });
    },
  });
};
