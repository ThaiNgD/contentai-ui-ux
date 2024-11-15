import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { conversationApi } from "../axios/conversationApi";

export const useFetchConversationById = (
  conversationId: string,
  isEnabled: boolean
): UseQueryResult<IConversationResult, Error> => {
  return useQuery({
    queryKey: ["aichat", conversationId],
    queryFn: conversationApi.getConversationByParams,
    enabled: isEnabled,
  });
};
