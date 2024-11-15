import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { aiWebsiteTitle } from "@/service/axios/AIWriterApi";

export const useAiWebsiteTitle = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormWebsiteTitle, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiWebsiteTitle.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/website-title");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/website-title")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
