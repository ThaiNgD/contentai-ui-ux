import { setAccessToken, setApiKeyToken, setRefreshToken } from "@/config";
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
    onSuccess: (response) => {
      if (response) {
        setAccessToken(
          response.access_token.value,
          response.access_token.expiresIn
        );
        setRefreshToken(
          response.refresh_token.value,
          response.refresh_token.expiresIn
        );
        setApiKeyToken(
          response.api_ai_token.value,
          response.api_ai_token.expiresIn
        );
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
