import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { console } from "inspector";
import { useRouter } from "next/router";
import { aiWebsiteOutlineMenu } from "../../axios/AIWriterApi";

export const useAIOutlineMenu = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormOutlineMenu, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiWebsiteOutlineMenu.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/outline-homepage");
      } else {
        if (!(location.pathname === "home/ai-writer/outline-homepage")) {
        }
      }
    },
  });
};
