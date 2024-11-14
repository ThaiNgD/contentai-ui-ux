import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { aiContentBlogLongForm, IResult } from "../axios/AIWriterApi";

export const useAiContentBlogLongForm = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormContentBlogLongForm, unknown> => {
  const queryClient = useQueryClient();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiContentBlogLongForm.create,
    onSuccess: (isSuccess) => {
      console.log(isSuccess);
      queryClient.invalidateQueries({
        queryKey: ["aiContentBlogLongForm"],
      });
    },
  });
};
