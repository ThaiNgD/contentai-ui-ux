import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { documentApi } from "../axios/documentApi"
export const useGetDocumentByFolder = (
    documentId: string
): UseQueryResult<IDocument[], Error> => {

  return useQuery({
    queryKey: ["documents",documentId],
    queryFn: () => documentApi.getDocumentByFolder(documentId)
  });
};
