import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { aiPasAdertising } from "../axios/AIWriterApi";

export const useAiPasAdvertising = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormPasAdvertising, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiPasAdertising.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/pas-advertising");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/pas-advertising")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
