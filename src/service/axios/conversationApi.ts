/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";
interface ChatListProps {
  conversation: IConversationResult[];
}
export const conversationApi = {
  queryKey: "chat-box-ai/get-ai-chat-by-id",
  pathKey: "chat-box-ai/get-ai-chat-by-userId",
  deleteQueryKey: "chat-box-ai/delete-ai-chat",
  getAll: async () => {
    return await http.get<any, ChatListProps>(`${conversationApi.pathKey}/5`);
  },

  //'get-ai-chat-by-userId/:userId'
  getConversationByParams: async (conversationId: string) => {
    return await http.get<any, any>(
      `${conversationApi.queryKey}/${conversationId}`
    );
  },

  deleteConversationById: async (conversationId: string) => {
    return await http.delete<any, any>(
      `${conversationApi.deleteQueryKey}/${conversationId}`
    );
  },
};
