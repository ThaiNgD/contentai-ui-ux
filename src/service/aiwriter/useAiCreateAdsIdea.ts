import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiCreateAdsIdea, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";

export const useAiCreateAdsIdea = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormCreateAdsIdea, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiCreateAdsIdea.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/ad-ideas");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/ad-ideas")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
