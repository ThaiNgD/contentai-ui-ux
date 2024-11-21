import { aiMetaTitle } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useAiMetaTitle = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormMetaTitles, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiMetaTitle.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/ai-writer/meta-titles");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/ai-writer/meta-titles")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
