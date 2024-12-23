import { aiCreateOutline } from "@/service/axios/aiSeoApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiCreateOutlineSEO = (): UseMutationResult<
  IResult,
  Error,
  IFormCreateOutline,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiCreateOutline.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiCreateOutline.queryKey], isSuccess);
    },
  });
};
