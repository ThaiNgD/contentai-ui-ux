import { aiWebsiteBenefits } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useAiWebsiteBenefits = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormWebsiteBenefits, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiWebsiteBenefits.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/web-benefit");
      } else {
        if (!(location.pathname === "/home/ai-writer/web-benefit")) {
        }
      }
    },
  });
};
