import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { documentApi } from "../axios/documentApi"
export const useGetAllDocument = (
): UseQueryResult<IGetAllDocumentsResponse, Error> => {

  return useQuery({
    queryKey: ["all-documents"],
    queryFn: () => documentApi.getAllDocument()

  });
};
