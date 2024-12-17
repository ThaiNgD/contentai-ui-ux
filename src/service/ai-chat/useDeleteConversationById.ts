import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { conversationApi } from "../axios/conversationApi";

export const useDeleteConversationById = (
  chatId: string
): UseMutationResult<IConversationDetail, Error> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () =>
      await conversationApi.deleteConversationById(chatId), // Giả sử API có phương thức deleteConversationById
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([conversationApi.queryKey], isSuccess);
      queryClient.invalidateQueries({
        queryKey: [conversationApi.queryKey], // Định nghĩa query key
      });
    },
  });
};
