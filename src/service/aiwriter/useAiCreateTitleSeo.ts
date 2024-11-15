import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { aiCreateTitleSeo } from "../axios/AIWriterApi";

export const useAiCreateTitleSeo = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormCreateTitleSeo, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiCreateTitleSeo.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/create-title-seo");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/ai-writer/create-title-seo")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
