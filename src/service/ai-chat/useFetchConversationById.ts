import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { conversationApi } from "../axios/conversationApi";

export const useFetchConversationById = (
  chatId: string
): UseQueryResult<IConversationDetail, Error> => {
  // const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["chatDetail", chatId],
    queryFn: () => conversationApi.getConversationById(chatId),
    staleTime: 60000, // Cache dữ liệu trong 1 phút
    // refetchOnMount: false, // Không refetch khi mount lại
    // refetchOnWindowFocus: false, // Không refetch khi chuyển tab
  });
};
