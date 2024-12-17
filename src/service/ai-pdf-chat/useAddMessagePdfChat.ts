import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { aiPdfChatApi } from "../axios/aiPdfChatApi";

export const useAddMessagePdfChat = (
  threadId: string
): UseMutationResult<IConversationDetail, Error, { message: string }> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ message }: { message: string }) =>
      await aiPdfChatApi.addMessage({ message, threadId }), // Giả sử API có phương thức deleteConversationById
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chatDetail", threadId], // Định nghĩa query key
      });
    },
  });
};
