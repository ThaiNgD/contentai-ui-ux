import { aiCreateDetailBlog } from "@/service/axios/aiBlogApi";
import {
  UseBaseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export const useAiCreateDetail = (
  hideToast?: boolean
): UseBaseMutationResult<IResult, Error, IFormDetailBlog, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiCreateDetailBlog.create,
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([aiCreateDetailBlog.queryKey], isSuccess);
      queryClient.invalidateQueries({
        queryKey: [aiCreateDetailBlog.queryKey],
      });
    },

    // Additional mutation options here...
  });
};
