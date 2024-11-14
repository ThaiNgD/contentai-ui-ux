import { aiMainTakingPoints } from "@/service/axios/AIWriterApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useAiMainTakingpoint = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormMainTakingPoints, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiMainTakingPoints.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/main-talking-points");
        //!hideToast && toast.success("Thành công");
      } else {
        if (!(location.pathname === "/home/ai-writer/main-talking-points")) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};
