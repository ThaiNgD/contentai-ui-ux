import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { aiDeliveryPolicy } from "../axios/AIWriterApi";

export const useAiDeliveryPolicy = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormDeliveryPolicy, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiDeliveryPolicy.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/delivery-policy");
        // hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/delivery-policy")) {
          // hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
