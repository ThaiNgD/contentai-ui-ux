import { aiBlogListicle, IResult } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useAiBlogListicle = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormBlogListicle, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiBlogListicle.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/listicle-writing");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/listicle-writing")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
