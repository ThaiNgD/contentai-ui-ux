import {
    useMutation,
    UseMutationResult,
  } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { documentApi } from "../axios/documentApi";
import { queryClient } from "@/provider/TanStackProvider";
  
  export const useDeleteDocument = (): UseMutationResult<
    IResult,
    Error,
    string,
    unknown
  > => {
    return useMutation({
      mutationFn: ( payload ) =>
        documentApi.deleteDocument(payload),
      onSuccess: (isSuccess) => {
        if (isSuccess) {
          toast.success("Thành công");
          queryClient.invalidateQueries({
            queryKey: ["all-documents"], // Định nghĩa query key
          });
        } else {
          return;
        }
      },
    });
  };
  