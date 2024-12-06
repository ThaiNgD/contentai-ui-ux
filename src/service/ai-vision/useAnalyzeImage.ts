import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiVisionApi } from "../axios/aiVisionApi";
// import { queryClient } from "@/provider/TanStackProvider";

export const useAnalyzeImage = (): UseMutationResult<
  IAiVision,
  Error,
  File
> => {
  return useMutation({
    mutationFn: async (file: File) => await aiVisionApi.analyzeImage(file),
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
