/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";
interface ChatListProps {
  conversation: IConversationResult[];
}
export const conversationApi = {
  queryKey: "chat-box-ai/get-ai-chat-by-id",
  pathKey: "chat-box-ai/get-ai-chat-by-userId",
  getAll: async () => {
    return await http.get<any, ChatListProps>(`${conversationApi.pathKey}/1`);
  },

  //'get-ai-chat-by-userId/:userId'
  getConversationByParams: async (conversationId: string) => {
    return await http.get<any, any>(
      `${conversationApi.queryKey}/${conversationId}`
    );
  },
};
