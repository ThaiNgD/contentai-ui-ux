import {
  API_AI_TOKEN,
  AUTH_TOKEN,
  REFRESH_TOKEN,
} from "@/service/axios/httpClient";
import Cookies from "js-cookie";

const setToken = (data: string, expireIn: number, key: string) => {
  Cookies.set(key, data ?? "", {
    secure: false,
    // path: "/vi",
    expires: new Date(Date.now() + expireIn),
    path: "/",
  });
};

// Update Start: Thêm xử lý refresh token
export const setRefreshToken = (data: string, expireIn: number) =>
  setToken(data, expireIn, REFRESH_TOKEN);
export const setAccessToken = (data: string, expireIn: number) =>
  setToken(data, expireIn, AUTH_TOKEN);

export const setApiKeyToken = (data: string, expireIn: number) =>
  setToken(data, expireIn, API_AI_TOKEN);

export const removeAccessToken = () =>
  Cookies.remove(AUTH_TOKEN, {
    secure: false,
    path: "/",
  });

export const removeRefreshToken = () =>
  Cookies.remove(REFRESH_TOKEN, {
    secure: false,
    path: "/",
  });

export const removeAuthToken = () => {
  removeAccessToken();
  removeRefreshToken(); // Update: Xóa luôn refresh token khi logout
};

export const getRefreshToken = () => Cookies.get(REFRESH_TOKEN);

export const getAccessToken = () => Cookies.get(AUTH_TOKEN);

export const getApiAiToken = () => Cookies.get(API_AI_TOKEN);
