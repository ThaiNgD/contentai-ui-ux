import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  removeAuthToken,
  routerPath,
} from "@/config";
import { joinPathParent } from "@/helper/function";
import Axios from "axios";
// import { toast } from "react-toastify";

export const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN || "MKTtoken";
export const REFRESH_TOKEN = "MKTrefresh"; // Update Start: Thêm key refresh token
export const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:5000";

const axiosClient = Axios.create({
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

    return Promise.reject(error);
  }
);

export default axiosClient;
