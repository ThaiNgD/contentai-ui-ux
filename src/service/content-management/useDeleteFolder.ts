import {
    useMutation,
    UseMutationResult,
  } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { queryClient } from "@/provider/TanStackProvider";
import { folderApi } from "../axios/folderApi";
  
  export const useDeleteFolder = (): UseMutationResult<
    IResult,
    Error,
    string,
    unknown
  > => {
    return useMutation({
      mutationFn: ( payload ) =>
        folderApi.deleteFolder(payload),
      onSuccess: (isSuccess) => {
        if (isSuccess) {
          toast.success("Thành công");
          queryClient.invalidateQueries({
            queryKey: ["all-folder"],
          });
        } else {
          return;
        }
      },
    });
  };
  