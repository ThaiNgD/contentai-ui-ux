import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { conversationApi } from "../axios/conversationApi";

export const useFetchConversationById = (
  chatId: string,
  isEnabled: boolean = true
): UseQueryResult<IConversationDetail, Error> => {
  return useQuery({
    queryKey: ["chat", chatId],
    queryFn: () => conversationApi.getConversationByParams(chatId), // Thêm conversationId vào đây
    enabled: isEnabled,
  });
};
