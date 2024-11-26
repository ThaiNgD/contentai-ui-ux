import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { userInfor } from "../axios/userInfor";

interface ChatListProps {
  email: string;
  name: string;
  username: string;
  images_used: number;
  max_images: number;
  max_minute: number;
  tokens_used: number;
  token_limit: number;
  option: "FREE" | "PRO" | "PREMIUM";
}
export const useFetchUserInfo = (): UseQueryResult<ChatListProps, Error> => {
  return useQuery({
    queryKey: ["user-info"],
    queryFn: () => userInfor.get(),
    enabled: true,
  });
};
