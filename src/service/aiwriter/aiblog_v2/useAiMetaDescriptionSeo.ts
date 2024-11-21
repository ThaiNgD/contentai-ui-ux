import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { aiMetaDescriptionSeo } from "../../axios/AIWriterApi";

export const useAiMetaDescriptionSeo = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormMetaDescriptionSeo, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiMetaDescriptionSeo.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/meta-description-seo");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/meta-description-seo")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
