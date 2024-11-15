import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { aiContentStrategyApi } from "@/service/axios/AIWriterApi";

export const useAiContentStrategy = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormContentStrategy, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiContentStrategyApi.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/ai-writer/content-strategy");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/ai-writer/content-strategy")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
