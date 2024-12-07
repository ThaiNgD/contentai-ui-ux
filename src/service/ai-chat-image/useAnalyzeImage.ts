import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiChatImageApi } from "../axios/aiChatImageApi";
// import { queryClient } from "@/provider/TanStackProvider";

export const useAnalyzeImage = (): UseMutationResult<
  IAiVision,
  Error,
  File
> => {
  return useMutation({
    mutationFn: async (file: File) => await aiChatImageApi.analyzeImage(file),
    // onSuccess: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: [aiVisionApi.queryKey],
    //   });
    // },
    onError: (error) => {
      console.log("Upload failed:", error);
    },
  });
};
