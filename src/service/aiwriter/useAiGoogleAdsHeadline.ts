import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { aiGoogleAdsHeadline } from "../axios/AIWriterApi";

export const useAiGoogleAdsHeadline = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormGoogleAdsHeading, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiGoogleAdsHeadline.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/google-ad-title");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/google-ad-title")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
