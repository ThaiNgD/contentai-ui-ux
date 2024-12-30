import {
    useMutation,
    UseMutationResult,
    useQueryClient,
  } from "@tanstack/react-query";
  import { toast } from "react-toastify";
  
  import { aiWriter } from "../axios/AIWriterApi";
  
  export const useSaveDocument = (): UseMutationResult<
    IResult,
    Error,
    IFormDocument,
    unknown
  > => {
    // const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ( payload ) =>
        aiWriter.save(payload),
      onSuccess: (isSuccess) => {
        if (isSuccess) {
          toast.success("Thành công");
        } else {
          return;
        }
        // queryClient.setQueryData([aiWriter.queryKey], isSuccess);
      },
    });
  };
  