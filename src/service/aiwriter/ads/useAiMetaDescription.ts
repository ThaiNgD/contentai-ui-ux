import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { aiMetaDescription } from "../../axios/AIWriterApi";

export const useMetaDescription = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormMetaDescription, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiMetaDescription.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/ai-writer/meta-description");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/ai-writer/meta-description")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
