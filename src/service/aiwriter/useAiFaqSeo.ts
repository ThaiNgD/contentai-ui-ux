import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiFaqSeo, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";

export const useAiFaqSeo = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormFaqSeo, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiFaqSeo.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/ai-writer/faq-seo");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/ai-writer/faq-seo")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
