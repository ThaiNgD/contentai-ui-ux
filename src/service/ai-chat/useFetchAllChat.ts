import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { conversationApi } from "../axios/conversationApi";

interface ChatListProps {
  conversation: IConversationResult[];
}
export const useFetchAllChat = (): UseQueryResult<ChatListProps, Error> => {
  return useQuery({
    queryKey: ["all-chat"],
    queryFn: () => conversationApi.getAll(), // Thêm conversationId vào đây
    // enabled: isEnabled,
    enabled: true,
  });
};
