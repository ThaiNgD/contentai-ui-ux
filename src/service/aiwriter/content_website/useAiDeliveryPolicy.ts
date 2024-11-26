import { aiDeliveryPolicy } from "@/service/axios/AIWriterApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiDeliveryPolicy = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormDeliveryPolicy, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiDeliveryPolicy.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiDeliveryPolicy.queryKey], isSuccess);
    },
  });
};
