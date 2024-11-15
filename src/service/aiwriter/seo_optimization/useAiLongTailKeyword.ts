import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { aiLongTailKeyword } from "@/service/axios/AIWriterApi";

export const useAiLongTailKeyword = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormLongTailKeywords, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiLongTailKeyword.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/long-tail-keyword");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/long-tail-keyword")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
