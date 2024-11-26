import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiProductDescriptionPost } from "../../axios/AIWriterApi";

export const useAiProductDescription = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormProductDescriptionPost, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiProductDescriptionPost.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiProductDescriptionPost.queryKey], isSuccess);
    },
  });
};
