import { AUTH_TOKEN } from "@/service/axios/httpClient";
import Cookies from "js-cookie";
const setToken = (data: string, key: string) => {
  Cookies.set(key, data ?? "", {
    secure: false,
    path: "/",
  });
};

// set auth cookie token
export const setAccessToken = (data: string) => setToken(data, AUTH_TOKEN);

// remove cookie auth
export const removeAccessToken = () =>
  Cookies.remove(AUTH_TOKEN, {
    secure: false,
  });

export const removeAuthToken = () => {
  removeAccessToken();
};

// get cookie
export const getAccessToken = () => Cookies.get(AUTH_TOKEN);
