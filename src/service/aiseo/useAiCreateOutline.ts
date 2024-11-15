import { aiCreateOutline } from "@/service/axios/aiSeoApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

export const useAiCreateOutline = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormCreateOutline, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiCreateOutline.create,
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([aiCreateOutline.queryKey], isSuccess);
      queryClient.invalidateQueries({
        queryKey: [aiCreateOutline.queryKey],
      });
    },
  });
};
