import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { conversationApi } from "../axios/conversationApi";

export const useFetchConversationById = (
  conversationId: string,
  isEnabled: boolean
): UseQueryResult<IConversationDetail, Error> => {
  return useQuery({
    queryKey: ["id", conversationId],
    queryFn: () => conversationApi.getConversationByParams(conversationId), // Thêm conversationId vào đây
    enabled: isEnabled,
  });
};
