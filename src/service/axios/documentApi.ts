/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export const documentApi = {
  pathKey: "document",
  queryKey: "document",

  getAllDocument: async () => {
    return await http.get<any, any>(`${documentApi.pathKey}/document-by-user/1`);
  },

  getDocumentById: async (documentId: string) => {
    return await http.get<any, any>(
      `${documentApi.pathKey}/document_by_id/${documentId}`
    );
  },

  getDocumentByFolder: async (folderId: string) => {
    return await http.get<any, any>(
      `${documentApi.pathKey}/document_by_folder/${folderId}`
    );
  },

  getFavouriteDocuments: async () => {
    return await http.get<any, any>(`${documentApi.pathKey}/favourite_documents`);
  },

  updateFavourite: async (payload: IFormFavourite, documentId: string) => {
    return await http.post<any, any>(
      `${documentApi.pathKey}/update_favourite_document/${documentId}`,
      payload
    );
  },

  updateFolderForDocumnet: async (
    payload: IFormFolderForDocuments,
    documentId: string
  ) => {
    return await http.post<any, any>(
      `${documentApi.pathKey}/update_folder_document/${documentId}`,
      payload
    );
  },

  // saveDocument: async (payload: IFormDocument) => {
  //   return await http.post<any, any>(
  //     `${documentApi.pathKey}/save_document`,
  //     payload
  //   );
  // },

  deleteDocument: async (documentId: string) => {
    return await http.delete<any, any>(
      `${documentApi.pathKey}/delete_document/${documentId}`
    );
  },
};
