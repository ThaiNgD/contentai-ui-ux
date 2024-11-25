import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { userInfor } from "../axios/userInfor";

export const useUserInfor = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IUserInforForm, unknown> => {
  console.log(hideToast);
  // Your implementation here
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userInfor.get,
    onSuccess: (isSuccess) => {
      queryClient.setQueryData([userInfor.queryKey], isSuccess);
      queryClient.invalidateQueries({ queryKey: [userInfor.queryKey] });
    },
  });
};
