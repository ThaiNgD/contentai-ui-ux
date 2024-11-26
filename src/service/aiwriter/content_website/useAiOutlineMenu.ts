import { queryClient } from "@/provider/TanStackProvider";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiWebsiteOutlineMenu } from "../../axios/AIWriterApi";

export const useAiOutlineMenu = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormOutlineMenu, unknown> => {
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiWebsiteOutlineMenu.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiWebsiteOutlineMenu.queryKey], isSuccess);
    },
  });
};
