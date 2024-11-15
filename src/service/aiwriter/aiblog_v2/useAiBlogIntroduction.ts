import { aiBlogIntroduction } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useAiBlogIntroduction = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormBlogIntroduction, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiBlogIntroduction.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/blog-introduction");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/blog-introduction")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
