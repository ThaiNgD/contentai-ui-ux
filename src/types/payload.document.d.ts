export {};

declare global {
  type IFormDocument = {
    content: string;
    userId: string;
    folderId: string;
    aiModelId: string;
  };
}
