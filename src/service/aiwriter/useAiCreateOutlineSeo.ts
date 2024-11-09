import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiOutLineSeo, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";

export const useAiCreateOutlineSeo = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormOutLineSeo, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiOutLineSeo.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/ai-writer/create-outline-seo");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/ai-writer/create-outline-seo")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
