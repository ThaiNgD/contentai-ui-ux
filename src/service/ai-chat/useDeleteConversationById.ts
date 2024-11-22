import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { conversationApi } from "../axios/conversationApi";

export const useDeleteConversationById = (
  chatId: string,
  onSuccess?: () => void, // Optional callback for success
  onError?: (error: Error) => void // Optional callback for error
): UseMutationResult<IConversationDetail, Error> => {
  return useMutation({
    mutationFn: () => conversationApi.deleteConversationById(chatId), // Giả sử API có phương thức deleteConversationById
    onSuccess: () => {
      // Xử lý sau khi thành công (ví dụ, gọi lại callback onSuccess)
      if (onSuccess) onSuccess();
    },
    onError: (error: Error) => {
      // Xử lý lỗi nếu có (ví dụ, gọi lại callback onError)
      if (onError) onError(error);
    },
  });
};
