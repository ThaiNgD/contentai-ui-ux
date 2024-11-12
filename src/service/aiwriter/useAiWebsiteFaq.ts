import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiWebsiteFaq, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";

export const useAiWebsiteFaq = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormWebsiteFaq, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiWebsiteFaq.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/faq");
      } else {
        if (!(location.pathname === "/home/ai-writer/faq")) {
        }
      }
    },
  });
};
