import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { aiPrivacyPolicy } from "../axios/AIWriterApi";

export const useAiPrivacyPolicy = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormPrivacyPolicy, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiPrivacyPolicy.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/ai-writer/privacy-policy");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/ai-writer/privacy-policy")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
