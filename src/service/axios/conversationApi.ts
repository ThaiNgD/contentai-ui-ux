/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";
interface ChatListProps {
  conversation: IConversationResult[];
}

export const conversationApi = {
  queryKey: "all-chat",
  pathKey: "chat-box-ai",
  getAll: async () => {
    return await http.get<any, ChatListProps>(
      `${conversationApi.pathKey}/get-ai-chat-by-userId/1`
    );
  },

  //'get-ai-chat-by-userId/:userId'
  getConversationById: async (conversationId: string) => {
    return await http.get<any, any>(
      `${conversationApi.pathKey}/get-ai-chat-by-id/${conversationId}`
    );
  },

  deleteConversationById: async (conversationId: string) => {
    return await http.delete<any, any>(
      `${conversationApi.pathKey}/delete-ai-chat/${conversationId}`
    );
  },

  addMessage: async (payload: IFormAddMessage) => {
    return await http.post<any, any>(
      `${conversationApi.pathKey}/message`,
      payload
    );
  },

  addConversation: async (userId: number) => {
    return await http.post<any, any>(
      `${conversationApi.pathKey}/add-new-ai-chat`,
      { userId }
    );
  },
};
