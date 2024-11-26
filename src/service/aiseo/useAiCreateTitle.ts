import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiCreateTitleSeo } from "../axios/AIWriterApi";

export const useAiCreateTitle = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormCreateTitleSeo, unknown> => {
  console.log(hideToast);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: aiCreateTitleSeo.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiCreateTitleSeo.queryKey], isSuccess);
    },
  });
};
