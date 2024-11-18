import { aiCreateIdeaBlog } from "@/service/axios/aiBlogApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

export const useAiCreateIdea = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormIdeaBlog, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiCreateIdeaBlog.create,
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([aiCreateIdeaBlog.queryKey], isSuccess);
      queryClient.invalidateQueries({ queryKey: [aiCreateIdeaBlog.queryKey] });
    },
  });
};
