import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { aiWebsiteDescription } from "../axios/AIWriterApi";

export const useAiWebsiteDescription = (
  hidenToast?: boolean
): UseMutationResult<IResult, Error, IFormWebsiteDescription, unknown> => {
  const router = useRouter();
  console.log(hidenToast);
  return useMutation({
    mutationFn: aiWebsiteDescription.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/web-descriptionn");
      } else {
        if (!(location.pathname === "/home/ai-writer/web-descriptionn")) {
        }
      }
    },
  });
};
