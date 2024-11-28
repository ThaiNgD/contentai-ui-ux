import { useMutation, useQueryClient } from "@tanstack/react-query";
import { conversationApi } from "../axios/conversationApi";

export const useEditConversationName = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: {
      threadId: string;
      conversationName: string;
    }) => {
      const { threadId, conversationName } = variables;
      return await conversationApi.editConversationName(
        threadId,
        conversationName
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all-chat"], // Định nghĩa query key
      });
    },
  });
};
