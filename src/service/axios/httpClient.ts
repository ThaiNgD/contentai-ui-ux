import {
  getAccessToken,
  getRefreshToken,
  removeAuthToken,
  routerPath,
  setAccessToken,
} from "@/config";
import { joinPathParent } from "@/helper/function";
import Axios from "axios";
// import { toast } from "react-toastify";

export const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN || "MKTtoken";
export const REFRESH_TOKEN =
  process.env.NEXT_PUBLIC_REFRESH_TOKEN || "MKTrefresh"; // Update Start: Thêm key refresh token
export const BASE_URL =
  process.env.NEXT_PUBLIC_URL || "https://content-ai-c4rx.onrender.com";

const axiosClient = Axios.create({
  withCredentials: true,
  baseURL: joinPathParent(BASE_URL, "/api/v1").slice(1),
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  async function (config) {
    const mktToken = getAccessToken();
    if (mktToken) {
      config.headers.Authorization = `Bearer ${mktToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const redirectLogin = () => {
  removeAuthToken();
  location.href = joinPathParent(routerPath.login);
};

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    const originalRequest = error.config;
    const status = error?.response?.status;
    const message = error?.response?.data?.message ?? "";
    const isPathLogout = originalRequest?.url?.startsWith("vi/logout");
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = getRefreshToken(); // Update Start: Lấy refresh token
      if (refreshToken) {
        try {
          const { accessToken } = await Axios.post(
            `${BASE_URL}/auth/refresh`,
            null,
            {
              headers: { Authorization: `Bearer ${refreshToken}` },
            }
          ).then((res) => res.data);

          setAccessToken(accessToken.value, accessToken.expireIn); // Lưu access token mới
          originalRequest.headers.Authorization = `Bearer ${accessToken.value}`;
          return axiosClient(originalRequest);
        } catch (refreshError) {
          console.log(refreshError);
          redirectLogin();
        }
      } else {
        redirectLogin();
      }
    }

    if (message && !isPathLogout) {
      const msg = Array.isArray(message) ? message?.[0] : message;
      // toast.error(msg);
      console.log(msg);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
