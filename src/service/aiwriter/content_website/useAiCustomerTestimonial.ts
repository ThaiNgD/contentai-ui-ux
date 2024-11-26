import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
import { aiCustomerTestimonial } from "../../axios/AIWriterApi";

export const useAiCustomerTestimonial = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormCustomerTestimonial, unknown> => {
  const queryClient = useQueryClient();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiCustomerTestimonial.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.setQueryData([aiCustomerTestimonial.queryKey], isSuccess);
    },
  });
};
