import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { console } from "inspector";
import { useRouter } from "next/router";
import { aiCustomerTestimonial } from "../../axios/AIWriterApi";

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
