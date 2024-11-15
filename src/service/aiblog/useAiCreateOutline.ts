import { aiCreateOutlineBlog } from "@/service/axios/aiBlogApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

export const useAiCreateOutline = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormOutlineBlog, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiCreateOutlineBlog.create,
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([aiCreateOutlineBlog.queryKey], isSuccess);
      queryClient.invalidateQueries({
        queryKey: [aiCreateOutlineBlog.queryKey],
      });
    },
  });
};
