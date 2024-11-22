import { aiWebsiteFaq } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

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
