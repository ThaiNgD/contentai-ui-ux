import { setAccessToken } from "@/config";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authApi, IResultAuth } from "../axios/authApi";

export const useAuthLogin = (
  hideToast?: boolean
): UseMutationResult<IResultAuth, Error, IFormLogin, unknown> => {
  const router = useRouter();
  const { locale } = useGetPathComponent();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (loginData) => {
      console.log(loginData);
      if (loginData) {
        setAccessToken(loginData.access_token);
        toast.success("Đăng nhập thành công");
        router.push(`/${locale}/dashboard`);
      } else {
        // if (!(location.pathname === `/${locale}/login`)) {
        //   router.push(`/${locale}/login`);
        // }
        console.log(hideToast);
        toast.error("Đăng nhập thất bại");
      }
    },
  });
};
