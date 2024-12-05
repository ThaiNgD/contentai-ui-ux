/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export const document = {
  pathKey: "document",
  queryKey: "document",

  getAllDocument: async () => {
    return await http.get<any, any>(`${document.pathKey}/document_by_user`);
  },

  getDocumentById: async (documentId: string) => {
    return await http.get<any, any>(
      `${document.pathKey}/document_by_id/${documentId}`
    );
  },

  getDocumentByFolder: async (folderId: string) => {
    return await http.get<any, any>(
      `${document.pathKey}/document_by_folder/${folderId}`
    );
  },

  getFavouriteDocuments: async () => {
    return await http.get<any, any>(`${document.pathKey}/favourite_documents`);
  },

  saveDocument: async (payload: IFormDocument, aiModelId: string) => {
    return await http.post<any, any>(
      `${document.pathKey}/save_document/${aiModelId}
`,
      payload
    );
  },

  deleteDocument: async (documentId: string) => {
    return await http.post<any, any>(
      `${document.pathKey}/delete_document/${documentId}`
    );
  },
};
