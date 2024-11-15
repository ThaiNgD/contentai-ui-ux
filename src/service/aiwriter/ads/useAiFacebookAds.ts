import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { console } from "inspector";
import { useRouter } from "next/router";
import { aiFacebookAds } from "../../axios/AIWriterApi";

export const useAiFacebookAds = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormFacebookAds, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiFacebookAds.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/facebook-ads");
      } else {
        if (!(location.pathname === "/home/ai-writer/facebook-ads")) {
        }
      }
    },
  });
};
