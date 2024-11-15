export {};
declare global {
  type IOptionSelectFormat = {
    readonly label: string;
    readonly value: string;
  };
  type IConversationResult = {
    id: string;
    conversationName: string;
    createdAt: string;
    updatedAt: Date;
  };
}
