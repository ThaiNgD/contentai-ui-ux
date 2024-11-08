import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiContentBlogLongForm, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";

export const useAiContentBlogLongForm = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormContentBlogLongForm, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiContentBlogLongForm.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/ai-writer/content-blog-long-form");
      } else {
        if (!(location.pathname === "/home/ai-writer/content-blog-long-form")) {
        }
      }
    },
  });
};
