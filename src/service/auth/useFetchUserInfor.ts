import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { userInfor } from "../axios/userInfor";

interface ChatListProps {
  conversation: IConversationResult[];
}
export const useFetchUserInfo = (): UseQueryResult<ChatListProps, Error> => {
  return useQuery({
    queryKey: ["user-info"],
    queryFn: () => userInfor.get(),
    enabled: true,
  });
};
