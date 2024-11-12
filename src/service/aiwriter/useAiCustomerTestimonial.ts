import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiCustomerTestimonial, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";
import { console } from "inspector";

export const useAiCustomerTestimonial = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormCustomerTestimonial, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiCustomerTestimonial.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/customer-testimonials");
      } else {
        if (!(location.pathname === "/home/ai-writer/customer-testimonials")) {
        }
      }
    },
  });
};
