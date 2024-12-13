import { aiCreateTitle } from "@/service/axios/aiSeoApi";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAiCreateTitleSEO = (): UseMutationResult<
  IResult,
  Error,
  IFormCreateTitle,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiCreateTitle.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiCreateTitle.queryKey], isSuccess);
    },
  });
};
