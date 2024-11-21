import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { console } from "inspector";
import { useRouter } from "next/navigation";
import { aiWebsiteSubHeader } from "../../axios/AIWriterApi";

export const useAiWebsiteSubHeader = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormWebsiteSubHeader, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiWebsiteSubHeader.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/website-subtitle");
      } else {
        if (!(location.pathname === "/home/ai-writer/website-subtitle")) {
        }
      }
    },
  });
};
