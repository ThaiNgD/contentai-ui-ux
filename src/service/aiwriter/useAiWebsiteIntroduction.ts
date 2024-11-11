import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiWebsiteIntroduction, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";
import { console } from "inspector";

export const useAiWebsiteIntroduction = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormWebsiteIntroduction, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiWebsiteIntroduction.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/web-introduction");
      } else {
        if (!(location.pathname === "/home/ai-writer/web-introduction")) {
        }
      }
    },
  });
};
