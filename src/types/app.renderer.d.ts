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
    threadId: string;
    conversation: IMessage[];
  };
  type IUserProfile = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    email: string;
    password_hash: string;
    role: string;
    authToken: string;
    tokenType: string;
    expiresIn: number;
    expiresAt: number;
    userId: string;
    isVinhVien: boolean;
    name: string;
    max_words: number;
    max_images: number;
    max_minute: number;
    minute_used: number;
    image_used: number;
    words_used: number;
  };
  type IUserResponse = {
    message: string;
    user: IUserProfile;
  };
}
