import { aiCreateDetail } from "@/service/axios/aiSeoApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

export const useAiCreateDetail = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormCreateDetail, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiCreateDetail.create,
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([aiCreateDetail.queryKey], isSuccess);
      queryClient.invalidateQueries({
        queryKey: [aiCreateDetail.queryKey],
      });
    },
  });
};
