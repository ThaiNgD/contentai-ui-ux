import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { authApi, IResultAuth } from "../axios/authApi";

export const useAuthLogin = (
  hideToast?: boolean
): UseMutationResult<IResultAuth, Error, IFormLogin, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (isLogin) => {
      if (isLogin) {
        router.push("/auth/register");
        // !hideToast && toast.success("Đăng nhập thành công");
      } else {
        if (!(location.pathname === "/auth/login")) {
          router.push("/auth/login");
        }
        // !hideToast && toast.error("Đăng nhập thất bại");
      }
    },
  });
};
