import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { aiRewriter } from "../axios/aiRewriterApi";

export const useRewriter = (): UseMutationResult<
  IResult,
  Error,
  IFormAiReWriter
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: IFormAiReWriter) =>
      await aiRewriter.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [aiRewriter.queryKey], // Cập nhật lại dữ liệu liên quan nếu cần
      });
    },
    onError: (error) => {
      console.error("Transcribe failed:", error);
    },
  });
};
