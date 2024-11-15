import { aiCreateTitle } from "@/service/axios/aiSeoApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

export const useAiCreateTitle = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormCreateTitle, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiCreateTitle.create,
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([aiCreateTitle.queryKey], isSuccess);
      queryClient.invalidateQueries({ queryKey: [aiCreateTitle.queryKey] });
    },
  });
};
