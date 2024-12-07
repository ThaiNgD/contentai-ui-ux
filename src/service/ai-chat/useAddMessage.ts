import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { conversationApi } from "../axios/conversationApi";

export const useAddMessage = (
  threadId: string
): UseMutationResult<IConversationDetail, Error, { message: string }> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      message,
    }: {
      message: string;
    }): Promise<IConversationDetail> =>
      await conversationApi.addMessage({ message, threadId }), // Giả sử API có phương thức deleteConversationById
    onSuccess: () => {
      // queryClient.setQueryData([conversationApi.queryKey], isSuccess);
      queryClient.invalidateQueries({
        queryKey: ["chatDetail", threadId], // Định nghĩa query key
      });
    },
  });
};
