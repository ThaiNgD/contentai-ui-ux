import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { aiSpeechToTextApi } from "../axios/aiSpeechToTextApi";

export const useTranscribeAudio = (): UseMutationResult<
  ISpeechToText,
  Error,
  File
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (file: File) =>
      await aiSpeechToTextApi.transcribeAudio(file),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [aiSpeechToTextApi.queryKey], // Cập nhật lại dữ liệu liên quan nếu cần
      });
    },
    onError: (error) => {
      console.error("Transcribe failed:", error);
    },
  });
};
