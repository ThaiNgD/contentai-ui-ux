import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { authApi } from "../axios/authApi";

export const useGetProfile = (
  isEnabled: boolean = false
): UseQueryResult<IUserProfile[], Error> => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => await authApi.getProfile(),
    enabled: isEnabled,
  });
};
