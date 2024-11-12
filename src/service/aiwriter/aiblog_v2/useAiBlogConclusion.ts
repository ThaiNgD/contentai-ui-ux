import { aiBlogConclusion, IResult } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useAiBlogConclusion = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormBlogConclusion, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiBlogConclusion.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/blog-conclusion");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/blog-conclusion")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
