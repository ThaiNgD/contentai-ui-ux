import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { conversationApi } from "../axios/conversationApi";

export const useAddConversation = (
  userId: string
): UseMutationResult<IConversationDetail, Error> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => await conversationApi.addConversation(userId), // Giả sử API có phương thức deleteConversationById
    onSuccess: () => {
      //   queryClient.setQueryData([conversationApi.queryKey], isSuccess);
      queryClient.invalidateQueries({
        queryKey: ["all-chat"], // Định nghĩa query key
      });
    },
  });
};
