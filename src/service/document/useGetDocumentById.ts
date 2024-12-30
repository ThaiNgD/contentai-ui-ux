import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { documentApi } from "../axios/documentApi"
export const useGetDocumentById = (
    documentId: string
): UseQueryResult<IDocument, Error> => {

  return useQuery({
    queryKey: ["documents",documentId],
    queryFn: () => documentApi.getDocumentById(documentId)
  });
};
