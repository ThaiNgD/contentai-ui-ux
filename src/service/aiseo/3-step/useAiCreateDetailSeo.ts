import { aiCreateDetail } from "@/service/axios/aiSeoApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiCreateDetailSEO = (): UseMutationResult<
  IResult,
  Error,
  IFormCreateDetail,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiCreateDetail.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiCreateDetail.queryKey], isSuccess);
    },
  });
};
