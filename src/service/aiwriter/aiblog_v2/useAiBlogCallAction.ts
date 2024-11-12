import { aiBlogCallAction, IResult } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useAiBlogCallAction = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormBlogCallAction, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiBlogCallAction.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/call-to-action");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/call-to-action")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
