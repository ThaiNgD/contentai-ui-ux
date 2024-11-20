export {};
declare global {
  type IOptionSelectFormat = {
    readonly label: string;
    readonly value: string;
  };
  type IResult = {
    message: string;
    statusCode: string;
    active: boolean;
    result: string;
    tokenInput: string;
    tokenOutput: string;
  };
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

  type IMessage = {
    role: "user" | "assistant"; // Role of the sender (either 'user' or 'assistant')
    message: string;
    timestamp: number;
  };

  type IConversationDetail = {
    conversation: IMessage[];
  };
}
