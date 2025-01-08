export {};

declare global {
  type IFormDocument = {
    content: string;
    folderId: string;
    aiModelName: string;
    document_name: string;
  };

  type IFormFavourite = {
    favourite: boolean;
  };

  type IFormFolderForDocuments = {
    folderId: string;
  };
}
