import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiWebsiteTitle, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";

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
