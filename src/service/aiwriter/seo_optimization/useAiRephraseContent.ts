import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { aiRephraseContent } from "../../axios/AIWriterApi";

export const useAiRephraseContent = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormRephraseContent, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiRephraseContent.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/ai-writer/rephrase-content");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/ai-writer/rephrase-content")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
