import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
import { folderApi } from "../axios/folderApi";

export const useCreateFolder = (): UseMutationResult<
  IResult,
  Error,
  IFormFolder,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: folderApi.createFolder,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        toast.success("Thành công");
      } else {
        return;
      }
      queryClient.invalidateQueries({
        queryKey: ["all-folder"]
      })
      queryClient.setQueryData([folderApi.queryKey], isSuccess);
    },
  });
};
