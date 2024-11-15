/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";
interface ChatListProps {
  conversation: IConversationResult[];
}
export const conversationApi = {
  queryKey: "conversayion",
  pathKey: "chat-box-ai/get-ai-chat-by-userId",
  getAll: async () => {
    return await http.get<any, ChatListProps>(`${conversationApi.pathKey}/1`);
  },

  getConversationByParams: async () => {
    return await http.get<any, any>(`${conversationApi.queryKey}/logout`);
  },
};
