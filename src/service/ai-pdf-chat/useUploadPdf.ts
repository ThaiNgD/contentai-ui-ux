import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { aiPdfChatApi } from "../axios/aiPdfChatApi";

export const useUploadPdf = (): UseMutationResult<
  IPdfChatConversation,
  Error,
  File
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (file: File) => await aiPdfChatApi.uploadPdf(file),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [aiPdfChatApi.queryKey], // Cập nhật lại dữ liệu liên quan nếu cần
      });
    },
    onError: (error) => {
      console.error("Upload failed:", error);
    },
  });
};
