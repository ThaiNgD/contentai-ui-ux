import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { aiPdfChatApi } from "../axios/aiPdfChatApi";

export const useAddMessagePdfChat = (
  message: string,
  threadId: string
): UseMutationResult<IConversationDetail, Error> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () =>
      await aiPdfChatApi.addMessage({ message, threadId }), // Giả sử API có phương thức deleteConversationById
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chatDetail", threadId], // Định nghĩa query key
      });
    },
  });
};
